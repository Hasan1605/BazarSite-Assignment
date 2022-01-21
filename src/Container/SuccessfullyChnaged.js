import React from "react";

import Feature from '../Components/Feature';

export default function SuccessfullyConatiner({ ...restProps }) {
    return (
        <Feature>
            <Feature.Heading>Password Reset</Feature.Heading>
            <Feature.Break></Feature.Break>
            <Feature.Inner>
                <Feature.Text>
                    Password Reset Done Successfully.
                </Feature.Text>
                <Feature.Text>Back to <Feature.Address href="/login">Login page</Feature.Address></Feature.Text>
            </Feature.Inner>
        </Feature>);
}