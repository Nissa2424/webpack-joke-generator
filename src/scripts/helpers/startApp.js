import domBuilder from './domBuilder';
import domEvents from './domEvents';
import jokeButton from './homePage';

const startApp = () => {
  domBuilder();
  domEvents();
  jokeButton();
};

export default startApp;
