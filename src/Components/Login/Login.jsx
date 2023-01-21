import React, { useState, useEffect } from 'react';

import {
    Box,
    Button,
    Container,
    Typography,
} from '@mui/material';

import GridView from '../GridView/GridView';

const Login = () => {

    const color = '#00d65f';

    const CLIENT_ID = "153d87f5720d4b3c8b119b19c89af9b9";
    const REDIRECT_URI = "https://spotify-music-player-delta.vercel.app";
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    const RESPONSE_TYPE = "token";

    const [token, setToken] = useState("");

    useEffect(() => {
        const hash = window.location.hash;

        // Get the token from the local storage
        let token = window.localStorage.getItem("token");

        if (!token && hash) {
            // Separate the access_token from the hash in the URL
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];

            window.location.hash = "";
            console.log(token, "set token")
            // Save the token in the local storage
            window.localStorage.setItem("token", token);

            // Set the token in the state
            setToken(token);
        }

    }, []);

    // http://localhost:3000/#access_token=BQDbN9yAsIwGDDNCv_byDHGkcmJAFjMYLvR2oEJ6CFfHNsqzKac322HIb8HMRi51qZ4lXQJfqoCMxh6Yse_x3477iuYuAcQNWVDalF2qq3qWCdeRhME9bBSsSyLQU05uP56C6k8-wcAZCYYN5B41bq6lCtRHhWJeh9t7bj2KQoSuB3Ea7I2GbGheFe2fFNA&token_type=Bearer&expires_in=3600

    const handleLogout = () => {
        setToken("");
        window.localStorage.removeItem("token");
    }

    return (
        <>
            {
                !token ? (
                    <Container maxWidth="md">
                        <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" width={200} alt="Spotify Logo" />
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '80vh',
                            }}
                        >
                            <Typography align='center' variant="h4">Welcome to Spotify</Typography>
                            <Box sx={{ display: "flex", justifyContent: "center" }}>
                                <Button
                                    variant="contained"
                                    sx={{
                                        mt: 2,
                                        backgroundColor: color,
                                        "&:hover": {
                                            backgroundColor: color,
                                        }
                                    }}
                                    onClick={() => window.location = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
                                >
                                    Login
                                </Button>
                            </Box>
                        </Box>

                    </Container>
                ) : (
                    <div>
                        <GridView handleLogout={handleLogout} />
                    </div>
                )
            }
        </>
    )
}

export default Login;