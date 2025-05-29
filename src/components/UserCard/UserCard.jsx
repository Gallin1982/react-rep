import { useState } from "react"



export const UserCard = ({usuario}) => {

    const [isContacted, setIsContacted] = useState(false);

    const[technologies, setTechnologies] = useState(['HTML', 'CSS', 'JS'])

    const {id, name, descripcion, image} = usuario

    const handleClick = ()=>{

      setIsContacted(!isContacted)      
        
    }
  return (
    <div className='card' >
                    <img className='image' src={image} alt={name} />
                    <h2 className='name'>{name}</h2>
                    <p className='descripcion'>{descripcion}</p>  
                    <button id={id} onClick={()=>handleClick ()} >{
                    isContacted ? 'Contactado' : 'Contactar'}</button>                  
                    </div>
  )
}
