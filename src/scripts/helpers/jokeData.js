import axios from 'axios';

const endpoint = 'https://v2.jokeapi.dev/joke/Programming?safe-mode&type=twopart';

const getAJoke = async () => {
  const jokeCall = await axios.get(endpoint);

  return jokeCall.data;
};

export default getAJoke;
