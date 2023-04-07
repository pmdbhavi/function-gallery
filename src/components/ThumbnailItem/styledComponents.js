import styled from 'styled-components'

export const List = styled.li`
    list-style-type: none;
`

export const Button=styled.button`
    background-color: transparent;
    border-width:0px;
    cursor: pointer;
`

export const Image=styled.img`
    opacity: ${props =>props.active && "0.5"};
    @media screen and (max-width:576px){
        height:70px;
        width:70px;
        margin:5px;
    }
`