import React from 'react';
import logoNfl from '../../assets/logoNfl.png';

import { Container } from './styles';

function Header() {
  return (
    <Container>
      <img src={logoNfl} alt= 'logo NFL' />
    </Container>
  );
}

export default Header;