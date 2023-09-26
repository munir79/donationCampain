import React from 'react';
import '../Style/Home.css'
import health from '../Resourses/Health.png'
import education from '../Resourses/Education.png'
import cloth from '../Resourses/Clothing.png'
import food from '../Resourses/Food.png'
import ViewHome from './ViewHome';

const Home = () => {
    const data=[
        {
            id:1,
            name:'Health',
            tittle:'Clean water for children',
            img:health,
            
        },
        {
            id:2,
            name:'Education',
            tittle:'Good education',
            img:education
        },
        {
            id:3,
            name:'Clothing',
            tittle:'Used Clothing Drive',
            img:cloth
            
        },
        {
            id:4,
            name:'Food',
            tittle:'Better Food for Everyone',
            img:food
        },
        {
            id:5,
            name:'Food',
            tittle:'Better Food for Everyone',
            img:food
        },
        {
            id:6,
            name:'Clothing',
            tittle:'Used Clothing Drive',
            img:cloth
        },
        {
            id:7,
            name:'Education',
            tittle:'Good education',
            img:education
        },
        {
            id:8,
            name:'Health',
            tittle:'Clean water for children',
            img:health
        },
        {
            id:9,
            name:'Health',
            tittle:'Clean water for children',
            img:health
        },
        {
            id:10,
            name:'Education',
            tittle:'Good education',
            img:education
        },
        {
            id:11,
            name:'Food',
            tittle:'Better Food for Everyone',
            img:food
        },
        {
            id:12,
            name:'Clothing',
            tittle:'Used Clothing Drive',
            img:cloth
        }

    ]
    return (
        <div>
          <section className='one'> 
            
        <h1 className='tit'> I Grow By Helping People In Need</h1>
        <input className='search' type="search" placeholder='search here ' name="Search" id="" /> <button className='btn'>Search</button>
          </section>
          <section className='grid' >
           {
            data.map(value=><ViewHome  value={value} key={value.id}  ></ViewHome>)
           }
          </section>

        </div>
    );
};

export default Home;