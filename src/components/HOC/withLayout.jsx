import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    boxSizing: "border-box",
  },
  mainBox: {
    // position: "absolute",
    // top: 83,
    display: "flex",
    gap: 10,
    flexDirection: "",
    backgroundColor: "#e5e5e5",
    width: "100%",
    height: "100vh",
  },
  main: {
    width: "100%",
    marginTop: 20,
    backgroundColor: "#fff",
  },
});

const withLayout = (Component) => {
  const Layout = (props) => {
    const classes = useStyles();

    return (
      <Box component="div" className={classes.root}>
        <Header />
        <Box className={classes.mainBox}>
          <Sidebar />
          <Box component="main" className={classes.main}>
            <Component {...props} />
          </Box>
        </Box>
      </Box>
    );
  };

  if (Component.getInitialProps) {
    Layout.getInitialProps = Component.getInitialProps;
  }

  return Layout;
};

export default withLayout;
