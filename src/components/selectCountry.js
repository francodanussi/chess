import React, {Component} from 'react'
import logo from '../logo.svg'
import Axios from 'axios'
import countries from '../countries.json'
import {
  Button,
  Form,
  FormGroup,
  Input,
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
import ReactFlagsSelect from 'react-flags-select'
import 'react-flags-select/css/react-flags-select.css'
import 'react-flags-select/scss/react-flags-select.scss'
import SelectOponent from './selectOponent'

export default class selectCountry extends Component {

  constructor(props) {
    super(props)
    this.state = {countrySelected : 'AR'}
  }

  handleChange = (event) => {
    this.setState({countrySelected: event})
  }

  handleClick = () => {
    this.setState({selected: true})
  }

  transformCountries = countries => {
    const countriesTransformed = countries.map(el => {
      el.label = el.name
      el.value = el.code
      return el
    })
    console.table(countriesTransformed)
    return countriesTransformed
  }

  render() {
    return (

      <div className='App'>
        <header className='App-header'>
          <img src={require('../Fischer2.jpg')} />
          <div className='animated fadeIn'>
            <Row style={{ marginTop: "8%"}}>
              <Col xs='12'>
                <Card>
                  <CardHeader>
                    <i className='fa fa-align-justify'/> Please, select the country of your Oponent
                  </CardHeader>
                  <CardBody>
                    <Form className='container'>
                      <FormGroup>
                        <Col md='12'>
                          <FormGroup>
                            <ReactFlagsSelect style={{ marginTop: "4%"}} searchable={true} selectedSize={25} optionsSize={20} onSelect = {this.handleChange} defaultCountry="AR"/>
                            <Button color="danger" onClick = {this.handleClick}>OK</Button>
                            {this.state.selected && <SelectOponent country ={this.state.countrySelected}/>}
                          </FormGroup>
                        </Col>
                      </FormGroup>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </header>
      </div>

      )
  }

}
