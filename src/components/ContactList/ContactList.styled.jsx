import styled from '@emotion/styled';

export const Button = styled.button`
font-size: 12px;
background-color: white;
border: 1px solid lightgray;
border-radius: 4px;
cursor: pointer;
padding: 3px 6px;
&:hover {box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    background-color: #5a96f5;
    transition: 0.7s;};
`;

export const List = styled.ul`
display: flex;
flex-direction: column;
padding: 30px;
max-width: 350px;
`;

export const Item = styled.li`
display: inline-flex;
justify-content: space-between;
margin-top: 10px;
margin-right: 10px;
font-weight: 500;
`;