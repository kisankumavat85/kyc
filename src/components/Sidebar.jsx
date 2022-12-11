import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import React from "react";
import { makeStyles } from "@mui/styles";
import HandshakeIcon from "@mui/icons-material/Handshake";
import { PRIMARY } from "../constants/colors";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import RecentActorsRoundedIcon from "@mui/icons-material/RecentActorsRounded";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import FindInPageRoundedIcon from "@mui/icons-material/FindInPageRounded";
import AssignmentReturnedRoundedIcon from "@mui/icons-material/AssignmentReturnedRounded";
import Link from "next/link";
import { useRouter } from "next/router";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#FFF",
    width: "320px ",
    marginTop: 2,
  },
  link: {
    textDecoration: "none",
  },
  linkSelected: {
    backgroundColor: "#177CDA",
    color: "#fff",
    display: "flex",
    height: 45,
    alignItems: "center",
    paddingLeft: 20,
  },
  linkUnselected: {
    display: "flex",
    height: 45,
    alignItems: "center",
    paddingLeft: 20,
    backgroundColor: "#fff",
    color: "#5F6368",
  },
});

const sidebarItems = [
  {
    title: "Dashboard",
    icon: HomeIcon,
    link: "/a",
  },
  {
    title: "Onboarding",
    icon: HandshakeIcon,
    link: "/b",
  },
  {
    title: "Due diligence status",
    icon: CheckCircleOutlineRoundedIcon,
    link: "/c",
  },
  {
    title: "Global ID verification",
    icon: RecentActorsRoundedIcon,
    link: "/d",
  },
  {
    title: "Company search",
    icon: BusinessRoundedIcon,
    link: "/e",
  },
  {
    title: "AML screening",
    icon: FindInPageRoundedIcon,
    link: "/aml-screening",
  },
  {
    title: "Document extraction",
    icon: AssignmentReturnedRoundedIcon,
    link: "/f",
  },
];

const Sidebar = () => {
  const classes = useStyles();
  const { pathname } = useRouter();
  console.log("pathname", pathname);

  return (
    <Box component="aside" className={classes.root}>
      <List>
        {sidebarItems.map((item, i) => (
          <Link className={classes.link} href={item.link} key={i}>
            <Box
              className={
                pathname === item.link
                  ? classes.linkSelected
                  : classes.linkUnselected
              }
            >
              <ListItemIcon>
                {
                  <item.icon
                    sx={{ color: pathname === item.link ? "#fff" : "#177CDA" }}
                  />
                }
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </Box>
          </Link>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
