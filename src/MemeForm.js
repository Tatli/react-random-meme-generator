import React from 'react';
import { displayPartsToString } from 'typescript';

export default function MemeForm({
  topText,
  bottomText,
  memeTemplateText,
  memeUrl,
  setTopText,
  setBottomText,
  setMemeTemplateText,
  setMemeUrl,
}) {
  // console.log(
  //   `https://api.memegen.link/images${
  //     memeTemplateText ? `/${memeTemplateText}` : ''
  //   }${topText ? `/${topText.replace(/ /g, '_')}` : ''}${
  //     topText && bottomText ? `/${bottomText.replace(/ /g, '_')}` : ''
  //   }${bottomText && !topText ? `/ /${bottomText.replace(/ /g, '_')}` : ''}`,
  // );
  // console.log(topText);
  // console.log(bottomText);
  console.log(memeUrl);
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      {/* Top Text Input */}
      <label>
        Top text
        <input
          value={topText}
          onChange={(e) => setTopText(e.currentTarget.value)}
        />
      </label>
      <br />
      {/* Bottom Text Input */}
      <label>
        Bottom text
        <input
          value={bottomText}
          onChange={(e) => setBottomText(e.currentTarget.value)}
        />
      </label>
      <br />
      {/* Meme Template Selection */}
      <label>
        Meme template
        <input
          value={memeTemplateText}
          onChange={(e) => setMemeTemplateText(e.currentTarget.value)}
        />
      </label>
      <br />
      {/* Set final Meme URL */}
      {setMemeUrl(
        `https://api.memegen.link/images${
          memeTemplateText ? `/${memeTemplateText}` : ''
        }${topText ? `/${topText.replace(/ /g, '_')}` : ''}${
          topText && bottomText ? `/${bottomText.replace(/ /g, '_')}` : ''
        }${
          bottomText && !topText ? `/ /${bottomText.replace(/ /g, '_')}` : ''
        }`,
      )}
      {/* <button
        data-test-id="generate-meme"
        onClick={() =>
          setMemeUrl(
            `https://api.memegen.link/images${
              memeTemplateText ? `/${memeTemplateText}` : ''
            }${topText ? `/${topText.replace(/ /g, '%20')}` : ''}${
              topText && bottomText ? `/${bottomText.replace(/ /g, '%20')}` : ''
            }${
              bottomText && !topText
                ? `/ /${bottomText.replace(/ /g, '%20')}`
                : ''
            }`,
          )
        }
      >
        Generate
      </button> */}
    </form>
  );
}
