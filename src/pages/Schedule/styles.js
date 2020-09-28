import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;


  .week-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 98%;
    padding: 0 8px 8px 8px;
    border-bottom: 5px solid #4A4A4A;
    color: #4A4A4A;
  }

  #schedule-div {
    width: 98%;
    min-height: 200px;
    margin-top: 12px;
    border-radius: 12px;
    background: #E4E4E4;
  }

`;

export const ScheduleLine = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;

  .home-team, .away-team {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 8px;
  }

  .home-team img, .away-team img {
    width: 60px;
  }

 .home-team h2, .away-team h2 {
    font-size: 20px;
  }

  .clock-div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media(min-width: 1200px) {

    .home-team, .away-team {
        padding: 18px;
      }

    .home-team img, .away-team img {
      width: 88px;
    }

   .home-team h2, .away-team h2 {
      font-size: 28px;
    }
  }


 `;
