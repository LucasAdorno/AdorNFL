import styled from 'styled-components';

export const Container = styled.div`

  display: grid;
  margin-top: 8px;
  grid-template-columns: 1fr 1fr 1fr;
  align-content: center;
  justify-items: center;
  grid-gap: 16px;

  .icon-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 200px;
    border-radius: 15px;
    background: #F0F0F0;
  }

  img {
    width: 100px;
  }

  h2 {
    font-weight: 600;
  }

  @media(min-width: 1200px) {
    h2{
      font-size: 38px;
    }

    img {
      width: 140px;
    }
  }



`;

export const WeekBox = styled.div` 

.week-text {
  display:flex;
  align-items: center;
  justify-content: space-between;
  height: 110px;
  padding: 12px;
  background: #FBE415;
  color: #fff;
  text-decoration: none;
}
  

`;

