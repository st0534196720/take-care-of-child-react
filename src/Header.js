import {
    AppBar,
    Button,
    ButtonGroup,
    createStyles,
    FormGroup,
    InputAdornment,
    makeStyles,
    Paper,
    TextField,
    Toolbar,
    Typography,
  } from "@material-ui/core";
  // import AccountCircleIcon from "@material-ui/icons/AccountCircle";
  import React,{ useState } from "react";
  import {useHistory} from  "react-router-dom";
  
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
  
  function Header() {
    const classes = useStyles({});
    const history = useHistory()
   
    return (
      <div >
  
          <AppBar position="static" className={classes.appBar}>
            <Toolbar>
              <Typography color="inherit">Welcome</Typography>
            </Toolbar>
          </AppBar>
          <ButtonGroup
            color="primary"
            variant="contained"
            style={{ width: "100%" }}
          >
            <Button className={classes.routes} onClick={() => history.push("/login")}>
              Login
            </Button>
            <Button className={classes.routes} onClick={() => history.push("/register")}>
              Register
            </Button>
          </ButtonGroup>
      </div>
    );
  }
  export default Header;
  