import React from "react";
import { BsCheck } from "react-icons/bs";

const Check = ({ isComleted }) => {
  return <div>{isComleted && <BsCheck color="white" size={23} />}</div>;
};

export default Check;
