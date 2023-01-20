import React from 'react';

import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    TextField,
    Button
} from '@mui/material';

import logo from '../../assets/logo.svg'
import Logout from './Logout/Logout';

const Header = ({ handleLogout }) => {

    const color = '#00d65f';

    return (
        <>
            <Box sx={{ flexGrow: 1, marginBottom: "4.5rem" }}>
                <AppBar sx={{ backgroundColor: "#000" }} component="nav" position="fixed">
                    <Toolbar>
                        <Box p={1}>
                            <img src={logo} width={40} alt="logo" />
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            Spotify Music Player
                        </Typography>
                        <TextField
                            size='small'
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    "&.Mui-focused fieldset": { borderColor: color },
                                },
                                "& .MuiFormLabel-root.Mui-focused": {
                                    color: color,
                                },
                                "&.MuiInputBase-root": {
                                    color: color,
                                },
                                "& .MuiInputBase-input": {
                                    color: color,
                                }
                            }}
                            focused
                            placeholder="Search..."
                            variant="outlined"
                        />
                        <Button
                            variant="contained"
                            sx={{
                                "&.MuiButton-root": {
                                    backgroundColor: color,
                                    color: "#000",
                                    "&:hover": {
                                        backgroundColor: color,
                                        color: "#000"
                                    }
                                },
                                marginLeft: "0.5rem"
                            }}
                        >Search
                        </Button>

                        <Logout handleLogout={handleLogout} />
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Header;