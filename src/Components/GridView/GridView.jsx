import React from 'react';

import {
    Box,
    Container,
    Grid,
    Card,
    CardContent,
} from '@mui/material';

const GridView = () => {
    return (
        <>
            <Container maxWidth='lg' sx={{ marginTop: "7rem" }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Card sx={{ bgcolor: "#f5f5f5", height: "100%" }}>
                            <CardContent>

                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Card sx={{ bgcolor: "#f5f5f5", height: "100%" }}>
                            <CardContent>

                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Card sx={{ bgcolor: "#f5f5f5", height: "100%" }}>
                            <CardContent>

                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default GridView;