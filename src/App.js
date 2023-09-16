import { useState } from 'react';
import DownloadButton from './DownloadButton';
import FunctionalityDescription from './FunctionalityDescription';
import Meme from './Meme';
import MemeForm from './MemeForm';
import Preview from './Preview';

export default function App() {
  const [memeFinalUrl, setMemeFinalUrl] = useState();

  return (
    <>
      <h2>Random Meme Generator</h2>

      <FunctionalityDescription />
      <Preview />
      <MemeForm setMemeFinalUrl={setMemeFinalUrl} />
      <Meme memeFinalUrl={memeFinalUrl} />
      <DownloadButton />
    </>
  );
}
