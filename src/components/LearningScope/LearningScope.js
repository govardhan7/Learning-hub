import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import './LearningScope.css';
import DefaultButton from '../../atoms/Button/Button';
import { Typography } from '@mui/material';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Button from '@mui/material/Button';


export default function LearningScope({ learningScopeData = [] , onDiscoverClick }) {
  const handleDelete = () => {

  }
  const userPrioritizationData = [
    {
      "id": 1,
      "techStackId": 7,
      "technology": "React.js"
    },
    {
      "id": 2,
      "techStackId": 8,
      "technology": "Node.js"
    },
    {
      "id": 3,
      "techStackId": 9,
      "technology": "JavaScript"
    },
    {
      "id": 4,
      "techStackId": 10,
      "technology": "AWS"
    }
  ];
  const managerAssignmentsData = [
    {
      "id": 1,
      "techStackId": 7,
      "technology": "Angular.js"
    },
    {
      "id": 2,
      "techStackId": 8,
      "technology": "Node.js"
    },
    {
      "id": 3,
      "techStackId": 9,
      "technology": "JavaScript"
    },
    {
      "id": 4,
      "techStackId": 10,
      "technology": "AWS"
    },
    {
      "id": 5,
      "techStackId": 10,
      "technology": "Azure"
    }
  ];


  const handleChipClick = (technology, group) => {
    console.log("delete");
  };

  return (
    <div className='scope-container'>

      <div className={"y-learning-scope"}>
        <div className='y-label'>Your Prioritizations</div>
        <div className='your-learning'>
          {userPrioritizationData.map(tech => (
            <Chip
              key={tech.id}
              label={tech.technology}
              className={`chip ${tech.selected ? 'chip-selected' : ''}`}
              onClick={() => handleChipClick(tech.technology)}
              avatar={<RemoveCircleOutlineIcon />}
            />

          ))}
        </div>
      </div>
      <div className={"m-learning-scope"}>
        <div className='m-label'>Manger Assignments</div>
        <div className='manager-assignments'>
          {managerAssignmentsData.map(tech => (
            <Chip
              key={tech.id}
              label={tech.technology}
              className={`chip ${tech.selected ? 'chip-selected' : ''}`}
              onClick={() => handleChipClick(tech.technology)}
              avatar={<RemoveCircleOutlineIcon />}
            />

          ))}
        </div>
      </div>

      <div className='discover-btn-container'>
        <Button className="discover-btn" variant="contained" onClick={onDiscoverClick} >Discover</Button>
      </div >
    </div>


  )
}