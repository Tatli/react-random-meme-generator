import React from 'react';

export default function FunctionalityDescription() {
  return (
    <fieldset>
      <legend>How does this work?</legend>
      <ul>
        <li>
          <strong>MemeTemplate:</strong>
          Choose from a number of Meme templates such as:
          <ul>
            <li>yodawg</li>
            <li>doge</li>
            <li>fry</li>
          </ul>
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
