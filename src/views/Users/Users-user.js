import React, { Component } from 'react';
import { Card, CardBody, CardHeader, CardImg, Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink, Col, Row, Table, Collapse, Form, FormGroup, Label, Input } from 'reactstrap';
import { AppSwitch } from '@coreui/react'

class UsersUser extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleCollapse = this.toggleCollapse.bind(this);
    this.toggleSeo = this.toggleSeo.bind(this);
    this.state = {
      dropdownOpen: [false, false],
      collapse: false 
    };
  }

  toggle(i) {
    const newArray = this.state.dropdownOpen.map((element, index) => {
      return (index === i ? !element : false);
    });
    this.setState({
      dropdownOpen: newArray,
    });
  }


  toggleCollapse() {
    this.setState({ collapse: !this.state.collapse });
  }
  
  toggleSeo() {
    this.setState({ fadeIn: !this.state.fadeIn });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12">
            <Card className="card-accent-primary">
              <CardHeader>
                <Nav className="float-left">
                  <NavItem> 
                    <NavLink className="pl-1">
                        <i className="icon-doc mr-2"></i><strong>Page Creator</strong>
                    </NavLink>
                  </NavItem>
                </Nav>
                <Nav className="float-right">
                  <NavItem>
                    <NavLink href="#" active>
                      Link
                    </NavLink>
                  </NavItem>
                  <Dropdown id="dropdown1" nav isOpen={this.state.dropdownOpen[1]} toggle={() => {this.toggle(1);}}>
                    <DropdownToggle nav caret>
                      Dropdown
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem header>Menu</DropdownItem>
                      <DropdownItem>Select 1</DropdownItem>
                      <DropdownItem>Select 2</DropdownItem>
                      <DropdownItem>Delete</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                  <NavItem>
                    <NavLink href="#">Link</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">Another Link</NavLink>
                  </NavItem>
                </Nav>
              </CardHeader>
              <CardBody>
                <Row className="justify-content-center mt-3 mt-md-5">
                  <Col xs="12" md="10">
                    <Row>
                      <Col xs="12" md="6">
                        <Row>
                          <Col xs="12" md="10">
                            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                          </Col>
                        </Row>                        
                      </Col>
                      <Col xs="12" md="4">
                        <Form>
                          <FormGroup>
                            <Label for="nameField"><h4 className="mb-0">Nome</h4></Label>
                            <Input type="text" name="name" id="nameField" placeholder="Nome" />
                          </FormGroup>
                          <FormGroup>
                            <Label for="surnameField"><h4 className="mb-0">Cognome</h4></Label>
                            <Input type="text" name="surname" id="surnameField" placeholder="Cognome" />
                          </FormGroup>
                          <FormGroup>
                            <Label for="emailField"><h4 className="mb-0">Email</h4></Label>
                            <Input type="email" name="email" id="emailField" placeholder="email@mail.com" />
                          </FormGroup>
                        </Form>
                        <Row>
                          <Col xs="12">
                            <Row>
                              <Col xs="12" md="8">
                                <Form>
                                  <FormGroup>
                                    <Label for="roleField"><h4 className="mb-0">Ruolo</h4></Label>
                                    <Input type="text" name="role" id="roleField" placeholder="ruolo" />
                                  </FormGroup>
                                </Form>
                              </Col>
                              <Col xs="12" md="4" className="mt-3 align-self-center">
                                <Row>
                                  <Col xs="12" md="12">
                                    <Form>
                                      <FormGroup check>
                                        <Label check>
                                          <Input type="checkbox" />
                                          <h5>STAFF</h5>
                                        </Label>
                                    </FormGroup>
                                    </Form>
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs="12" md="2" className="mt-2 px-4">
                        <Card>
                          <CardBody>
                            <Row>
                              <Col xs="12" md="8">
                                <h5>Admin</h5>
                              </Col>
                              <Col xs="12" md="4" className="mt-1">
                                <AppSwitch className={'float-right mb-0'} label color={'success'} defaultChecked size={'sm'}/>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                    <Row className="mt-3 mt-md-2 mb-2">
                      <Col xs="12">
                        <Form>
                          <FormGroup>
                            <Label for="pageContent"><h1>Biogafia</h1></Label>
                            <Input type="textarea" name="content" id="pageContent" style={{height:'200px'}} placeholder="Scrivi biografia" />
                          </FormGroup>
                        </Form>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Col col="2" className="mb-4 text-center">
                  <Button color="primary" size="lg">Salva</Button>
                </Col>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default UsersUser;