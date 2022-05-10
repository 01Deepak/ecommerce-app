import React, { useState } from 'react'
import { FormContainer, Modal, ModalBody, ModalContent, ModalHeader, ModalFooter } from '../../Style/NavbarStylel'
import { emailValidation, passwordValidation } from './Utilities'
import { ErrorMessage, ErrorSpan } from '../../Style/NavbarStylel'

const LogIn = ({ setOpenLogin, setOpenSignUp, userData, setUserName, userName ,setRole}) => {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  const [formData, setFormData] = useState()
  const [errorMessage, setErrorMessage] = useState({
    errorEmail: '',
    errorPassword: ''
  })

  //handle change
  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault()
    validation()
    if (emailValidation(formData.email, emailRegex) && passwordValidation(formData.password)) {
      // find user object
      const userForCheck = userData.find(user => user.email === formData.email && user.password === formData.password)
      if (userForCheck && formData.email === userForCheck.email && formData.password === userForCheck.password) {
        setUserName(userForCheck.name)
        setRole(userForCheck.role)
        alert("loged in")
        setOpenLogin(false)
      } else {
        alert("Invalid email or password.")
      }
    }
  }

  // open signup page and close login
  const OpenSignUp = () => {
    setOpenLogin(false)
    setOpenSignUp(true)
  }

  const validation = () => {
    const errorObject = {
      errorEmail: '',
      errorPassword: ''
    }

    if (!emailValidation(formData.email, emailRegex)) {
      errorObject.errorEmail = "Please Enter Valid Email."
    }

    if (!passwordValidation(formData.password)) {
      errorObject.errorPassword = "Password should be 4-8 digit."
    }

    setErrorMessage(
      {
        errorEmail: errorObject.errorEmail,
        errorPassword: errorObject.errorPassword
      }
    )

  }

  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <span onClick={() => setOpenLogin(false)}>X</span>
        </ModalHeader>
        <ErrorMessage>
          <ErrorSpan>{errorMessage.errorEmail}</ErrorSpan>
          <ErrorSpan>{errorMessage.errorPassword}</ErrorSpan>
        </ErrorMessage>
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <FormContainer>
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
              <button type='submit'>Login</button>
            </FormContainer>
          </form>
        </ModalBody>
        <ModalFooter>
          Don't have an account? <span onClick={OpenSignUp}>Sign Up</span>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default LogIn