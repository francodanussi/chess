import React, {Component} from 'react'
import logo from '../logo.svg'
import axios from 'axios'
import {
  Form,
  FormGroup,
  Input,
  Button,
  InputGroup,
  FormFeedback,
  InputGroupAddon,
  InputGroupText,
  Card,
  Label,
  CardBody,
  CardHeader,
  Col,
  Row
} from 'reactstrap'

import Select from 'react-select'
import { List } from 'react-virtualized'

export default class selectOponent extends Component {

  constructor(props) {
    super(props)
    this.state = {players: []}
    this.customStyles = styleObject
  }

  handleChange = event => {
    this.setState({oponent: event.value})
  }

  handlePlay = () => {
    this.props.history.push({
      pathname : '/playChess',
      oponent: this.state.oponent
    })
    // Link
  }

  transformPlayers = players => {
    const actualPlayers = players.map(el => {
      const element = {}
      element.value = el
      element.label = el
      return element
    })
    this.setState({players : actualPlayers})
  }

  componentDidMount() {
    // fetch users by country
    axios.get('https://api.chess.com/pub/country/'+this.props.country+'/players').then(response => {
    // console.table(response.data.players)
    this.transformPlayers(response.data.players)
    })
    .catch( error => {
    console.log(error)
    })

  }

  render() {
    return (
        <Col md='12' style = { {margin: '20px'} }>
          <Label>Oponents available (search usernames in chess.com)</Label>
          <FormGroup>
            <Select components={{ MenuList }} styles={this.customStyles} defaultValue='oponents' name='oponents' onChange={this.handleChange} options = {this.state.players}/>
              <Button color='danger' onClick = {this.handlePlay}>Play</Button>
          </FormGroup>
        </Col>
      )
  }

}




const MenuList = props => {
  const rows = props.children
  const rowRenderer = ({ key, index, isScrolling, isVisible, style }) => (
    <div key={key} style={style}>{rows[index]}</div>
  )

  return (
    <List
      style={{ width: '100%' }}
      width={400}
      height={400}
      rowHeight={40}
      rowCount={rows.length}
      rowRenderer={rowRenderer}
    />
  )
}


const styleObject = {
control: (base, state) => ({
  ...base,
  background: '#023950',
  // match with the menu
  borderRadius: state.isFocused ? '3px 3px 0 0' : 3,
  // Overwrittes the different states of border
  borderColor: state.isFocused ? 'yellow' : 'green',
  // Removes weird border around container
  boxShadow: state.isFocused ? null : null,
  '&:hover': {
    // Overwrittes the different states of border
    borderColor: state.isFocused ? 'red' : 'blue'
  }
}),
menu: base => ({
  ...base,
  // override border radius to match the box
  borderRadius: 0,
  color: '#023950',
  // kill the gap
  marginTop: 0
}),
menuList: base => ({
  ...base,
  // kill the white space on first and last option
  padding: 0
})
};
