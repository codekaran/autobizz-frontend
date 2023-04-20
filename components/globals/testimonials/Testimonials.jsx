import React,{useEffect, useState} from 'react'
import TestimonialCard from './TestimonialCard';
import {container,cards} from './Testimonials.module.scss';

function Testimonials() {

    const testimonialsStatic = [
        {
            id:0,
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum debitis atque voluptate illo temporibus consequuntur veniam, perspiciatis eligendi quasi dolore.",
            fullname:"Eren Yaeger",
            title:'Software Engineer',
            rating:5,
            image:'https://avatars2.githubusercontent.com/u/25701635?v=4'
        },
        {
            id:1,
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum debitis atque voluptate illo temporibus consequuntur veniam, perspiciatis eligendi quasi dolore.",
            fullname:"Armin Smith",
            title:'Scientist',
            rating:3,
            image:"https://pbs.twimg.com/profile_images/1251222829594406912/jetuubcZ_400x400.jpg"
        },
        {
            id:2,
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum debitis atque voluptate illo temporibus consequuntur veniam, perspiciatis eligendi quasi dolore.",
            fullname:"Mikasa Ackermann",
            title:'Artist',
            rating:4,
            image:'https://siet.in/Uploads/PlacedStudents/P000904.jpg'
        }
    ];

    const [activeCard,setActiveCard ]= useState(1);
    const setActivePeriod = (activeCard) =>{
        if(activeCard===2) setActiveCard(0)
        else setActiveCard(activeCard+1)
    }
    
  return (
    <div className={container}>
        <h3>Hear the customer stories</h3>
        <div className={cards}>
        {testimonialsStatic.map(testimonial => 
        <TestimonialCard 
        key={testimonial.id}
        id={testimonial.id}
        active={activeCard}
        description={testimonial.description}
        fullname={testimonial.fullname}
        title={testimonial.title}
        rating={testimonial.rating}
        image={testimonial.image}
        />
        )}
        </div>
    </div>
  )
}

export default Testimonials