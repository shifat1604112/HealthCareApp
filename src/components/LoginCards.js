import React from "react";
import {CardActions,Card,CardContent,CardMedia,CardActionArea,Grid,Typography,Button,Box} from "@material-ui/core/";
import {Link} from 'react-router-dom';

function LoginCards() {  
    return (
    <>
    <Box m={9}>
        <Grid container spacing={1} justify="center" >
                <Grid item xs={4}>
                <Card>
                    <CardActionArea>
                        <CardMedia component="img" image="/img/log.png" alt="loginImage"/>
                        <CardContent>
                        <Box p={.5}>
                        <Typography variant="h6">
                            Admin Login
                        </Typography>
                        </Box>
                        </CardContent>
                    </CardActionArea>
                    <CardActions style={{justifyContent: 'center'}}>
                        <Grid container justify="space-evenly">
                            <Grid item>
                                <Box mt={1}>
                                    <Button variant="contained" color="primary" component={Link} to="/admin">Login</Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </CardActions>
                </Card>
                </Grid>

                <Grid item xs={4}>
                <Card>
                    <CardActionArea>
                        <CardMedia component="img" image="/img/hos.jpg" alt="loginImage" height="203"/>
                        <CardContent>
                        <Box p={.5}>
                        <Typography variant="h6">
                            Hospital Login
                        </Typography>
                        </Box>
                        </CardContent>
                    </CardActionArea>
                    <CardActions style={{justifyContent: 'center'}}>
                       <Grid container justify="space-evenly">
                            <Grid item>
                                <Box mt={1}>
                                    <Button variant="contained" color="primary" component={Link} to="/hospital">Login</Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </CardActions>
                </Card>
                </Grid>

                <Grid item xs={4}>
                <Card>
                    <CardActionArea>
                        <CardMedia component="img" image="/img/pat.jpg" alt="loginImage" height="203"/>
                        <CardContent>
                        <Box p={.5}>
                        <Typography variant="h6">
                            Patient Login
                        </Typography>
                        </Box>
                        </CardContent>
                    </CardActionArea>
                    <CardActions style={{justifyContent: 'center'}}>
                    <Grid container justify="center" spacing={2}>
                        <Grid item>
                            <Box mt={1}>
                                <Button variant="contained" color="primary" component={Link} to="/signup">Sign Up</Button>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box mt={1}>
                                <Button variant="contained" color="primary" component={Link} to="/patient">Login</Button>
                            </Box>
                        </Grid>
                     </Grid>
                    </CardActions>
                </Card>
                </Grid>


        </Grid>
    </Box>
    </>
    );}
export default LoginCards;