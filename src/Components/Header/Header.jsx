import React from 'react';

import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    TextField,
} from '@mui/material';

import logo from '../../assets/logo.svg'
import Logout from './Logout/Logout';

const Header = ({ handleLogout, data, handleChange }) => {

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
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none', md: "block" } }}
                        >
                            Spotify Music Player
                        </Typography>
                        <TextField
                            size='small'
                            sx={{
                                width: {
                                    xs: "100%", sm: "100%", md: "50%", lg: "25%"
                                },
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
                            placeholder="Search track by artist name"
                            variant="outlined"
                            value={data}
                            onChange={(e) => handleChange(e)}
                        />
                        <Box sx={{ display: "flex", justifyContent: "end" }}>
                            <Logout handleLogout={handleLogout} />
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Header;