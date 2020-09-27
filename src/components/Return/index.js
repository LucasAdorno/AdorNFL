import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

function Return() {
  return (
    <Container>
      <Link to='/'>
        RETURN TO HOME
      </Link>
    </Container>

  );
}

export default Return;