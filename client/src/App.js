import React, { useState, useEffect } from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import blogApp from './images/blogApp.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return(
        
        <Container maxWidth = 'xl' disableGutters = {true} >
            <div className="area" >
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <AppBar className={classes.appBar} position="static" color="inherit">
                        <h1 className="heading" variant="h2" align="center">Postagram</h1>
                        <img className={classes.image} src={blogApp} alt="blogApp" height="60"/>
                    </AppBar>
                    <Grow in>
                        <Container className={classes.formGrid}>
                            <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
                            <Grid item xs={12} sm={6}>
                                    <Typography className={classes.About1}>
                                        Hello World!
                                    </Typography>
                                    <Typography className={classes.About1}>
                                        This is a web app built
                                        using the MERN stack where
                                        you can perform CRUD 
                                        operations on posts.
                                    </Typography>
                                    <Typography className={classes.About2}>
                                        <br></br>
                                        Use the form to create a new post or scroll down to view posts.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={5}>
                                    <Form currentId={currentId} setCurrentId={setCurrentId} />
                                </Grid>
                            </Grid>
                        </Container>
                    </Grow>
                </ul>
            </div >
            <Container className={classes.postBody} maxWidth = 'xl' >
                <Grow in>
                    <Container>
                        <Grid container alignItems="stretch">
                            <Grid item xs={12}>
                                <Posts setCurrentId={setCurrentId} />
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
            </Container>
        </Container>
    );
}

export default App;