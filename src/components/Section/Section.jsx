import {  useState, useEffect } from 'react'

import {UserCard} from '../UserCard/UserCard'


import './Section.css'



export const Section = () => {

    const [count, setCount] = useState(1)
    const [users, setUsers] = useState([])

    

    useEffect(()=>{
        console.log('ejecutado');
        fetch(`https://dummyjson.com/users`)
        .then(res=>res.json())
        .then(data=>{
         setUsers(data.users)});              

        
    }, [count])     

    const handleClick = () => {
        setCount(count + 1)
    }    

    
  return (
        <>
        <h2>{count}</h2>
        <button onClick={handleClick}>Siguiente</button>
         <section>
            {
                users.map(user => <UserCard key={user.id} usuario={user}/>)


            }

            
         
            
         
        </section>
        </>
    
  )
}

//entre las llaves va el código JS