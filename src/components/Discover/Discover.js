import { Grid } from '@mui/material';
import Card from '../../atoms/Card/Card';

export default function Discover({ courseList = [] }) {
  // remove this file after data integration is done
courseList =[
  {
    title: 'React',
    description: 'Learn the fundamentals of React, a popular JavaScript library for building user interfaces. Explore React components, state, props, and more.',
    imgSrc: 'intermediate.jpg'
  },
  {
    title: 'React Workshop',
    description: 'Participate in an interactive workshop focused on advanced React concepts. Dive deeper into state management, hooks, and component lifecycle.',
    imgSrc: 'Advaced react.jpg'
  },
  {
    title: 'React 301',
    description: 'Take your React skills to the next level with an advanced course covering topics like Redux, React Router, and best practices for scalable applications.',
    imgSrc: 'Advaced react.jpg'
  },
  {
    title: 'Vue.js',
    description: 'Explore Vue.js, a progressive JavaScript framework for building user interfaces. Learn about Vue components, directives, and Vue Router.',
    imgSrc: 'Advaced react.jpg'
  },
  {
    title: 'JavaScript Workshop',
    description: 'Join a workshop focused on JavaScript mastery. Cover essential concepts, modern syntax, and best practices for writing clean and efficient code.',
    imgSrc: 'work shop.jpg'
  },
  {
    title: 'React',
    description: 'Delve into advanced topics and techniques in React development. Enhance your understanding of React patterns, performance optimization, and more.',
    imgSrc: 'Advaced react.jpg'
  }
]
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