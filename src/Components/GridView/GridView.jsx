import React, { useState, useEffect } from 'react';

import {
  Container,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
} from '@mui/material';

import { useDispatch, useSelector } from 'react-redux'
import { dataApi } from '../../Redux/getData/data.api';

import Header from '../Header/Header';
import Filters from "../Filters/Filters"
// import Cards from './Card';

import axios from 'axios';

const GridView = ({ handleLogout }) => {

  let token = window.localStorage.getItem("token");

  const { isLoading, isError, data } = useSelector((state) => state.data)

  const [state, setState] = useState();
  const [mdata, setMadta] = useState([]);
  const [search, setSearcher] = useState("");
  const [popularity, setPopularity] = useState(0);
  const [market, setMarket] = useState("");

  const dispatch = useDispatch();

  let popular = data.map((item) => item.popularity);

  const getMarketData = async () => {
    try {
      const response = await axios.get(
        `https://api.spotify.com/v1/markets`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            //   Content-Type: 'application/json',
          },
        }
      );
      const data = response.data.markets;
      setMadta(data, "market data")
    }
    catch (e) {
      console.log(e);
    }
  }

  const handleChange = (e) => {
    setState()
    setSearcher(e.target.value);
  }

  const handleChangePopularity = (e) => {
    if (e.target.innerHTML === NaN) {
      setPopularity(0)
      setState(data)
    }
    else {
      setPopularity(Number(e.target.innerHTML))
      let temp = data.filter((item) => item.popularity === Number(e.target.innerHTML));
      setState(temp);
    }
  }

  const handleChangeMarket = (e) => {
    setMarket(e.target.innerHTML);
  }

  useEffect(() => {
    dispatch(dataApi("track"))
    getMarketData()
  }, []);

  return (
    <>
      <Header data={search} handleLogout={handleLogout} handleChange={handleChange} />

      <Filters
        data={mdata}
        popularity={popular}
        popularityValue={popularity}
        handleChangePopularity={handleChangePopularity}
        marketValue={market}
        handleChangeMarket={handleChangeMarket}
      />

      <Container maxWidth="lg">
        {state ? (
          <div>
            {isLoading ? (
              <h1>Loading...</h1>
            ) : (
              <Grid container spacing={2}>
                {state?.map((item, i) => {
                  return (
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                      <Card key={i}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            image={item.album.images[1].url}
                            alt="green iguana"
                          />
                        </CardActionArea>
                        <CardContent>
                          <Typography variant="h5">
                            {item.name}
                          </Typography>
                          <Typography variant="h6" color="text.secondary">
                            Artist Name: {item.artists[0].name}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  )
                })}
              </Grid>
            )}
          </div>
        ) : (
          <div>
            {
              isLoading ? (
                <h1> Loading...</h1>
              ) : (
                <Grid container spacing={2}>
                  {data
                    ?.filter((item) => {
                      if (search === "") {
                        return item;
                      } else if (
                        item.artists[0].name
                          .toLowerCase()
                          .split(" ")
                          .join("")
                          .includes(search.toLowerCase())
                      ) {
                        return item;
                      }
                    })
                    .map((item, i) => {
                      return (
                        <Grid item xs={12} sm={12} md={6} lg={4}>
                          <Card key={i} sx={{ height: "100%" }}>
                            <CardActionArea>
                              <CardMedia
                                component="img"
                                image={item.album.images[1].url}
                                alt="green iguana"
                              />
                            </CardActionArea>
                            <CardContent>
                              <Typography variant="h5">
                                {item.name}
                              </Typography>
                              <Typography variant="h6" color="text.secondary">
                                Artist Name: {item.artists[0].name}
                              </Typography>
                            </CardContent>
                          </Card>
                        </Grid>
                      )
                    })}
                </Grid>
              )
            }
          </div>
        )}
      </Container>
    </>
  );
}

export default GridView;