import styled from '@emotion/styled';

export const Label = styled.label`
 display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Input = styled.input`
  margin: 10px;
  width: 70%;
    &:focus {
    outline:none;
    border: 2px solid #5a96f5aa;
    border-radius: 3px;
    };
`;

export const Form = styled.form`
  padding: 30px;
  border: 1px solid black;
  width: 30%;
`;

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