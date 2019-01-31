import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Words extends Component {
  state = {
    words: []
  };

  componentDidMount() {
    this.loadWordss();
  }

  loadWords = () => {
    API.getWords()
      .then(res => this.setState({ words: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>My favorite words</h1>
            </Jumbotron>
            <form>
              <Input name="word" placeholder="Word (required)" />
              <Input name="meaning" placeholder="Meaning (required)" />
              <TextArea name="link" placeholder="Link (required)" />
              <FormBtn>Submit Word</FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Words On My List</h1>
            </Jumbotron>
            {this.state.words.length ? (
              <List>
                {this.state.words.map(words => (
                  <ListItem key={words._id}>
                    <a href={"/words/" + words._id}>
                      <strong>
                        {words.word} by {words.meaning}
                      </strong>
                    </a>
                    <DeleteBtn />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Words;
