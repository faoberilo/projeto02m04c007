import React from 'react';
import './Card.css';
import {useNavigate} from 'react-router-dom';

const Card = (props) => {

  const navigate = useNavigate();

  const vaParaFilme = () =>{
    navigate(`/filme/${props.id}`, {state: props.id})
  }
  
  return (
    <div className='card' onClick={vaParaFilme}>
        <img src={props.image} alt={props.imageAlt}/>
    </div>   
             
  )
} 

export default Card