import { Grid } from '@mui/material';
import Card from '../../atoms/Card/Card';

export default function Discover({ courseList = [] }) {
  return (
    <Grid container spacing={4}>
      {
        courseList.map(course => {
          return (
            <Grid item xs={12} sm={4} md={3}>
              <Card {...course} />
            </Grid>
          )
        })
      }
    </Grid>
  )
}