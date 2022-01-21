import React from "react";
import { Address, Break, Inner, Button, Input, Text, Heading, Label, Container, Form } from "./styles/feature";
export default function Feature({ children, ...restProps }) {
    return (
        <Form type="submit" {...restProps}>
            <Container {...restProps}>
                {children}
            </Container>
        </Form>
    );
}

Feature.Inner = function featureInner({ children, ...restProps }) {
    return (
        <Inner {...restProps}>
            {children}
        </Inner>)
}
Feature.Container = function featureContainer({ children, ...restProps }) {
    return (
        <Container{...restProps}>
            {children}
        </Container>)
}
Feature.Button = function featureButton({ children, ...restProps }) {
    return (
        <Button {...restProps}>
            {children}
        </Button>)
}

Feature.Input = function featureInput({ children, ...restProps }) {
    return (
        <Input {...restProps}>
            {children}
        </Input>)
}

Feature.Text = function featureText({ children, ...restProps }) {
    return (
        <Text {...restProps}>
            {children}
        </Text>);
}

Feature.Heading = function featureHeading({ children, ...restProps }) {
    return (
        <Heading {...restProps}>
            {children}
        </Heading>)
}

Feature.Label = function featureLabel({ children, ...restProps }) {
    return (
        <Label {...restProps}>
            {children}
        </Label>)
}

Feature.Break = function featureBreak({ children, ...restProps }) {
    return (
        <Break {...restProps}>
            {children}
        </Break>)
}

Feature.Address = function featureAddress({ children, ...restProps }) {
    return (
        <Address {...restProps}>
            {children}
        </Address>)
}