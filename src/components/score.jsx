import {useState, useEffect} from 'react';
import Cards from './cards';

export const Score = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        const users = ["Ivanfmms"]; // Movemos users aquí
        const getData = async() =>{
            const results = await Promise.all(users.map(async (user) =>{
                const api = await fetch(`https://alfa-leetcode-api.onrender.com/${user}/solved`)
                const info = await api.json();
                info.username = user; // agregamos el nombre de usuario al objeto info
                // calculamos los puntos 
                info.score = info.easySolved * 1 + info.mediumSolved * 2 + info.hardSolved * 3;
                return info;
            }));
            console.log('API Results:', results); // Para debuggear
            setData(results)
        };
        getData(); // mandamos a llamar la funcion getData porque useEffect no acepta una función async directamente
    },[]);


    return(
        <div>
            {data.sort((a, b) => b.score - a.score).map((user, index) => (
                <Cards 
                    key={index} 
                    rank={index + 1} 
                    name={user.username} 
                    easy={user.easySolved} 
                    medium={user.mediumSolved} 
                    hard={user.hardSolved} 
                    points={user.score}

                />))}
        </div>
    )
}

export default Score;