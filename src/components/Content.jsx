import { Grid } from "@material-ui/core";
import React from "react";
import CoffeCard from "./CoffeCard";
import CoffeMakerList from "./Constants";

const Content = () => {
  const getCoffeMakerCard = (coffeMakerObj) => {
    return(
      <Grid item xs={12} sm={4}>
        <CoffeCard {...coffeMakerObj} />;
      </Grid>
    );
  };

  return (
    <Grid container spacing={4}>
      {CoffeMakerList.map((coffeMakerObj) => getCoffeMakerCard(coffeMakerObj))}
    </Grid>
  );
};

export default Content;