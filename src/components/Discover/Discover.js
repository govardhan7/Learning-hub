import { Grid } from '@mui/material';
import Card from '../../atoms/Card/Card';
import './Discover.css'

export default function Discover({ courseList = [] }) {
  // remove this file after data integration is done
  courseList = [
    {
      title: 'React',
      description: 'Learn the fundamentals of React, a popular JavaScript library for building user interfaces. Explore React components, state, props, and more.',
      imgSrc: 'intermediate.jpg',
      duration: '4 weeks'
    },
    {
      title: 'React Workshop',
      description: 'Participate in an interactive workshop focused on advanced React concepts. Dive deeper into state management, hooks, and component lifecycle.',
      imgSrc: 'work shop.jpg',
      duration: '2 weeks'
    },
    {
      title: 'React 301',
      description: 'Take your React skills to the next level with an advanced course covering topics like Redux, React Router, and best practices for scalable applications.',
      imgSrc: 'react image-1.jpg',
      duration: '6 weeks'
    },
    {
      title: 'Vue.js',
      description: 'Explore Vue.js, a progressive JavaScript framework for building user interfaces. Learn about Vue components, directives, and Vue Router.',
      imgSrc: 'Advaced react.jpg',
      duration: '5 weeks'
    },
    {
      title: 'JavaScript Workshop',
      description: 'Join a workshop focused on JavaScript mastery. Cover essential concepts, modern syntax, and best practices for writing clean and efficient code.',
      imgSrc: 'work shop.jpg',
      duration: '3 weeks'
    },
    {
      title: 'Angular Capstone',
      description: 'Delve into advanced topics and techniques in React development. Enhance your understanding of Angular patterns, performance optimization, and more.',
      imgSrc: 'Advaced react.jpg',
      duration: '7 weeks'
    },
    {
      title: 'Azure',
      description: 'Explore advanced topics and techniques in Azure development. Delve into patterns, performance optimization, and more.',
      imgSrc: 'learn.jpg',
      duration: '4 weeks'
    },
    {
      title: 'Web Development Fundamentals',
      description: 'Build a strong foundation in web development. Learn HTML, CSS, and JavaScript to create interactive and responsive web pages.',
      imgSrc: 'react image-1.jpg',
      duration: '6 weeks'
    },
    {
      title: 'Python for Data Science',
      description: 'Discover the power of Python in data science. Explore data manipulation, analysis, and visualization using popular Python libraries.',
      imgSrc: 'intermediate.jpg',
      duration: '8 weeks'
    },
    {
      title: 'Mobile App Development',
      description: 'Learn to develop mobile apps for iOS and Android platforms. Understand mobile design principles and application deployment.',
      imgSrc: 'work shop.jpg',
      duration: '5 weeks'
    },
    {
      title: 'Cybersecurity Essentials',
      description: 'Gain essential knowledge in cybersecurity. Understand common threats, encryption, and best practices to secure digital assets.',
      imgSrc: 'Advaced react.jpg',
      duration: '4 weeks'
    },
    {
      title: 'Machine Learning Basics',
      description: 'Introduction to machine learning concepts. Explore algorithms, model training, and practical applications in various domains.',
      imgSrc: 'react image-1.jpg',
      duration: '6 weeks'
    },
    {
      title: 'Cloud Computing Fundamentals',
      description: 'Understand the basics of cloud computing. Explore cloud services, deployment models, and their impact on modern IT infrastructure.',
      imgSrc: 'learn.jpg',
      duration: '5 weeks'
    },
    {
      title: 'Full Stack Web Development',
      description: 'Become a full-stack web developer. Learn both front-end and back-end technologies to create dynamic and scalable web applications.',
      imgSrc: 'work shop.jpg',
      duration: '10 weeks'
    }
  ];
  
  
  console.log(courseList);
  
  return (
    <Grid className='grid-section' container spacing={4}>
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