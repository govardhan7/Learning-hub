import React, { useEffect, useState } from 'react';

import './Cluster.css'; // Import the CSS file for styling
import Chip from '@mui/material/Chip';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { fetchUserData, updateUserData } from '../../redux/actions';
import { connect } from 'react-redux';  // Import the connect function
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


// Cluster.js


const Cluster = ({ userData, fetchUserData }) => {
    const [selectedTechnologies, setSelectedTechnologies] = useState([]);
    // let data = {};

    useEffect(() => {
        fetchUserData();
    }, [fetchUserData]);
    useEffect(() => {
        if (userData) {
            console.log('User Data:', userData);
            // data = userData
        }
    }, [userData]);
    let data = {
        users: [
            {
                id: 1,
                username: "Govardhan",
                role: "Experience Engineer L2",
                techStack: [
                    {
                        group: "MEAN Stack",
                        technologies: [
                            {
                                name: "JavaScript",
                                courses: [
                                    "JavaScript 101",
                                    "JavaScript 201",
                                    "JavaScript 301"
                                ]
                            },
                            {
                                name: "MongoDB",
                                courses: [
                                    "MongoDB 101",
                                    "MongoDB 201",
                                    "MongoDB 301"
                                ]
                            },
                            {
                                name: "Express",
                                courses: [
                                    "Express 101",
                                    "Express 201",
                                    "Express 301"
                                ]
                            },
                            {
                                name: "Angular",
                                courses: [
                                    "Angular 101",
                                    "Angular 201",
                                    "Angular 301"
                                ]
                            },
                            {
                                name: "Node.js",
                                courses: [
                                    "Node.js 101",
                                    "Node.js 201",
                                    "Node.js 301"
                                ]
                            }
                        ]
                    },
                    {
                        group: "MERN Stack",
                        technologies: [
                            {
                                name: "JavaScript",
                                courses: [
                                    "JavaScript 101",
                                    "JavaScript 201",
                                    "JavaScript 301"
                                ]
                            },
                            {
                                name: "MongoDB",
                                courses: [
                                    "MongoDB 101",
                                    "MongoDB 201",
                                    "MongoDB 301"
                                ]
                            },
                            {
                                name: "Express",
                                courses: [
                                    "Express 101",
                                    "Express 201",
                                    "Express 301"
                                ]
                            },
                            {
                                name: "React",
                                courses: [
                                    "React 101",
                                    "React 201",
                                    "React 301"
                                ]
                            },
                            {
                                name: "Node.js",
                                courses: [
                                    "Node.js 101",
                                    "Node.js 201",
                                    "Node.js 301"
                                ]
                            }
                        ]
                    },
                    {
                        "group": "Full Stack",
                        "technologies": [
                            {
                                "name": "JavaScript",
                                "courses": [
                                    "JavaScript 101",
                                    "JavaScript 201",
                                    "JavaScript 301"
                                ]
                            },
                            {
                                "name": "Vue.js",
                                "courses": [
                                    "Vue.js 101",
                                    "Vue.js 201",
                                    "Vue.js 301"
                                ]
                            },
                            {
                                "name": "React",
                                "courses": [
                                    "React 101",
                                    "React 201",
                                    "React 301"
                                ]
                            },
                            {
                                "name": "Angular",
                                "courses": [
                                    "Angular 101",
                                    "Angular 201",
                                    "Angular 301"
                                ]
                            },
                            {
                                "name": "Node.js",
                                "courses": [
                                    "Node.js 101",
                                    "Node.js 201",
                                    "Node.js 301"
                                ]
                            },
                            {
                                "name": "Express",
                                "courses": [
                                    "Express 101",
                                    "Express 201",
                                    "Express 301"
                                ]
                            },
                            {
                                "name": "Flask",
                                "courses": [
                                    "Flask 101",
                                    "Flask 201",
                                    "Flask 301"
                                ]
                            },
                            {
                                "name": "Spring Boot",
                                "courses": [
                                    "Spring Boot 101",
                                    "Spring Boot 201",
                                    "Spring Boot 301"
                                ]
                            },
                            {
                                "name": ".NET Core",
                                "courses": [
                                    ".NET Core 101",
                                    ".NET Core 201",
                                    ".NET Core 301"
                                ]
                            },
                            {
                                "name": "MongoDB",
                                "courses": [
                                    "MongoDB 101",
                                    "MongoDB 201",
                                    "MongoDB 301"
                                ]
                            },

                        ]
                    },
                    {
                        "group": "Cloud",
                        "technologies": [
                            {
                                "name": "AWS",
                                "courses": [
                                    "AWS 101",
                                    "AWS 201",
                                    "AWS 301"
                                ]
                            },
                            {
                                "name": "Heroku",
                                "courses": [
                                    "Heroku 101",
                                    "Heroku 201",
                                    "Heroku 301"
                                ]
                            }
                        ]
                    }


                ]
            }
        ]
    };
    const handleChipClick = (technology, group) => {
        console.log(technology, group);

        // Update the user data when a chip is clicked
        const updatedUserData = userData.users.map((user) => ({
            ...user,
            techStack: user.techStack.map((techGroup) => ({
                ...techGroup,
                technologies: techGroup.technologies.map((tech) => ({
                    ...tech,
                    selected: techGroup.group === group && tech.name === technology ? !tech.selected : tech.selected,
                })),
            })),
        }));

        // Assuming you have a Redux action to update user data, dispatch it here
        // dispatch(updateUserData(updatedUserData));
        userData = updatedUserData
        // updateUserData(updatedUserData);
        console.log(updatedUserData);
    };


    console.log(data);
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
            {data.users.map(user => (
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
                                    //   CheckCircleIcon
                                ))}
                            </div>
                            <Chip style={{ margin: '10px 0px' }} key='vue.js' label='vue.js' className={`chip chip-selected`} avatar={<CheckCircleIcon />} />
                            <Chip style={{ margin: '10px 0px' }} key='TypeScript' label='TypeScript' className={`chip chip-selected`} avatar={<CheckCircleIcon />} />

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

export default connect(mapStateToProps, { fetchUserData, updateUserData })(Cluster);
