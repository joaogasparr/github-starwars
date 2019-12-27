import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  max-width: 750px;
  max-height: 50px;

  input {
    width: 650px;
    height: 50px;
    padding: 0 15px;
  }
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100px;
  height: 50px;
  background: #ac53f2;
  border-radius: 2px;

  img {
    height: 30px;
    width: 30px;
    box-shadow: rgba(0, 0, 0, 0.4);
  }
`;
