import React from 'react';

export default function MemeForm({
  topText,
  bottomText,
  memeTemplateText,
  setTopText,
  setBottomText,
  setMemeTemplateText,
  setDisplayedMeme,
}) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="topText">
        Top text
        <input
          value={topText}
          onChange={(e) => setTopText(e.currentTarget.value)}
          id="topText"
        />
      </label>
      <br />
      <label htmlFor="bottomText">
        Bottom text
        <input
          value={bottomText}
          onChange={(e) => setBottomText(e.currentTarget.value)}
          id="bottomText"
        />
      </label>
      <br />
      <label htmlFor="memeTemplateText">
        Meme template
        <input
          value={memeTemplateText}
          onChange={(e) => setMemeTemplateText(e.currentTarget.value)}
          id="memeTemplateText"
        />
      </label>
      <button
        data-test-id="generate-meme"
        onClick={(e) =>
          setDisplayedMeme(
            `https://api.memegen.link/images${
              memeTemplateText ? `/${memeTemplateText}` : ''
            }${topText ? `/${topText}` : ''}${
              topText && bottomText ? `/${bottomText}` : ''
            }${bottomText && !topText ? `/ /${bottomText}` : ''}`,
          )
        }
      >
        Generate
      </button>
      {/* <button onClick={(e) => fetch(displayedMeme).then()}>Download</button> */}
    </form>
  );
}
