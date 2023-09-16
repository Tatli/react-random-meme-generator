import React, { useState } from 'react';

export default function Preview() {
  const [initialMemeUrl, setInitialMemeUrl] = useState(
    'https://api.memegen.link/images/doge/such_wow/much_meme',
  );
  return <img src={initialMemeUrl} alt="An initial meme" />;
}
