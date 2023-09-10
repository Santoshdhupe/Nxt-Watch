import styled from 'styled-components'

export const LoginBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props => props.mainBgColor};
`
export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 18px;
  height: 390px;
  width: 36%;
  border-radius: 10px;
  box-shadow: 0px 3px 8px 0px #0f0f0f;
  background-color: ${props => props.loginBgColor};
`
export const LoginPageLogo = styled.img`
  height: 40px;
  width: 200px;
  margin-bottom: 15px;
  margin-top: 15px;
  align-self: center;
`
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`
export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  margin-left: 5px;
`

export const LoginInputLabel = styled.label`
  font-size: 14px;
  font-family: Roboto;
  margin-bottom: 10px;
  font-weight: 500;
  color: ${props => props.labelColor};
`
export const LoginInput = styled.input`
  height: 35px;
  width: 100%;
  border: 1px solid #1e293b;
  outline: none;
  border-radius: 8px;
  padding: 3px;
  padding-left: 10px;
  font-family: Roboto;
  color: ${props => props.inputContainerColor};
  background-color: transparent;
`
export const LoginCheckboxInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`
export const LoginCheckboxInput = styled.input`
  height: 18px;
  width: 18px;
  margin-right: 10px;
`
export const LoginCheckboxLabel = styled(LoginInputLabel)`
  color: ${props => props.showPasswordColor};
`
export const LoginButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  font-family: Roboto;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
  font-size: 15px;
  width: 100%;
  height: 35px;
  margin-top: 13px;
`
export const ErrorMsg = styled.p`
  font-family: Roboto;
  color: #ff0000;
  margin-top: 8px;
  margin-left: 10px;
  margin-bottom: 10px;
`
