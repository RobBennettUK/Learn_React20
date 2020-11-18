import React from "react";
import Input from "./Input";
import Button from "./Button";

function Form(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      {props.state === false && (
        <Input type="password" placeholder="Confirm Password" />
      )}
      <Button type="submit" text={props.state ? "Login" : "Register"} />
    </form>
  );
}

export default Form;
