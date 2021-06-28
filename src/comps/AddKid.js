import React, { useState } from 'react'

import {
    Button,
    createStyles,
    FormGroup,
    InputAdornment,
    makeStyles,
    TextField,
    Typography,
} from "@material-ui/core";

const useStyles = makeStyles(({ spacing }) =>
    createStyles({
        root: {
            display: "flex",
            flexWrap: "wrap",
            "& > *": {
                margin: "auto",
                width: "25vw",
            },
        },
        routes: {
            width: "50%",
        },
        appBar: {
            marginBottom: "10px",
        },
        margin: {
            margin: spacing(2),
        },
        alignText: {
            textAlign: "center",
        },
    })
);

function AddKid() {

    const classes = useStyles();
    const [kid, setKid] = useState({
        KidId: 1030,
        KidIdentityNumber: "",
        KidFirstName: "",
        KidLastName: "",
        KidImgUrl: "",
        ParentPhone: "",
        ParentGmail: "",
        IsActive: true,
        kinderGartenId: 100,
    });

    const [message, setMessage] = useState("");

    const changeHandler = (value, key) => {
        setKid((prevKid) => ({ ...prevKid, [key]: value }))
        console.log("-----------");
        console.log(kid.KidIdentityNumber);
    };

    const addHandler = () => {
        fetch(`http://localhost:54147/api/kid/GetKidByIdentityNumber/${kid.KidIdentityNumber}`, {
            headers: {
                "Content-Type": "application/json",
            }, method: "GET",

        })
            .then((response) => response.json())
            .then((res) => {
                if (res && res.KidIdentityNumber) {
                    setMessage(`A kid with identity number: ${kid.KidIdentityNumber} is exist`);
                } else {
                    fetch('http://localhost:54147/api/kid/AddKid', {
                        headers: {
                            "Content-Type": "application/json",
                        },
                        method: "POST",
                        body: JSON.stringify(kid),
                    }).then((response) => response.text())
                        .then((res) => setMessage(res));
                }
            });
    };

    return (
        // <form className={classes.root} noValidate autoComplete="off">
        //     <TextField  label="firstName" variant="filled"/>
        //     <TextField label="lastName" variant="filled" />
        //     <TextField label="Phone" variant="filled" />
        //     <input type="submit"></input>
        // </form>
        <div >

            <FormGroup>
                <TextField
                    className={classes.margin}
                    label="identity number"
                    variant="outlined"
                    value={kid.KidIdentityNumber}
                    onChange={(e) => {
                        changeHandler(e.target.value, "KidIdentityNumber");
                    }}
                />
            </FormGroup>
            <FormGroup>
                <TextField
                    className={classes.margin}
                    label="first name"
                    variant="outlined"
                    value={kid.KidFirstName}
                    onChange={(e) => {
                        changeHandler(e.target.value, "KidFirstName");
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                {/*<AccountCircleIcon />*/}
                            </InputAdornment>
                        ),
                    }}
                />
            </FormGroup>
            <FormGroup>
                <Button
                    className={classes.margin}
                    variant="contained"
                    color="secondary"
                    onClick={addHandler}
                >
                    Submit
                </Button>
            </FormGroup>

            <Typography className={classes.alignText}>{message}</Typography>

        </div>
    )
}



export default AddKid;
