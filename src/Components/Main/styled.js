import styled from 'styled-components';

export const Container = styled.main`
  max-width:80%;
  width:100%;
  margin:auto;
  height:100vh;
  background-color:#030303;
`;

export const SubContainer = styled.form`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:flex-start;
  height:100%;

  input{
    width:40%;
    height:5%;
    margin-top:4vh;
    border-radius:20px;
    text-indent:2vw;
    &::placeholder{
      text-align:center;
      text-transform:Capitalize;
      
    }

  
`;

export const List = styled.div`
  width:80%;
  height:100%;

ul{
  display:flex;
  justify-content:space-evenly;
}


  li{
    list-style:square;
    text-transform:capitalize;
    font-size:2rem;
  }

  button{
    width:8%;
    height:4vh;
    border-bottom:solid;
    border-radius:10px;
    background-color:gray;
    transition:1.5s;
    &:hover{
      transform:scale(110%);
      cursor:pointer;
    }
  }
`;
