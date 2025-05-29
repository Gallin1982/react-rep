import {  useState, useEffect } from 'react'

import {UserCard} from '../UserCard/UserCard'


import './Section.css'



export const Section = () => {

    const [count, setCount] = useState(1)
    const [user, setUser] = useState({})

    

    useEffect(()=>{
        console.log('ejecutado');
        fetch(`https://dummyjson.com/users/${count}`)
        .then(res=>res.json())
        .then(data=>{console.log(data)
         setUser(data)});              

        
    }, [count])     

    const handleClick = () => {
        setCount(count + 1)
    }    

    
  return (
        <>
        <h2>{count}</h2>
        <button onClick={handleClick}>Siguiente</button>
         <section>
         
            <UserCard key={user.id} usuario={user}/>
         
        </section>
        </>
    
  )
}

//entre las llaves va el código JS