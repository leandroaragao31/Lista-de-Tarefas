import styled from 'styled-components';

export const Container = styled.header`
  display:flex;
  justify-content:space-between;
  align-items:center;
  max-width:80%;
  width:100%;
  margin:auto;
  background-color:#030303;

`;

export const Menu = styled.nav`
  width:60%;
ul{
  display:flex;
  justify-content:space-evenly;
  list-style:none;
  font-size:10px;
  text-align:center
}

li{
  width:15vw;
  font-size:2em;
  cursor:pointer;
  transition:1.5s;
  &:hover{
    color:red;
    text-shadow: 2px 2px 3px white;
    transform:scale(110%);
  }
}
`;
