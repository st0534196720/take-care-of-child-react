import { useState, useEffect } from "react";
import ShowImage from "./ShowImage";
import { makeStyles } from "@material-ui/styles";
import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import { pink } from "@material-ui/core/colors";
// import IconButton from '@material-ui/core/IconButton';
// import InfoIcon from '@material-ui/icons/Info';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: pink,
    },
    gridList: {
        width: '90%',
        height: '100%',
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));

export default function ShowKids() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [kids, setKids] = useState([]);
    const classes = useStyles();


    useEffect(() => {
        fetch("http://localhost:54147/api/Kid/GetKids")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setKids(result);
                },
                //catch:
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])


    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className={classes.root}>
                <GridList spacing={10} cols={6} cellHeight={200} cellWidth={200} className={classes.gridList}>
                    {/* <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                        <ListSubheader component="div">Kids</ListSubheader>
                    </GridListTile> */}
                    {
                        kids.map(kid => (
                            <GridListTile key={kid.KidId}>
                                <ShowImage image={kid.KidImgUrl} />
                                <GridListTileBar
                                    title={kid.KidFirstName}
                                    subtitle={<span>Phone: {kid.ParentPhone}</span>}
                                    // actionIcon={
                                    //     <IconButton aria-label={`info about ${kid.KidFirstName}`} className={classes.icon}>
                                    //         <InfoIcon />
                                    //     </IconButton>
                                    // }
                                />
                            </GridListTile>
                        ))
                    }
                </GridList>
            </div>
        );
    }
}












