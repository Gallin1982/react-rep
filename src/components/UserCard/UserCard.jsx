import { useState } from "react"



export const UserCard = ({usuario}) => {

    const [isContacted, setIsContacted] = useState(false);

    

    const[technologies, setTechnologies] = useState(['HTML', 'CSS', 'JS']);

    const {id, firstName, email, image} = usuario

    const handleClick = ()=>{

      const newTechnologies = [...technologies, 'React']     

      //setIsContacted(!isContacted)         
    }

    console.log(technologies);
    
  return (
    <div className='card' >
                    <img className='image' src={image} alt={firstName} />
                    <h2 className='name'>{firstName}</h2>
                    <p className='descripcion'>{email}</p>  
                    <button id={id} onClick={()=>handleClick ()} >{
                    isContacted ? 'Contactado' : 'Contactar'}</button>                  
                    </div>
  )
}
