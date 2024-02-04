import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Personalize from '../Personalize/Personalize';
import LearningScope from '../LearningScope/LearningScope';
import Discover from '../Discover/Discover';
import './HomePage.css'

function CustomTabPanel(props) {
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

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleDiscoverClick = () => {
    console.log("Discover button clicked!");
    setValue(2);
  };
  return (
    <div className='tab-container'>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Personalize" {...a11yProps(0)} />
            <Tab label="Prioritize" {...a11yProps(1)} />
            <Tab label="Discover" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Personalize />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <LearningScope  onDiscoverClick={handleDiscoverClick}/>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Discover   />
        </CustomTabPanel>
      </Box>
    </div>
  );
}