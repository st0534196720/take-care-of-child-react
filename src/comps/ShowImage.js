import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }, 
    image: {
        height: '60%',
        width: '50%'
        
    }
}));

export default function ShowImage({ image }) {
    const classes = useStyles();

    return (
        <Grid item>            
                <img alt="kid" src={process.env.PUBLIC_URL + image} className={classes.image} />               
        </Grid>
    );
}
