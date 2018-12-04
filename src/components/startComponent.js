import React, { Component } from 'react'
import logo from '../logo.svg'

export default class startComponent extends Component {
  constructor(props) {
    super(props)
  }

  loadCountryComponent = () => {
    this.props.history.replace('/selectCountry')
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={require('../Fischer2.jpg')} />
          <a
            className='App-link'
            onClick={this.loadCountryComponent}
            target='_blank'
            rel='noopener noreferrer'
            style = { {margin: "20px"} }
          >
            Start
          </a>
        </header>
      </div>
      )
  }

}
