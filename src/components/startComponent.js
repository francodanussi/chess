import React, { Component } from 'react'
import logo from '../logo.svg'


const style = {
  margin: "20px"
}
const startComponent = props => {
  return (<div className='App'>
    <header className='App-header'>
      <img src={require('../Fischer2.jpg')} />
      <a
        className='App-link'
        href='http://localhost:3000/playGame'
        target='_blank'
        rel='noopener noreferrer'
        style = {style}
      >
        Start Chess App
      </a>
    </header>
  </div>
  )
}

export default startComponent
