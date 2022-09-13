import styled from "styled-components";

import { FcEmptyTrash, FcCheckmark,  } from "react-icons/fc"; 
export  const Container = styled.div`
background: rgb(132,0,255);
background: linear-gradient(90deg, rgba(132,0,255,1) 0%, rgba(0,0,0,1) 100%);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

`
export  const ToDoList = styled.div`
   background: #303030;
   padding: 30px 30px;
   border-radius: 5px;

   ul{
    padding: 0;
    margin-top: 60px;
   }

`
export  const Input = styled.input`
    border: 2px solid rgba(209,211,212,0.4);
    border-radius: 5px; 
    height: 40px; 
    margin-right: 40px;
    width: 340px;
    background: white;

    &::placeholder{
        color: black;
    }

    &:active{
        border: none;
    }

`

export  const Button = styled.button`
    background: rgb(132,0,255);;
    border-radius: 5px;
    height: 40px; 
    color: #FFFFFF;
    font-size: 17px;
    font-weight: 900;
    border: none;
    font-family: 'Roboto', sans-serif;
    width: 130px;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    &:active{
        opacity: 0.6;
    }
`

export const ListItem = styled.div`
    background: ${ props => props.isFinished ? '#5b00b0' : '#cc002d'};
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    height: 60px;
    padding: 0 10px;
    width: 500px;

    li {
        list-style: none;
        color: white    ;
    }

    
`

export const Trash = styled(FcEmptyTrash)`
    cursor: pointer;
`

export const Check = styled(FcCheckmark)`
    cursor: pointer;
`

export const Text = styled.h3`
    color: white;
`


