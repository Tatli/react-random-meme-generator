import React from 'react';

export default function Meme({ memeFinalUrl }) {
  // console.log(`memeFinalUrl inside Meme.js: ${memeFinalUrl}`);
  return (
    <>
      <img
        data-test-id="meme-image"
        src={memeFinalUrl}
        alt="A generated meme"
      />
      {/* {console.log(memeFinalUrl)} */}
    </>
  );
}
