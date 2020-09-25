import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-content: center;
  justify-items: center;
  grid-gap: 16px;

  .icon-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 160px;
    height: 160px;
    border-radius: 15px;
    background: #F0F0F0;
  }

  img {
    width: 100px;
  }

  h2 {
    font-weight: 600;
  }
`;

export const WeekBox = styled.div` 

  display:flex;
  align-items: center;
  justify-content: space-between;
  height: 110px;
  padding: 12px;
  background: #FBE415;
  color: #fff;
  

`;

