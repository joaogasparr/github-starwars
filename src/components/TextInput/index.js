import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import icon from '~/assets/search.svg';

import { Container, SearchButton } from './styles';

export default function TextInput() {
  const [search, setSearch] = useState('');

  return (
    <Container>
      <input
        type="text"
        name="input"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <Link to={`/result/${search}`}>
        <SearchButton type="button">
          <img src={icon} alt="" />
        </SearchButton>
      </Link>
    </Container>
  );
}
