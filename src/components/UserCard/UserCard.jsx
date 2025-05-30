import { useState, useRef } from "react"



export const UserCard = ({usuario}) => {

    const [isContacted, setIsContacted] = useState(false);

    const ref = useRef(0)
    
    

    const[technologies, setTechnologies] = useState(['HTML', 'CSS', 'JS']);

    const {id, firstName, email, image} = usuario

    const handleClick = ()=>{

      const newTechnologies = [...technologies, 'React']     

      //setIsContacted(!isContacted)         
    }

    const handleIncreaseRef = () => {
      ref.current++;
      console.log(ref);

    }
    
  return (
    <div className='card' >
                    <img className='image' src={image} alt={firstName} />
                    <h2 className='name'>{firstName}</h2>
                    <p className='descripcion'>{email}</p>  
                    <button onClick={handleIncreaseRef}>Aumentar Ref</button>
                    <button id={id} onClick={()=>handleClick ()} >{
                    isContacted ? 'Contactado' : 'Contactar'}</button>                  
                    </div>
  )
}
