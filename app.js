console.log("Hello, Node.js!");

const moods = ['happy', 'sad', 'excited', 'nervous', 'relaxed', 'angry', 'grateful'];

const getRandomIndex = (arr) => Math.floor(Math.random() * arr.length);

const generateMood = () => {
  const randomMood = moods[getRandomIndex(moods)];
  return `Your current mood is: ${randomMood}`;
};

console.log(generateMood());
