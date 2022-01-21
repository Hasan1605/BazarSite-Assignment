import React from "react";
import Feature from '../Components/Feature';
export default function VerifyConatiner() {

    return (
        <Feature>
            <Feature.Heading>Password Reset Failed</Feature.Heading>
            <Feature.Break></Feature.Break>
            <Feature.Inner>
                <Feature.Text>
                    Username or Email Entered is incorrect.Kindly Signup and Login.
                </Feature.Text>
                <Feature.Text>Back to <Feature.Address href="/login">Login page</Feature.Address></Feature.Text>
            </Feature.Inner>
        </Feature>);
}