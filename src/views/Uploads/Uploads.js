import React, { Component } from 'react';
import { Col, Row, Card, CardBody, CardHeader, CardFooter, CardImg, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

class Uploads extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      dropdownOpen: [false, false],
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

  toggleModal() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12">
            <Col xs="12" md="4" className="p-0">
              <Card className="card-accent-success">
                <CardHeader>
                  <i className="icon-cloud-upload"></i><strong>Uploads</strong>
                </CardHeader>
                <CardBody>
                  <Nav pills>
                    <NavItem>
                      <NavLink href="#" active success>Link</NavLink>
                    </NavItem>
                    <Dropdown nav isOpen={this.state.dropdownOpen[1]} toggle={() => {this.toggle(1);}}>
                      <DropdownToggle nav caret>
                        Dropdown
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                    <NavItem>
                      <NavLink href="#">Link</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#">Another Link</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink disabled href="#">Disabled Link</NavLink>
                    </NavItem>
                  </Nav>
                </CardBody>
              </Card>
            </Col>
            <Col xs="12" md="12" className="p-0">
              <Card>
                <CardHeader>
                  <i className="icon-folder-alt"></i><strong>Uploaded Files</strong>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col xs="12" md="2">
                      <Card onClick={this.toggleModal}>
                        <CardBody>
                          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                        </CardBody>
                        <CardFooter>
                          <i className="icon-doc mr-1"></i><strong>Text</strong>
                        </CardFooter>
                      </Card>
                    </Col>
                    <Col xs="12" md="2">
                      <Card onClick={this.toggleModal}>
                        <CardBody>
                          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                        </CardBody>
                        <CardFooter>
                          <i className="icon-doc mr-1"></i><strong>Text</strong>
                        </CardFooter>
                      </Card>
                    </Col>
                    <Col xs="12" md="2">
                      <Card onClick={this.toggleModal}>
                        <CardBody>
                          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                        </CardBody>
                        <CardFooter>
                          <i className="icon-doc mr-1"></i><strong>Text</strong>
                        </CardFooter>
                      </Card>
                    </Col>
                    <Col xs="12" md="2">
                      <Card onClick={this.toggleModal}>
                        <CardBody>
                          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                        </CardBody>
                        <CardFooter>
                          <i className="icon-doc mr-1"></i><strong>Text</strong>
                        </CardFooter>
                      </Card>
                    </Col>
                    <Col xs="12" md="2">
                      <Card onClick={this.toggleModal}>
                        <CardBody>
                          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                        </CardBody>
                        <CardFooter>
                          <i className="icon-doc mr-1"></i><strong>Text</strong>
                        </CardFooter>
                      </Card>
                    </Col>
                    <Col xs="12" md="2">
                      <Card onClick={this.toggleModal}>
                        <CardBody>
                          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                        </CardBody>
                        <CardFooter>
                          <i className="icon-doc mr-1"></i><strong>Text</strong>
                        </CardFooter>
                      </Card>
                    </Col>
                    <Col xs="12" md="2">
                      <Card onClick={this.toggleModal}>
                        <CardBody>
                          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                        </CardBody>
                        <CardFooter>
                          <i className="icon-doc mr-1"></i><strong>Text</strong>
                        </CardFooter>
                      </Card>
                    </Col>
                    <Col xs="12" md="2">
                      <Card onClick={this.toggleModal}>
                        <CardBody>
                          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                        </CardBody>
                        <CardFooter>
                          <i className="icon-doc mr-1"></i><strong>Text</strong>
                        </CardFooter>
                      </Card>
                    </Col>
                    <Col xs="12" md="2">
                      <Card onClick={this.toggleModal}>
                        <CardBody>
                          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                        </CardBody>
                        <CardFooter>
                          <i className="icon-doc mr-1"></i><strong>Text</strong>
                        </CardFooter>
                      </Card>
                    </Col>
                    <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
                      <ModalHeader toggle={this.toggleModal}>Modal title</ModalHeader>
                      <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </ModalBody>
                      <ModalFooter>
                        <Button color="primary" onClick={this.toggleModal}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                      </ModalFooter>
                    </Modal>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Uploads;