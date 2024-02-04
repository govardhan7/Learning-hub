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
import { connect } from 'react-redux';
import { updateUserData, updateUserPrioritizationData } from '../../redux/actions';

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

function BasicTabs ({ userData, userPrioritizationData, updateUserData, updateUserPrioritizationData }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleDiscoverClick = () => {
    console.log("Discover button clicked!");
    setValue(2);
  };

  const updateData = (technology, group) => {
    const updatedUserData = JSON.parse(JSON.stringify(userData));
    const techStack = updatedUserData.users[0].techStack.find(tech => tech.group === group);
    const selectedTechnology = techStack.technologies.find(tech => tech.name === technology);
    selectedTechnology.selected = !selectedTechnology.selected;
    console.log('==userPrioritizationData', userPrioritizationData)
    let updatedUserPrioritizationData = userPrioritizationData ? JSON.parse(JSON.stringify(userPrioritizationData)) : [];
    if (selectedTechnology.selected) {
      updatedUserPrioritizationData.push({
        id: selectedTechnology.id,
        technology: selectedTechnology.name,
        group: group
      })
    } else {
      updatedUserPrioritizationData = updatedUserPrioritizationData.filter(data => data.technology !== technology);
    }
    updateUserPrioritizationData(updatedUserPrioritizationData)
    updateUserData(updatedUserData);
  }
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
          <Personalize 
            handleData={updateData}
          />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <LearningScope  
            onDiscoverClick={handleDiscoverClick} 
            userPrioritizationData={userPrioritizationData} 
            handleData={updateData}
          />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Discover   />
        </CustomTabPanel>
      </Box>
    </div>
  );
}

const mapStateToProps = (state) => ({
  userData: state.userData,
  userPrioritizationData: state.userPrioritizationData
});

export default connect(mapStateToProps, { updateUserData, updateUserPrioritizationData })(BasicTabs);