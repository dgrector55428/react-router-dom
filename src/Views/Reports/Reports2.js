import React, { useState } from "react";
import { useQuery } from "react-query";
import Spinner from "../../components/Spinner/Spinner";
import ReactTable, { useTable, useSortBy } from "react-table";
import "react-table/react-table.css";
import { Container, Row, Col } from "reactstrap";

import "../Reports/Reports2.css";

const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
};

const columns = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Name",
    accessor: "name",
  },

  {
    Header: "Email",
    accessor: "email",
  },
];

function Report() {
  const { status, data, error } = useQuery("users", getUsers);
  if (status === "loading") {
    return <div>{<Spinner />}</div>; // loading state
  }

  if (status === "error") {
    return <div>{error.message}</div>; // error state
  }

  return (
    <Container className="report-table" style={{ textAlign: "center" }}>
      <Row>
        <Col md="12" style={{ margin: "20px 0" }}>
          <h2>Report Table</h2>
        </Col>
        <Col md="12" style={{ margin: "20px 0" }}>
          <ReactTable
            data={data}
            columns={columns}
            style={{ textAlign: "center" }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Report;
