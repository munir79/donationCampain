import React from 'react';
import '../Style/view.css'

const ViewHome = (props) => {
    console.log(props.value);
    const {img,name,  tittle}=props.value;
    return (
        <div className='full '>
            <img src={img} alt="" />
           
             <div className='hell'>
             <p> {name} </p>
               <h2>{tittle} </h2>
             </div>
            
        </div>
    );
};

export default ViewHome;