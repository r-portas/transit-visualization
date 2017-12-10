import * as React from 'react'

import { Navbar } from './Navbar'
import { Map } from './Map'

import './App.css'

export interface AppProps {
}

export class App extends React.Component<AppProps, {}> {
  render (): JSX.Element {
    return (
      <div className='App'>
        <Navbar />
        <h1>Hello world</h1>
        <Map />
      </div>
    )
  }
}
