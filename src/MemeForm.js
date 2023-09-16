import React, { useEffect, useState } from 'react';

export default function MemeForm({ setMemeFinalUrl }) {
  // console.log(
  //   `https://api.memegen.link/images${
  //     memeTemplateText ? `/${memeTemplateText}` : ''
  //   }${topText ? `/${topText.replace(/ /g, '_')}` : ''}${
  //     topText && bottomText ? `/${bottomText.replace(/ /g, '_')}` : ''
  //   }${bottomText && !topText ? `/ /${bottomText.replace(/ /g, '_')}` : ''}`,
  // );

  const [memeList, setMemeList] = useState([]);
  const [memeTemplateSelected, setMemeTemplateSelected] = useState('yodawg');
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');

  useEffect(() => {
    async function fetchMemeTemplates() {
      try {
        const memeListResponse = await fetch(
          'https://api.memegen.link/images/',
        );
        const jsonMemeList = await memeListResponse.json();
        setMemeList(jsonMemeList);
      } catch (error) {
        console.error(error);
        return [];
      }
    }

    fetchMemeTemplates();
  }, []);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      {/* Meme Template Selection */}
      <label>
        Meme template
        <select
          onChange={(e) =>
            setMemeTemplateSelected(
              e.currentTarget.value.split(
                'https://api.memegen.link/templates/',
              )[1],
            )
          }
        >
          {memeList.map((meme, index) => (
            <option key={`meme-${index}`} value={meme.template}>
              {meme.template.split('https://api.memegen.link/templates/')[1]}{' '}
              {/* // .split results in the following array: ["", "mytemplate"], with [1] you select the second part */}
            </option>
          ))}
        </select>
      </label>

      <br />

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

      <button
        data-test-id="generate-meme"
        onClick={() =>
          setMemeFinalUrl(
            `https://api.memegen.link/images${
              memeTemplateSelected ? `/${memeTemplateSelected}` : ''
            }${topText ? `/${topText.replace(/ /g, '_')}` : ''}${
              topText && bottomText ? `/${bottomText.replace(/ /g, '_')}` : ''
            }${
              bottomText && !topText
                ? `/ /${bottomText.replace(/ /g, '_')}`
                : ''
            }`,
          )
        }
      >
        Generate
      </button>
    </form>
  );
}
