import React from 'react';

import {
  Container,
  Stack,
  Typography,
  Autocomplete,
  TextField,
  Divider,
} from '@mui/material';

const Filters = ({
  data,
  popularity,
  popularityValue,
  handleChangePopularity,
  marketValue,
  handleChangeMarket,
}) => {
  const color = "#00d65f";

  return (
    <>
      <Container>
        <Typography
          mb={1}
          sx={{ marginTop: "5rem", fontWeight: "bold" }}
          variant="h5"
        >
          Filters
        </Typography>
        <Stack
          spacing={2}
          mb={3}
          direction={{ xs: "column", sm: "row", md: "row" }}
        >
          <Stack sx={{ width: "100%" }}>
            <Autocomplete
              id="multiple-limit-tags"
              size="small"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": { borderColor: color },
                },
                "& .MuiFormLabel-root.Mui-focused": {
                  color: color,
                },
              }}
              options={data}
              getOptionLabel={(option) => option}
              value={marketValue}
              onChange={(e) => handleChangeMarket(e)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Markets/Countries"
                  placeholder="Favorites"
                />
              )}
            />
          </Stack>
          <Stack sx={{ width: "100%" }}>
            <Autocomplete
              id="multiple-limit-tags"
              size="small"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": { borderColor: color },
                },
                "& .MuiFormLabel-root.Mui-focused": {
                  color: color,
                },
              }}
              options={popularity}
              getOptionLabel={(option) => option}
              value={popularityValue}
              onChange={(e) => handleChangePopularity(e)}
              renderInput={(params) => (
                <TextField

                  {...params}
                  label="Popularity"
                  placeholder="Favorites"
                />
              )}
            />
          </Stack>
        </Stack>
      </Container>
      <Divider sx={{ mb: 4 }} />
    </>
  );
};

export default Filters;