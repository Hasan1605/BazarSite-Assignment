import styled from 'styled-components/macro';
// import { Link as ReachRouterLink } from 'react-router-dom';

export const Button = styled.button`
margin:1.5rem;
height:40px;
border-radius:2px;
border:inset 1px rgba(128, 128, 128, 0.3);
box-shadow: 0px 0px 5px 0px rgb(116, 109, 109);
background-color:rgb(252, 6, 100);
color:white;
font-family: 'Outfit', 'sans-serif';
font-weight:900;
font-size:16px;
&:active{
    box-shadow: 0px 0px 0px 0px rgb(116, 109, 109);
}
&:hover{
    background-color:rgb(252, 6, 100,0.6);
    
}
@media(max-width:600px){
    margin-left:7px;
    margin-right:7px;
    height:20px;
    font-size:10px;
    margin-bottom:7px;
    
}
`;

export const Text = styled.p`
display:inline;
text-align:center;
font-weight:600;
font-size:0.75rem;
&.Change{
    display:none,
    color:black,
    z-index:10,
    text-align:center;
    font-weight:600;
   font-size:0.75rem;
}
}
`;

export const Heading = styled.h1`
margin-bottom:10px;
font-family: 'Montserrat', sans-serif;
font-weight:1000;
font-size:30px;
@media(max-width:600px){
    font-size:16px;
}

`;

export const Input = styled.input`
margin:1.5rem;
margin-top:2px;
height:40px;
border:inset 0.5px rgba(128, 128, 128, 0.3);
border-radius:2px;
box-shadow: 0px 0px 3px 0px rgb(116, 109, 109);
font-family: 'Outfit', 'sans-serif';
font-size:1rem;
@media(max-width:600px){
    margin-left:7px;
    margin-right:7px;
    font-size:10px;
    height:20px;
    margin-bottom:7px;
    
    
}

`;
export const Address = styled.a`
font-weight:200;
color:black;
text-decoration:none;
`
export const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`;

export const Inner = styled.div`
    display:flex;
    font-family: 'Poppins', sans-serif;
    flex-direction:column;
    background-color:white;
    justify-content:center;
    width:400px;
    height:280px;
    margin:20px;
    border-radius:4px;
    border-top:7px solid rgb(252, 6, 100); 
    box-shadow: 0px 0px 7px 0px rgb(126, 88, 161);
    overflow:hidden;
    @media(max-width:600px){
        width:150px;
        height:200px;
    }
    &.mainChangepassword{
        display:flex;
        font-family: 'Poppins', sans-serif;
        flex-direction:column;
        background-color:white;
        justify-content:center;
        width:500px;
        height:400px;
        margin:20px;
        border-radius:4px;
        border-top:7px solid rgb(252, 6, 100); 
        box-shadow: 0px 0px 7px 0px rgb(126, 88, 161);
        overflow:hidden;
        @media(max-width:600px){
            width:150px;
            height:250px;
        } 
    }


`;

export const Label = styled.label`
    margin:1.5rem;
    margin-bottom:0px;
    font-family: 'Poppins', sans-serif;
    @media(max-width:600px){
        margin-left:7px;
        margin-right:7px;
        font-size:10px;
        margin-bottom:7px;
        height:20px;
    }
   
`;

export const Break = styled.div`
    height:2.5px;
    width:150px;
    background-color:rgb(252, 6, 100);
    margin-bottom:20px;
    @media(max-width:600px){
        width:100px;
    }
`
export const Form = styled.form`
    
`;