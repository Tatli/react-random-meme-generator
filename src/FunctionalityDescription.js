import React from 'react';

export default function FunctionalityDescription() {
  return (
    <fieldset>
      <legend>How does this work?</legend>
      <ul>
        <li>
          <strong>MemeTemplate:</strong>
          Select your Meme Template
        </li>
        <li>
          <strong>Top text:</strong>
          Type your desired text to be displayed on the top of your meme
        </li>
        <li>
          <strong>Bottom text:</strong>
          Type your desired text to be displayed on the bottom of your meme
        </li>
      </ul>
    </fieldset>
  );
}
