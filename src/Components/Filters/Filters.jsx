import React from 'react';

import {
    Container,
    Stack,
    Typography,
    Chip,
    Autocomplete,
    TextField,
    Divider,
} from '@mui/material';

const Filters = () => {

    const color = '#00d65f';

    const data = [
        { label: 'Chip 1', title: 'Chip 1' },
        { label: 'Chip 2', title: 'Chip 2' },
        { label: 'Chip 3', title: 'Chip 3' },
        { label: 'Chip 4', title: 'Chip 4' },
        { label: 'Chip 5', title: 'Chip 5' },
        { label: 'Chip 6', title: 'Chip 6' },
        { label: 'Chip 7', title: 'Chip 7' },
        { label: 'Chip 8', title: 'Chip 8' },
        { label: 'Chip 9', title: 'Chip 9' },
        { label: 'Chip 10', title: 'Chip 10' },
    ];

    return (
        <>
            <Container>
                <Typography mb={1} sx={{ marginTop: "5rem", fontWeight: "bold" }} variant="h5">Filters</Typography>
                <Stack spacing={2} mb={3} direction={{ xs: 'column', sm: 'row', md: "row" }}>
                    <Stack sx={{ width: '100%' }}>
                        <Autocomplete
                            multiple
                            limitTags={4}
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
                            getOptionLabel={(option) => option.title}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Markets/Countries"
                                    placeholder="Favorites"
                                />
                            )}
                        />
                    </Stack>
                    <Stack sx={{ width: '100%' }}>
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
                            getOptionLabel={(option) => option.title}
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
    )
}

export default Filters;