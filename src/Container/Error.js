import React from "react";
import Feature from '../Components/Feature';
export default function ErrorConatiner() {

    return (
        <Feature>
            <Feature.Heading>Password Reset Failed</Feature.Heading>
            <Feature.Break></Feature.Break>
            <Feature.Inner>
                <Feature.Text>
                    Error Occured.Please try again later or return to login page
                </Feature.Text>
                <Feature.Text>Back to <Feature.Address href="/login">Login page</Feature.Address></Feature.Text>
            </Feature.Inner>
        </Feature>);
}