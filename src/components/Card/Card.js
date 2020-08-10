import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import axios from "axios";

export default class EmployeeCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      imageUrl: [],
    };
  }

  componentDidMount() {
    this.getUsers();
    this.getUserImage();
  }

  getUsers = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => this.setState({ users: response.data }))
      .catch((err) => {
        console.log(err);
        return null;
      });
  };

  getUserImage = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos`)
      .then((response) => this.setState({ imageUrl: response.data }))
      .catch((err) => {
        console.log(err);
        return null;
      });
  };

  render() {
    return (
      <div>
        {this.state.users.map((userData, i) => {
          const { id, name, email } = userData;

          return (
            <Card
              key={i}
              style={{ width: "300px", margin: "20px", float: "left" }}
            >
              <CardImg
                top
                style={{ width: "300px" }}
                src="https://via.placeholder.com/600/92c952"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>
                  <b>
                    <h5>{name}</h5>
                  </b>
                </CardTitle>
                <CardText>{email}</CardText>
              </CardBody>
            </Card>
          );
        })}
      </div>
    );
  }
}
