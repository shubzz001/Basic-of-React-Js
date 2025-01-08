import React from "react";
import styled from "styled-components";

const Task = () => {
  const Div = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #76f5e8;
  `;

  const H1 = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #00734b;
    margin-bottom: 1em;
  `;

  const Card = styled.div`
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    max-width: 400px;
    text-align: center;
    width: 100%;
  `;

  const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1em;
  `;

  const Button = styled.button`
    background-color: rgb(63, 142, 66);
    color: white;
    margin-top: 20px;
    width: 100%;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    font-size: 1em;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: rgb(53, 122, 56);
    }
  `;

  const Label = styled.label`
  display: 'flex'
   alignItems: 'flex-start'  
  `;

  return (
    <Div>
      <H1>CONTACT FORM</H1>
      <Card>
        <Label style={{ display: "flex", alignItems: "flex-start" }}>
          Email
        </Label>
        <Input type="email" placeholder="Enter Email" />
        <Label style={{ display: "flex", alignItems: "flex-start" }}>
          Password
        </Label>
        <Input type="password" placeholder="Enter Password" />
        <Button>Submit</Button>
      </Card>
    </Div>
  );
};

export default Task;
