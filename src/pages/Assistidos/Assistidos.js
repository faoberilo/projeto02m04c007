import { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import './Assistidos.css';
import axios from 'axios';

export default function Assistidos (){

    const [filmes,setFilmes] = useState([]);
    const [montado,setMontado] = useState(false);

    const listFilmes = async () => {
        await axios.get('user/seeList')
        .then(response=>{
            if(montado){
                setFilmes(response.data);
            }
        })
    }

    useEffect (()=>{
        setMontado(true);
        listFilmes();
    },[montado])

   
    return(
        <div className='assistidos'>
            <h1>Minha Lista!!!</h1>
                <div className="lista">
                
                {
                    filmes.map(filme=>(
                        <Card
                            id={filme.id}
                            image={filme.cover}
                            imageAlt="Capa do Filme"
                            titulo={filme.title}
                            key={filme.id}
                         />
                    ))
                }
                </div>
            
        </div>

    )

}