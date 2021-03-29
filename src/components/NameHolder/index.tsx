import React from 'react';
import { Container, NameContent, Name } from './styles';

interface UserProps {
  users:[
    user:{
      name: string;
    }
  ]
}

const NameHolder: React.FC<UserProps> = ({users}) => {
  return (
    <Container>
      {
        users.map((user, index)=>{
          return(
            <NameContent key={index}>
              <Name>Name: {user.name}</Name>
            </NameContent>
          )
        })
      }
    </Container>
  );
}

export default NameHolder;