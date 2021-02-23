import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import CardTravelIcon from "@material-ui/icons/CardTravel";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  typographyStyle: {
    flex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.typographyStyle}>Header !</Typography>
        <CardTravelIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
