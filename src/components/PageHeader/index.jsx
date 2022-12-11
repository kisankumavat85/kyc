import { Box, Button, Typography } from "@mui/material";
import React from "react";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import LocalPrintshopRoundedIcon from "@mui/icons-material/LocalPrintshopRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    height: 78,
    padding: "0 10px",
    borderBottom: "1px solid #E5E5E5",
  },
  name: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
  },
  buttons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
  },
  button: {
    "&.MuiButtonBase-root": {
      backgroundColor: "#F8F8F8",
      boxShadow: "none",
      color: "#177CDA",
      textTransform: "none",
    },
  },
});

const sections = [
  "Summary",
  "Financials",
  "Source of risk",
  "UBOs and Directors",
  "Network",
  "Adverse Media",
  "Documents",
];

const PageHeader = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.name}>
        <Box>
          <ArrowBackIosNewRoundedIcon />
        </Box>
        <Box>
          <Typography variant="h5" fontSize={24} fontWeight="700">
            Reliance Pvt. Ltd
          </Typography>
        </Box>
        <Typography color="#5F6368">| Conglomerate | India</Typography>
      </Box>
      <Box className={classes.buttons}>
        <Button
          variant="contained"
          className={classes.button}
          startIcon={<BookmarkRoundedIcon />}
        >
          Save
        </Button>
        <Button
          variant="contained"
          className={classes.button}
          startIcon={<LocalPrintshopRoundedIcon />}
        >
          Print
        </Button>
        <Button
          variant="contained"
          className={classes.button}
          startIcon={<DownloadRoundedIcon />}
        >
          Download
        </Button>
      </Box>
    </Box>
  );
};

export default PageHeader;
