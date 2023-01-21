import React from 'react';

import {
    Container,
    Grid,
    Card,
    CardActionArea,
    CardMedia,
    Typography,
    CardContent,
} from '@mui/material';

const GridView = () => {
    return (
        <>
            <Container maxWidth='lg'>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Card sx={{ bgcolor: "#f5f5f5", height: "100%" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image="https://i.scdn.co/image/ab67616d00001e021431c3bdf16aa99f71799d95"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Track Name
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
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