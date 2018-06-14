import React, { Component } from 'react';
import { Card, CardBody, CardHeader, CardFooter, CardImg, Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink, Col, Row, Table, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class MenuDetail extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      dropdownOpen: [false, false],
      fadeIn: false
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

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState } });
  }

  toggleModal() { 
    this.setState({ modal: !this.state.modal });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12">
            <Card className="card-accent-warning">
              <CardHeader>
                <Nav className="float-left">
                  <NavItem> 
                    <NavLink className="pl-1">
                        <i className="icon-menu mr-2"></i><strong>Menu Creator</strong>
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
                <Row>
                  <Col xs="12" md={{ size: '12', offset: 1 }}>
                    <Row className="justify-content-center p-md-5">
                      <Col xs="12" md="7">
                        <Row>
                          <Col xs="12" md="4" className="mt-3 mt-md-3">
                            <Card>
                              <CardBody>
                                <Row>
                                  <Col xs="12" md="12">
                                    <h4>Immagine copertina</h4>
                                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                                  </Col>
                                  <Col xs="12" md="12">
                                    <Button color="primary" className="mt-4" onClick={this.toggleModal}>Scegli Immagine</Button>
                                  </Col>
                                </Row>
                              </CardBody>
                            </Card>
                          </Col>
                          <Col xs="12" md="6" className="d-flex flex-column justify-content-end pb-2">
                            <Form>
                              <FormGroup>
                                <Label for="Nome"><h2 className="mb-0">Menu principale</h2></Label> 
                                <Input type="input" name="menuTitle" id="menuTitle" placeholder="Inserisci nome" />
                              </FormGroup>
                            </Form>
                          </Col>
                          <Col xs="12" md="10">
                            <Form>
                              <FormGroup>
                                <Label for="menuDescription"><h2 className="mb-0">Descrizione</h2></Label>
                                <Input type="textarea" name="description" id="menuDescription" style={{height:'150px'}} placeholder="Inserisci descrizione" />
                              </FormGroup>
                            </Form>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs="12" md="4" className="mt-5 mb-0 pl-3 pl-md-5 mb-md-0 mt-md-3 sub-menu">
                        <Row>
                          <Col xs="12" md="7" className="mt-2 mt-md-3">
                            <Card>
                              <CardBody>
                                <Row>
                                  <Col xs="12" md="12">
                                    <h5>Inserisci immagine</h5>
                                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                                  </Col>
                                  <Col xs="12" md="12">
                                    <Button color="primary" className="mt-4" onClick={this.toggleModal}>Scegli Immagine</Button>
                                  </Col>
                                </Row>
                              </CardBody>
                            </Card>
                          </Col>
                          <Col xs="12" md="8">
                            <Form>
                              <FormGroup>
                                <Label for="Nome"><h4 className="mb-0">Sotto menu</h4></Label> 
                                <Input type="input" name="menuTitle" id="menuTitle" placeholder="Inserisci nome" />
                              </FormGroup>
                            </Form>
                          </Col>
                          <Col xs="12" md="10" className="mt-0 mt-md-1">
                            <Form>
                              <FormGroup>
                                <Label for="menuDescription"><h4 className="mb-0">Descrizione</h4></Label>
                                <Input type="textarea" name="description" id="menuDescription" placeholder="Inserisci descrizione" />
                              </FormGroup>
                            </Form>
                          </Col>
                        </Row>
                      </Col>
                      <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
                        <ModalHeader toggle={this.toggleModal}>Scegli immagine</ModalHeader>
                        <ModalBody>
                          <Row>
                            <Col xs="12" md="4">
                              <Card className="cursor" onClick={this.toggleModal}>
                                  <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                                <CardFooter>
                                  <i className="icon-doc mr-1"></i><strong>Text</strong>
                                </CardFooter>
                              </Card>
                            </Col>
                            <Col xs="12" md="4">
                              <Card className="cursor" onClick={this.toggleModal}>
                                  <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                                <CardFooter>
                                  <i className="icon-doc mr-1"></i><strong>Text</strong>
                                </CardFooter>
                              </Card>
                            </Col>
                            <Col xs="12" md="4">
                              <Card className="cursor" onClick={this.toggleModal}>
                                  <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                                <CardFooter>
                                  <i className="icon-doc mr-1"></i><strong>Text</strong>
                                </CardFooter>
                              </Card>
                            </Col>
                            <Col xs="12" md="4">
                              <Card className="cursor" onClick={this.toggleModal}>
                                  <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                                <CardFooter>
                                  <i className="icon-doc mr-1"></i><strong>Text</strong>
                                </CardFooter>
                              </Card>
                            </Col>
                            <Col xs="12" md="4">
                              <Card className="cursor" onClick={this.toggleModal}>
                                  <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                                <CardFooter>
                                  <i className="icon-doc mr-1"></i><strong>Text</strong>
                                </CardFooter>
                              </Card>
                            </Col>
                            <Col xs="12" md="4">
                              <Card className="cursor" onClick={this.toggleModal}>
                                  <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                                <CardFooter>
                                  <i className="icon-doc mr-1"></i><strong>Text</strong>
                                </CardFooter>
                              </Card>
                            </Col>
                            <Col xs="12" md="4">
                              <Card className="cursor" onClick={this.toggleModal}>
                                  <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                                <CardFooter>
                                  <i className="icon-doc mr-1"></i><strong>Text</strong>
                                </CardFooter>
                              </Card>
                            </Col>
                            <Col xs="12" md="4">
                              <Card className="cursor" onClick={this.toggleModal}>
                                  <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                                <CardFooter>
                                  <i className="icon-doc mr-1"></i><strong>Text</strong>
                                </CardFooter>
                              </Card>
                            </Col>
                            <Col xs="12" md="4">
                              <Card className="cursor" onClick={this.toggleModal}>
                                  <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                                <CardFooter>
                                  <i className="icon-doc mr-1"></i><strong>Text</strong>
                                </CardFooter>
                              </Card>
                            </Col>
                          </Row>
                        </ModalBody>
                        <ModalFooter>
                          <Button color="secondary" onClick={this.toggleModal}>Indietro</Button>
                        </ModalFooter>
                      </Modal>
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

export default MenuDetail;