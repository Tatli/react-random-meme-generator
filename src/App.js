import { useState } from 'react';
import Preview from './Preview';

export default function App() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [memeTemplateText, setMemeTemplateText] = useState('');
  const [displayedMeme, setDisplayedMeme] = useState(
    'https://api.memegen.link/images/yodawg/yo_dawg/I_heard_you_like_memes',
  );
  const [previewMeme, setPreviewMeme] = useState(
    'https://api.memegen.link/images/preview.jpg?template=iw&lines[]=live+preview&lines[]=while+typingpnp',
  );

  // const meme = fetch(
  //   'https://api.memegen.link/images/fry/query_parameter/example.png?api_key=myapikey42',
  // )
  //   .then((response) => response.json())
  //   .then((data) => console.log(data){
  //     setDisplayedMeme(data.(what?))
  //   })
  //   .catch((error) => console.error(error));

  return (
    <>
      <h2>Random Meme Generator</h2>

      <Preview
        memeTemplateText={memeTemplateText}
        topText={topText}
        bottomText={bottomText}
      />

      <img data-test-id="meme-image" src={displayedMeme} />

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
      </form>
    </>
  );
}
