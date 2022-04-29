import styled from 'styled-components'

export const Nav = styled.div`
display: flex;
//background: lightgray;
justify-content: space-between;
align-items: center;
& span {
  margin-left: 10px;
  cursor: pointer;
}
& ul {
  display: flex;
  //background: gray;
  justify-content: center;
  align-items: center;
  list-style: none;
  & li {
    padding: 0 20px;
    & a {
      text-decoration: none;
      color: #000000;
    }
  }
}
`
export const Header = styled.div`
  //background: azure;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Container = styled.div`
  width: 85%;
  margin: auto;
  padding: 20px;
`
export const IconDiv = styled.div`
  & span {
    margin-right: 10px;
  }
`
//signup form style
export const FormContainer = styled.div`
  width: 100%;
  margin: auto;
& {
  input[type=text], input[type=password], input[type=email] {
    width: 100%;
    padding: 15px;
    margin: 5px 0 22px 0;
    display: inline-block;
    border: none;
    background: #f1f1f1;
  }
& button {
    background-color: #04AA6D;
    color: white;
    padding: 16px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
    opacity: 0.9;
}
}
`
export const Modal = styled.div`
  position: fixed;
  background: rgba(0,0,0,0.5);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ModalContent = styled.div`
  background: lightgray;
  padding: 40px;
  position: relative;
`
export const ModalBody = styled.div`

`
export const ModalHeader = styled.div`
  position: absolute;
  top: 12px;
  right: 16px;
  cursor: pointer;
`
export const ModalFooter = styled.div`
  text-align: center;
  color: rgba(0,0,0,0.7);
  & span {
    cursor: pointer;
  }
`

export const ErrorMessage = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 16px;
`

export const ErrorSpan = styled.span`
 color: red;
`
export const Select = styled.select`
  width: 100%;
  background: #f1f1f1;
  padding: 15px;
  margin: 5px 0 22px 0;
`