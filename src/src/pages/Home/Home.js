import { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import './Home.css';
import axios from 'axios';

export default function Home (){

    const [filmes,setFilmes] = useState([]);
    const [montado,setMontado] = useState(false);

    const listFilmes = async () => {
        await axios.get('movie/findMany')
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
        <div className='home'>
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