import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
    const toS = () => {
        // .pushState('/serverManage')
    }
  return (
    <div onClick={toS}>
      <NavLink to="/serverManage">测试</NavLink>
    </div>
  )
}

export default Login
