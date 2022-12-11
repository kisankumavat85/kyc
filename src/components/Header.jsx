import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Divider,
  IconButton,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import WindowIcon from "@mui/icons-material/Window";
import { PRIMARY } from "../constants/colors";
import QuestionMarkRoundedIcon from "@mui/icons-material/QuestionMarkRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: 80,
    // border: "1px solid red",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 10px",
    boxSizing: "border-box",
  },
  appBar: {
    position: "relative",
    backgroundColor: "#FFF",
    "& .MuiToolbar-root": {
      height: "80px",
    },
    "& .MuiSvgIcon-root": {
      color: { PRIMARY },
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    gap: 15,
  },
  theme: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  question: {
    height: 25,
    width: 25,
    padding: 5,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.16)",
  },
  notification: {
    height: 25,
    width: 25,
    padding: 5,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.16)",
  },
  user: {
    display: "flex",
    gap: 10,
    alignItems: "center",
  },
  divider: {
    borderLeft: "1px solid #d7d7d7",
    height: 40,
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box>
        <WindowIcon sx={{ color: "#177CDA" }} />
      </Box>
      <Box className={classes.container}>
        <Box className={classes.theme}>
          <Typography>Dark Mode</Typography>
          <Switch defaultChecked />
        </Box>
        <Box>
          <Box className={classes.question}>
            <QuestionMarkRoundedIcon />
          </Box>
        </Box>
        <Box className={classes.notification}>
          <IconButton>
            <Badge
              badgeContent={5}
              sx={{
                "& .MuiBadge-badge": {
                  color: "#fff",
                  backgroundColor: "#177CDA",
                },
              }}
            >
              <NotificationsRoundedIcon />
            </Badge>
          </IconButton>
        </Box>
        <Box className={classes.divider}></Box>
        <Box>
          <Box className={classes.user}>
            <Typography>Kisan Kumavat</Typography>
            <Avatar>
              <PersonRoundedIcon />
            </Avatar>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
