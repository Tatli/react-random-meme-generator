import React from 'react';

export default function Preview(props) {
  return <img id="preview" src={props.displayedMeme} alt="meme preview" />;
}
