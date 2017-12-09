import * as React from 'react'
import './Navbar.css'

export class Navbar extends React.Component<{}, {}> {
  render () {
    return (
      <nav className='Navbar'>
        <a className='Navbar-brand'>Transit<b>Hub</b></a>
      </nav>
    )
  }
}
