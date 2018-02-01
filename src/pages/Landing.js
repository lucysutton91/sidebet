import React from 'react'
import Button from 'grommet/components/Button'

export default class Login extends React.PureComponent {
  render () {
    return (
      <div>
        <h1>Home page</h1>
        <Button
        label="Fake Logout"
        path="/"
        onclick
        />
      </div>
    )
  } 
}