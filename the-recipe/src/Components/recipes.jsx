import React, { Component } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  Container,
} from "reactstrap";

class Recipes extends Component {
  state = {
    tab: "1",
  };

  activeTab(tab) {
    if (this.state.tab1 !== tab) {
      this.setState({ tab });
    }
  }

  getMains() {
    console.log(this.props);
  }

  //   getDesserts() {

  //   }

  render() {
    return (
      <div>
        <Container>
          <Nav tabs>
            <NavItem>
              <NavLink
                onClick={() => {
                  this.activeTab("1");
                }}
              >
                Main
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                onClick={() => {
                  this.activeTab("2");
                }}
              >
                Desserts
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.tab}>
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                  <h4>Tab 1 Contents</h4>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </Container>
      </div>
    );
  }
}

export default Recipes;
