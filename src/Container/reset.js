import { React, useState } from "react";
import Feature from '../Components/Feature';
export default function ResetConatiner({ resetCont, val, user, ...restProps }) {
  var [Value, setValue] = useState('');
  const handler = (event) => {
    var x = event.target.value;
    setValue(x)
  }
  const Submitted = (event) => {
    var name = Value;
    event.preventDefault();
    user(name);
  }
  return (
    <Feature onSubmit={(e) => { e.preventDefault() }}>
      <Feature.Heading>Password Reset</Feature.Heading>
      <Feature.Break></Feature.Break>
      <Feature.Inner>
        <Feature.Label>Email address*</Feature.Label>
        <Feature.Input type="email" value={Value} onChange={handler}></Feature.Input>
        <Feature.Button onClick={Submitted}>RESET MY PASSWORD</Feature.Button>
        <Feature.Text>Back to <Feature.Address href="/login">Login page</Feature.Address></Feature.Text>
      </Feature.Inner>
    </Feature>);
}

// onClick={() => { setValue(true) }} style={Value ? Styles : { backgroundColor: "rgb(252, 6, 100)" }