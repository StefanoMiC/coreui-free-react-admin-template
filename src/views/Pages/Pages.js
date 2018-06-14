import React, { Component} from 'react';
import { Card, CardBody, CardHeader, Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';



class Pages extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
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


  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState } });
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
                        <i className="icon-docs mr-2"></i><strong>Pages</strong>
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
                <Table hover responsive>
                  <thead>
                  <tr>
                    <th>Username</th>
                    <th>Date registered</th>
                    <th>Role</th>
                    <th></th>
                    <th></th>
                  </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Samppa Nori</td>
                      <td>2012/01/01</td>
                      <td>Member</td>
                      <td className="text-right">
                            <Button size="sm" outline color="warning">Warning</Button> 
                      </td>
                      <td>
                            <Button size="sm" outline color="danger">Danger</Button>
                      </td>
                    </tr>
                  <tr>
                    <td>Estavan Lykos</td>
                    <td>2012/02/01</td>
                    <td>Staff</td>
                    <td className="text-right">
                          <Button size="sm" outline color="warning">Warning</Button> 
                    </td>
                    <td>
                          <Button size="sm" outline color="danger">Danger</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>Chetan Mohamed</td>
                    <td>2012/02/01</td>
                    <td>Admin</td>
                    <td className="text-right">
                          <Button size="sm" outline color="warning">Warning</Button> 
                    </td>
                    <td>
                          <Button size="sm" outline color="danger">Danger</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>Derick Maximinus</td>
                    <td>2012/03/01</td>
                    <td>Member</td>
                    <td className="text-right">
                          <Button size="sm" outline color="warning">Warning</Button> 
                    </td>
                    <td>
                          <Button size="sm" outline color="danger">Danger</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>Friderik Dávid</td>
                    <td>2012/01/21</td>
                    <td>Staff</td>
                    <td className="text-right">
                          <Button size="sm" outline color="warning">Warning</Button> 
                    </td>
                    <td>
                          <Button size="sm" outline color="danger">Danger</Button>
                    </td>
                  </tr>
                  </tbody>
                </Table>
                <Pagination>
                  <PaginationItem>
                    <PaginationLink previous tag="button"></PaginationLink>
                  </PaginationItem>
                  <PaginationItem active>
                    <PaginationLink tag="button">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">4</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink next tag="button"></PaginationLink>
                  </PaginationItem>
                </Pagination>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Pages;