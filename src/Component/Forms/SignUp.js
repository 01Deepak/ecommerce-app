import React, { useEffect, useState } from 'react'
import { FormContainer, Modal, ModalBody, ModalContent, ModalHeader, ErrorMessage, ErrorSpan, Select } from '../../Style/NavbarStylel'
import { emailValidation, nameValidation, passwordValidation, confirmPassword } from './Utilities'

const SignUp = ({ setOpenSignUp ,userData , setUserData}) => {
  const [formData, setFormData] = useState({
    role: 'admin'
  })
  const {name, email, password, confirm_password} = formData
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  const [errorMessage, setErrorMessage] = useState({
    errorName: '',
    errorEmail: '',
    errorPassword: '',
    errorConfirmPassword: ''
  })

  //handle Change
  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  //handle submit form data
  const handleSubmit = (e) => {
    e.preventDefault()
    formValidation()
    if(
      nameValidation(formData.name) && 
      emailValidation(formData.email, emailRegex) &&
      passwordValidation(formData.password) &&
      confirmPassword(formData.confirm_password,formData.password)
    ) {
      setUserData([
        ...userData,
        formData
      ])
      alert("success!")
      setOpenSignUp(false)
    }
  }

  //form validation
  const formValidation = () => {
    const errorObj = {
      name: "",
      email: "",
      password: '',
      confirmPassword: ''
    }

    if(name && email && password && confirm_password) {
      if (!nameValidation(formData.name)) {
        errorObj.name = "Name should be greater than 2 charecters."
      } 
  
      if (!emailValidation(formData.email, emailRegex)) {
        errorObj.email = "Please Enter Valid Email"
      }
  
      if (!passwordValidation(formData.password)) {
        errorObj.password = "Password should be 4-8 charecter long."
      }
  
      if (!confirmPassword(formData.confirm_password,formData.password)) {
        errorObj.confirmPassword = "Password and confirm password should be match."
      }
    }
    

    setErrorMessage({
      errorName: errorObj.name,
      errorEmail: errorObj.email,
      errorPassword: errorObj.password,
      errorConfirmPassword: errorObj.confirmPassword
    })
  }

  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <span onClick={() => setOpenSignUp(false)}>X</span>
        </ModalHeader>
        <ErrorMessage>
          <ErrorSpan>{errorMessage.errorName}</ErrorSpan>
          <ErrorSpan>{errorMessage.errorEmail}</ErrorSpan>
          <ErrorSpan>{errorMessage.errorPassword}</ErrorSpan>
          <ErrorSpan>{errorMessage.errorConfirmPassword}</ErrorSpan>   
        </ErrorMessage>
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <FormContainer>
              <input
                type="text"
                placeholder='Name'
                name='name'
                onChange={handleChange}
                required
              />
              <input
                type="text"
                placeholder='Email'
                name='email'
                onChange={handleChange}
                required
              />
              <input
                type="password"
                placeholder='Password'
                name='password'
                onChange={handleChange}
                required
              />
              <input
                type="password"
                placeholder='Confirm Password'
                name='confirm_password'
                onChange={handleChange}
                required
              />
              <Select
                name='role'
                onChange={handleChange}
              > 
                <option value='admin'>Admin</option>
                <option value='user'>User</option>
              </Select>
              <button type='submit'>Sign Up</button>
            </FormContainer>
          </form>

        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default SignUp