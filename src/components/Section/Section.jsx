import {  useState, useEffect } from 'react'

import {UserCard} from '../UserCard/UserCard'


import './Section.css'



export const Section = () => {

    const [count, setCount] = useState(0)
    const [users, setUsers] = useState([])

    

    useEffect(()=>{
        console.log('ejecutado');
        fetch('https://dummyjson.com/users')
        .then(res=>res.json())
        .then(data=>{console.log(data.users)
         setUsers(data.users)});              

        
    }, [count])     

    const handleClick = () => {
        setCount(count + 1)
    }    

    
  return (
        <>
        <h2>{count}</h2>
        <button onClick={handleClick}>Contador</button>
         <section>
         {
            users.map((usuario)=> {
                return(
                    <UserCard key={usuario.id} usuario={usuario}/>
                )
            })
         }
        </section>
        </>
    
  )
}

//entre las llaves va el código JS