import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Protected = ({Component,  userName, setOpenLogin}) => {
  
  const navigate = useNavigate()

  useEffect(() => {
    if(!userName) {
      navigate('/home')
    }
  },[userName])

  return (
    <div> 
      <Component  setOpenLogin={setOpenLogin} userName={userName}/>
    </div>
  )
}

export default Protected