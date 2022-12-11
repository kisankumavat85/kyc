import React, { useState } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {},
  tabButton: {
    padding: 6,
    backgroundColor: "",
  },
});

const PageContent = () => {
  const classes = useStyles();
  const [tab, setTab] = useState(0);

  const handleChange = (e, newTab) => {
    setTab(newTab);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={tab} onChange={handleChange}>
          <Tab className={classes.tabButton} label="Item One" value={0} />
          <Tab label="Item Two" value={1} />
          <Tab label="Item Three" value={2} />
        </Tabs>
      </Box>
      <TabPanel value={tab} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={tab} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={tab} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default PageContent;
