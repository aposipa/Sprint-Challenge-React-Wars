import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Col} from 'reactstrap';
import styled from "styled-components";

const BackgroundColor = styled.div `
background-color: slategray;
`
const NameTitle = styled.h2` 
font-weight: bold;
text-decoration: underline;
color: azure;
`
const BirthStyle = styled.p`
color: yellow;
`
const HeigthStyle = styled.p`
color: lightblue;
`
const GenderStyle = styled.p`
color: black;
`
const StarWars = ({ data }) => {    
    return (
        <BackgroundColor>
        <Col>
        <Card>
            <CardBody>
                <NameTitle>{data.name}</NameTitle>
                <HeigthStyle>Height: {data.height}</HeigthStyle>
                <BirthStyle>Birth Year: {data.birth_year}</BirthStyle>
                <GenderStyle> Gender: {data.gender}</GenderStyle>
            </CardBody>
        </Card>
        </Col>
        </BackgroundColor>
        
    )
}

export default StarWars;

