import { useState } from 'react';
import DownloadButton from './DownloadButton';
import FunctionalityDescription from './FunctionalityDescription';
import MemeForm from './MemeForm';
import Preview from './Preview';

export default function App() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [memeTemplateText, setMemeTemplateText] = useState('');
  const [memeUrl, setMemeUrl] = useState(
    'https://api.memegen.link/images/yodawg/yo_dawg/I_heard_you_like_memes',
  );

  // const memeList = fetch('https://api.memegen.link/images/')
  //   .then((response) => response.json())
  //   .then((data) => console.log(JSON.stringify(data)))
  //   .catch((error) => console.error(error));

  async function getMemeList() {
    const memeList = await fetch('https://api.memegen.link/images/');
    const jsonMemeList = await response(memeList.json());
    console.log(JSON.stringify(jsonMemeList));
  }

  // const meme = fetch(
  //   'https://api.memegen.link/images/fry/query_parameter/example.png?api_key=myapikey42',
  // )
  //   .then((response) => response.json())
  //   .then((data) => console.log(data){
  //     setMemeUrl(data.(what?))
  //   })
  //   .catch((error) => console.error(error));

  return (
    <>
      <h2>Random Meme Generator</h2>

      <FunctionalityDescription />

      {/* <Preview displayedMeme={displayedMeme} /> */}

      <img data-test-id="meme-image" src={memeUrl} alt="A generated meme" />

      {getMemeList()}
      <select>
        {/* {memeList.map((meme) => (
          <option value={meme.template}>{meme.template}</option>
        ))} */}
      </select>

      <MemeForm
        memeTemplateText={memeTemplateText}
        topText={topText}
        bottomText={bottomText}
        displayedMeme={memeUrl}
        setBottomText={setBottomText}
        setTopText={setTopText}
        setMemeTemplateText={setMemeTemplateText}
        setMemeUrl={setMemeUrl}
      />
      <DownloadButton apiUrl={memeUrl} />
    </>
  );
}
