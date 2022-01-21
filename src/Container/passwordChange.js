import axios from "axios";
import { React, useState } from "react";
import Feature from '../Components/Feature';
export default function ChangePasswordConatiner({ deleteOnSubmit, address, finish, ...restProps }) {
    const [value, setvalue] = useState(false);
    const [input1, setinput1] = useState("");
    const [input2, setinput2] = useState("");
    const handle1 = (event) => {
        var x = event.target.value;
        setinput1(x)
        console.log(input1);
    }
    const handle2 = (event) => {
        var x = event.target.value;
        setinput2(x);
        if (input1.slice(0, x.length) !== x) {
            console.log(input1.slice(0, x.length))
            console.log(x);
            setvalue(true);
        }
        else {
            setvalue(false);
        }
    }
    const mainhandler = () => {
        if (input1 === input2) {
            const Url = address;
            deleteOnSubmit(Url, input1);
        }
        else {
            setvalue(true);
        }
    }
    return (
        <Feature onSubmit={(e) => {
            e.preventDefault();
            mainhandler();
        }}>
            <Feature.Heading className="Header">Password Reset</Feature.Heading>
            <Feature.Break></Feature.Break>
            <Feature.Inner className="mainChangepassword">
                <Feature.Label>New Password*</Feature.Label>
                <Feature.Input type="password" onChange={handle1}></Feature.Input>
                <Feature.Label>Confirm New Password*</Feature.Label>
                <Feature.Input type="password" onChange={handle2}></Feature.Input>
                <Feature.Container style={{ display: value ? "flex" : "none" }}>
                    <Feature.Text>both password must be same</Feature.Text>
                </Feature.Container>
                <Feature.Button type="submit">RESET MY PASSWORD</Feature.Button>
                <Feature.Text >Back to <Feature.Address href="/login">Login page</Feature.Address></Feature.Text>
            </Feature.Inner>
        </Feature>);
}
// {<Feature style={{ display: value ? "flex" : "none", zIndex: value ? "1" : "-1" }}>
//                     <Feature.Heading>Password Reset Failed</Feature.Heading>
//                     <Feature.Break></Feature.Break>
//                     <Feature.Inner>
//                         <Feature.Text>
//                             Error Occured.Please try again later or return to login page
//                         </Feature.Text>
//                         <Feature.Text>Back to <Feature.Address href="/login">Login page</Feature.Address></Feature.Text>
//                     </Feature.Inner>
//                 </Feature>}
