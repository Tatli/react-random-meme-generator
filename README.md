Create a web app with React that allows for users to generate and download memes using the https://memegen.link/ website.

It should allow the user to:

- [x] Enter text for the top and bottom of the meme

  - [x] Create an input field for each and hook their states

  - [x] The top text box needs to have a label element associated with it containing the text `Top text`
  - [x] The bottom text box needs to have a label element associated with it with the text `Bottom text`

  -[X] use "htmlFor" and id's to associate labels and fields

  - [x] Both text boxes should be empty when the page first loads

- [x] Preview the generated meme
  <!--   - [ ] load img src from fetched meme object into img
  We are not fetching, we are using an API
   -->
  - [x] The image element needs to have an html attribute set as follows: `data-test-id="meme-image"`
    - [x] This image element should show a working image when the page first loads
- [x] Change the meme template (the background image)
  - [x] The meme template selector element needs to have a label element associated with it containing the text `Meme template`
  - [x] If the user follows the steps below, the `doge` meme template needs to be selected:
    1. Click on the label of the meme template selector
    2. Clear any existing value (eg. with a text box)
    3. Type the text `doge`
    4. Hit enter
- [x] Download the meme by clicking on a button
  - [x] The button element needs to contain the text `Download`

## Stretch goals:

- [x] Reduce the amount of times a meme image is generated (don't generate it every time a user presses a key). Instead, generate a new image when the user clicks a button
  - [x] The button element needs to have an html attribute set as follows: `data-test-id="generate-meme"`
- [x] Use a `#`, `?` and `/` in your meme text
- [ ] Save a history of generated meme top text, bottom text, and meme photo type. (what is meant by photo type?) This history should reappear on refresh of the application.
- [ ] Make your application work offline (without a network connection) with the [PWA capabilities built in to `create-react-app`](https://create-react-app.dev/docs/making-a-progressive-web-app/). Any meme images that were generated while online in the application should be available to be generated again offline as well.
- [ ] Create a favicon that identifies your app: (see [Generating and Adding Favicons](https://learn.upleveled.io/courses/bootcamp-pern/modules/cheatsheet-design-ux/#generating-and-adding-favicons))

## Acceptance Criteria

- [ ] Preflight runs through without errors in your project
  - [ ] Link in your GitHub repo's About section: Netlify deployed website
- [ ] Project has been [imported into CodeSandbox](https://learn.upleveled.io/courses/bootcamp-pern/modules/cheatsheet-tasks/#codesandbox) and a comment has been added below with the sandbox URL
- [ ] [Drone bot](https://learn.upleveled.io/courses/bootcamp-pern/modules/cheatsheet-tasks/#upleveled-drone) has been tagged and responded with a passing message
- [ ] Correct GitHub commit message format (see [Writing Commit Messages](https://learn.upleveled.io/courses/bootcamp-pern/modules/cheatsheet-git-github/#writing-commit-messages))

## To-Figur-eout's

- [x] How to use Regexp to recognize special characters and .replace() them
