import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <h1>PAGE NOT FOUND</h1>
        <Button size="large" variant="contained" onClick={() => navigate("/")}>
          HOME
        </Button>
      </Grid>
    </div>
  );
};

export default PageNotFound;
