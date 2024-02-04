import Chip from '@mui/material/Chip';
import './LearningScope.css';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Button from '@mui/material/Button';
import BlockRoundedIcon from '@mui/icons-material/BlockRounded';
import InfoIcon from '@mui/icons-material/Info';

export default function LearningScope({ userPrioritizationData = [], onDiscoverClick, handleData }) {
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
    handleData(technology, group);
  };

  return (
    <div className='scope-container'>

      <div className={"y-learning-scope"}>
        <div className='y-label'>Your Prioritizations</div>
        {userPrioritizationData.length === 0 ? (
          <div className='your-learning-info'>
            <InfoIcon/><p> Personalize your learnings</p>
          </div>
        ) : (
          <div className='your-learning'>
            {userPrioritizationData.map(tech => (
              <Chip
                key={tech.id}
                label={tech.technology}
                className={`chip ${tech.selected ? 'chip-selected' : ''}`}
                onClick={() => handleChipClick(tech.technology, tech.group)}
                avatar={<RemoveCircleOutlineIcon />}
              />
            ))}
          </div>
        )}
      </div>
      <div className={"m-learning-scope"}>
        <div className='m-label'>Manager Assignments</div>
        <div className='manager-assignments'>
          {managerAssignmentsData.map(tech => (
            <Chip
              key={tech.id}
              label={tech.technology}
              className={`chip chip-disabled ${tech.selected ? 'chip-selected' : ''}`}
              avatar={<BlockRoundedIcon />}
            />

          ))}
        </div>
      </div>

      <div className='discover-btn-container'>
        <Button className="discover-btn" variant="contained" onClick={onDiscoverClick}>Recommend</Button>
      </div >
    </div>


  )
}