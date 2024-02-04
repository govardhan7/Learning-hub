import React, { useEffect, useState } from 'react';

import './Cluster.css'; // Import the CSS file for styling
import Chip from '@mui/material/Chip';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { fetchUserData } from '../../redux/actions';
import { connect } from 'react-redux';  // Import the connect function
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';


// Cluster.js


const Cluster = ({ userData, fetchUserData, handleData }) => {
    useEffect(() => {
        if (!userData) {
            fetchUserData();
        }
    }, [fetchUserData, userData]);

    const handleChipClick = (technology, group) => {
    handleData(technology, group)
    };

    return (
        <div className="clusters-container">
            <div className='recommendation-checkbox'>
                <FormControl>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        defaultValue="Role"
                    >
                        <FormControlLabel value="Role" control={<Radio />} label="Role based" />
                        <FormControlLabel disabled value="Skill" control={<Radio />} label="Skill based" />
                        <FormControlLabel disabled value="Demand" control={<Radio />} label="Demand based" />

                    </RadioGroup>
                </FormControl>
            </div>
            {userData?.users.map(user => (
                <div key={user.id} className="user-container">
                    {user.techStack.map(group => (
                        <div key={group.group} className="cluster">
                            <h2 className='cluster-name'>{group.group}</h2>
                            <div className="chips-container">
                                {group.technologies.map(tech => (
                                    <>
                                        <Chip key={tech.name} label={tech.name} className={`chip ${tech.selected ? 'chip-selected' : ''}`} onClick={() => handleChipClick(tech.name, group.group)} avatar={
                                            <>
                                                {tech.selected ? (
                                                    <CheckCircleIcon />
                                                ) : (
                                                    <AddCircleOutlineRoundedIcon />
                                                )}
                                                {/* <div>
                                                    <div style={{ border: '2px solid #000', borderRadius: '50%', padding: '5px', margin: '5px', textAlign: 'center' }}>R</div>
                                                    <div style={{ border: '2px solid #000', borderRadius: '50%', padding: '5px', margin: '5px', textAlign: 'center' }}>S</div>
                                                    <div style={{ border: '2px solid #000', borderRadius: '50%', padding: '5px', margin: '5px', textAlign: 'center' }}>D</div>
                                                </div> */}
                                            </>
                                        }  >


                                        </Chip>
                                    </>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ))
            }
        </div >
    );
}
const mapStateToProps = (state) => ({
    userData: state.userData,
});

export default connect(mapStateToProps, { fetchUserData })(Cluster);
