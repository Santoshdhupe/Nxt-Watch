import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import NxtWatchContext from '../../NxtWatchContext/videoContext'
import {
  LoginBgContainer,
  LoginContainer,
  LoginPageLogo,
  LoginForm,
  LoginFormContainer,
  LoginInputLabel,
  LoginInput,
  LoginCheckboxInput,
  LoginCheckboxLabel,
  LoginCheckboxInputContainer,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showErrorMsg: false,
    errorMsg: '',
  }

  onchangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onchangePassword = event => {
    this.setState({password: event.target.value})
  }

  onchangeCheckbox = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  onsubmitLoginForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const loginApi = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginApi, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {
      username,
      password,
      showPassword,
      showErrorMsg,
      errorMsg,
    } = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const mainBgColor = isDarkTheme ? '#231f20' : '#ffffff'
          const loginBgColor = isDarkTheme ? '#000000' : '#ffffff'
          const labelColor = isDarkTheme ? '#ffffff' : '#475569'
          const inputContainerColor = isDarkTheme ? '#e2e8f0' : '#1e293b'
          const showPasswordColor = isDarkTheme ? '#ffffff' : '#000000'
          const jwtToken = Cookies.get('jwt_token')
          if (jwtToken !== undefined) {
            return <Redirect to="/" />
          }
          return (
            <LoginBgContainer mainBgColor={mainBgColor}>
              <LoginContainer loginBgColor={loginBgColor}>
                <LoginPageLogo
                  src={
                    isDarkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
                <LoginForm onSubmit={this.onsubmitLoginForm}>
                  <LoginFormContainer>
                    <LoginInputLabel htmlFor="username" labelColor={labelColor}>
                      USERNAME
                    </LoginInputLabel>
                    <LoginInput
                      id="username"
                      type="text"
                      value={username}
                      onChange={this.onchangeUsername}
                      placeholder="Username"
                      inputContainerColor={inputContainerColor}
                    />
                  </LoginFormContainer>
                  <LoginFormContainer>
                    <LoginInputLabel htmlFor="password" labelColor={labelColor}>
                      PASSWORD
                    </LoginInputLabel>
                    <LoginInput
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={this.onchangePassword}
                      placeholder="Password"
                      inputContainerColor={inputContainerColor}
                    />
                  </LoginFormContainer>
                  <LoginCheckboxInputContainer>
                    <LoginCheckboxInput
                      type="checkbox"
                      id="showPassword"
                      onChange={this.onchangeCheckbox}
                    />
                    <LoginCheckboxLabel
                      htmlFor="showPassword"
                      showPasswordColor={showPasswordColor}
                    >
                      Show Password
                    </LoginCheckboxLabel>
                  </LoginCheckboxInputContainer>
                  <LoginButton type="submit">Login</LoginButton>
                </LoginForm>
                {showErrorMsg && <ErrorMsg>*{errorMsg}</ErrorMsg>}
              </LoginContainer>
            </LoginBgContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Login
