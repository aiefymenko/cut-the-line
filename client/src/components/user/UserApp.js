import React from 'react'
import Buttons from '../admin/FeatureSection/Buttons/Buttons'
import CreateUser from '../admin/FeatureSection/UserDetails/CreateUser'
import './UserApp.scss'

export default function UserApp () {
  return (
    <div className ='userForm'>
      <h1> Enter your details</h1>
    <CreateUser />
    <Buttons />
    </div>
  )
}
