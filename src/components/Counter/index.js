import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    height: "90vh",
  },
  form: {
    backgroundColor: "#232626",
    height: "40vh",
    borderRadius: "20px",
    border: "1px solid #393a3b",
  },
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  counter: {
    color: "#4f5254",
    fontSize: "9em",
    marginBottom: 0,
  },
  instructions: {
    color: "#e3e6ea",
    fontSize: "2.3em",
  },
}));

const Counter = ({ counter, setCounter }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.container}>
        <Grid item xs={4}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-around"
            className={classes.form}
          >
            <Typography className={classes.instructions}>
              Press the button:
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={() => setCounter(++counter)}
            >
              Count
            </Button>
            <Typography variant="h1" className={classes.counter}>
              {counter}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Counter;
