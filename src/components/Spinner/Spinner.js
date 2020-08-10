import React from "react";
import { Spinner } from "reactstrap";

const Loading = (props) => {
  return (
    <div>
      <Spinner type="grow" color="danger" />
      <Spinner type="grow" color="warning" />
      <Spinner type="grow" color="info" />
    </div>
  );
};

export default Loading;
