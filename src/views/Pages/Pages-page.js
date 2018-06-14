import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink, Col, Row, Table, Collapse, Form, FormGroup, Label, Input } from 'reactstrap';


class PagesPage extends Component {

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
                  <Col xs="12" md="8">
                    <Row>
                      <Col xs="12" md="6">
                        <Form>
                          <FormGroup>
                            <Label for="pageTitle"><h1>Titolo</h1></Label> 
                            <Input type="input" name="title" id="pageTitle" placeholder="inserisci titolo" />
                          </FormGroup>
                          <FormGroup>
                            <Label for="pageSlug">SLUG</Label>
                            <Input type="text" disabled name="slug" id="pageSlug" placeholder="slug url" />
                          </FormGroup>
                        </Form>
                      </Col>
                      <Col xs="12" md={{ size: '5', offset: 1 }}>
                        <Form>
                          <FormGroup>
                            <Label for="menu"><h1>Menu</h1></Label>
                            <Dropdown isOpen={this.state.dropdownOpen[0]} toggle={() => {
                              this.toggle(0);
                            }}>
                              <DropdownToggle caret>
                                Seleziona voce menu da associare
                              </DropdownToggle>
                              <DropdownMenu>
                                <DropdownItem>Voce 1</DropdownItem>
                                <DropdownItem>Voce 2</DropdownItem>
                                <DropdownItem>Voce 3</DropdownItem>
                              </DropdownMenu>
                            </Dropdown>
                          </FormGroup>
                        </Form>
                      </Col>
                    </Row>
                   <Row className="mt-3">
                      <Col xs="12">
                        <Form>
                          <FormGroup>
                            <Label for="pageContent"><h1>Contenuto</h1></Label>
                            <Input type="textarea" name="content" id="pageContent" style={{ height: '200px' }} placeholder="Inserisci testo" />
                          </FormGroup>
                        </Form>
                      </Col>
                   </Row>
                  </Col>
                  <Col xs="12" md="8 mt-3 mb-5 mt-md-5 mb-md-5">
                    <Row>
                      <Col xs="12" md="6">
                        <Button color="secondary" onClick={this.toggleCollapse}>SEO</Button>
                        <Collapse isOpen={this.state.collapse} tag="h5" className="mt-3">
                          <Card className="mb-5">
                            <CardBody>
                              <Form>
                                <FormGroup>
                                  <Label for="seoTitle"><h3>Seo</h3></Label>
                                  <Input type="input" name="seoTitle" id="seoTitle" placeholder="Keywords" />
                                  <Button color="primary" size="sm" className="float-right mt-3">Salva</Button>
                                </FormGroup>
                              </Form>
                            </CardBody>
                          </Card>
                        </Collapse>
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

export default PagesPage;