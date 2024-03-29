import Cluster from "../../atoms/Cluster/Cluster"
import Button from '@mui/material/Button';
import './Personalize.css'
import LightbulbIcon from '@mui/icons-material/Lightbulb';

export default function Personalize({ handleData }) {
  const copilotLink = 'https://copilot.microsoft.com/';
  return (
    <div className="personalize">
      <Button className="explore-ai" variant="contained" startIcon={<LightbulbIcon />}
        onClick={() => window.open(copilotLink, '_blank')}><span className="ai-model-label">Get AI Learning recommendations</span></Button>
      <Cluster 
        handleData={handleData}
      />
    </div>
  )
}

