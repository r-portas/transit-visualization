import * as React from 'react'

import { Navbar } from './Navbar'

import './App.css'

export interface AppProps {
}

export class App extends React.Component<AppProps, {}> {
  render () {
    return (
      <div>
        <Navbar />
        <h1>Hello world</h1>

        <h2>This is a typescript and react template</h2>
      </div>
    )
  }
}
