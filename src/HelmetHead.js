import React from 'react';
import { Helmet } from 'react-helmet';

function HelmetHead() {
  return (
    <div>
      <Helmet>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon-apple-touch.png" />
      </Helmet>
    </div>
  );
}

export default HelmetHead;
