import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import './LearningScope.css';
import DefaultButton from '../../atoms/Button/Button';
import { Typography } from '@mui/material';

export default function LearningScope({ learningScopeData = [] }) {
  const handleDelete = () => {

  }

  return (
    <div className={"learning-scope"}>
      {
        learningScopeData.length > 0 ? 
      (
        <>
          <Stack className={"learning-scope-list"} direction="column" spacing={2} alignItems="flex-start">
            { learningScopeData.map(data => <Chip label={data.label} variant="outlined" onDelete={handleDelete} />) }
          </Stack>
          <Stack direction="row" justifyContent="flex-end">
            <DefaultButton/>
          </Stack>
        </>
      ) : 
        <Typography gutterBottom variant="h5" component="div">
          Select some Techstacks
        </Typography>
      }
    </div>
    
  )
}