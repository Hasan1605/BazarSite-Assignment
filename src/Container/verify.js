import React from "react";

import Feature from '../Components/Feature';

export default function VerifyConatiner({ ...rsestProps }) {
    return (
        <Feature>
            <Feature.Heading>Password Reset</Feature.Heading>
            <Feature.Break></Feature.Break>
            <Feature.Inner>
                <Feature.Text>
                    A Password reset link is generated as per your equest
                    and sent to your email address. Please check your mailbox.
                </Feature.Text>
                <Feature.Text>Back to <Feature.Address href="/login">Login page</Feature.Address></Feature.Text>
            </Feature.Inner>
        </Feature>);
}