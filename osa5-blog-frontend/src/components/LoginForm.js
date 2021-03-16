import React from "react";

const LoginForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleLogin}>
        username <input value={props.username} />
        <br></br>
        password <input value={props.username} />
        <br></br>
        <button>login</button>
      </form>
    </div>
  );
};

export default LoginForm;
