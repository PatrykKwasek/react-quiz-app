import React from 'react';

import { css } from '@emotion/core';
import ClipLoader from 'react-spinners/ClipLoader';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: black;
`;

export default class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  render() {
    const { loading } = this.state;

    return (
      <div className='sweet-loading'>
        <ClipLoader
          css={override}
          size={150}
          color='#123abc'
          loading={loading}
        />
      </div>
    );
  }
}
