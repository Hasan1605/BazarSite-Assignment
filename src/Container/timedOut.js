import React from "react";
import Feature from '../Components/Feature';
export default function ErrorConatiner() {

    return (
        <Feature>
            <Feature.Heading>Password Reset Failed</Feature.Heading>
            <Feature.Break></Feature.Break>
            <Feature.Inner>
                <Feature.Text>
                    Timed Out
                </Feature.Text>
                <Feature.Text>Back to <Feature.Address href="/login">Login page</Feature.Address></Feature.Text>
            </Feature.Inner>
        </Feature>);
}