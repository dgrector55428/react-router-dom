import React from "react";
import { useQuery } from "react-query";
import Spinner from "../../components/Spinner/Spinner";
import { Table, Container, Button } from "reactstrap";

import "../Projects/Projects.css";

const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
};

function Project() {
  const { status, data, error } = useQuery("posts", getPosts);

  if (status === "loading") {
    return <div>{<Spinner />}</div>; // loading state
  }

  if (status === "error") {
    return <div>{error.message}</div>; // error state
  }

  return (
    <Container>
      <Table id="data-tbl" size="sm" striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((posts, i) => {
            const { id, title, body } = posts;
            return (
              <tr key={i}>
                <td>{id}</td>
                <td>{title}</td>
                <td>{body}</td>
                <td>
                  <Button size="sm" color="secondary">
                    Details
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}

export default Project;
