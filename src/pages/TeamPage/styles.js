import styled from 'styled-components';

export const Container = styled.div`

  width: 100%;
  max-width: 1200px;
  padding: 4px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #4A4A4A;


  #title-page {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  #title-page h1 {
    font-size: 20px;
  }

  #main-page {
    margin: 16px 4px 16px 4px;
    padding: 20px 16px;
    width: 96%;
    background: #E4E4E4;
  }

  #main-page #win-seed-line {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto 42px;

  }


  #main-page #records-jersey-line {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  #main-page #records-jersey-line img {
    width: 110px; 
  }

  #main-page #stadium {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 44px auto;
  }

  #main-page #stadium img {
    width: 100%;
    border-radius: 4px;
    margin: 12px auto;
  }

  #main-page #stadium .stadium-details {
    align-self: flex-start;
    margin-bottom: 4px;
  }
  
  @media(min-width: 1200px) {
    #main-page {
      margin: 16px 4px 16px 4px;
      padding: 20px 120px;
      width: 96%;
      background: #E4E4E4;
    }

    #title-page h1 {
      font-size: 26px;
    }
  }

`;
