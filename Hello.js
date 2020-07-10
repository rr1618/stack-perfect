import React from 'react';
import {Col} from 'antd';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import LoginForm from './components/login'
import RegistrationForm from './components/registration'

const style = { margin: 50}

function App()
{
  return (
    <Col span={16} style={style}>
        <BrowserRouter>
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/registration" component={RegistrationForm} />
        </BrowserRouter>
    </Col>
  )
}
export default App
