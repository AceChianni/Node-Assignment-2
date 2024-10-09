import inquirer from 'inquirer';
import { favoriteAnime } from './questions/favoriteAnime.js';
import { favoriteCharacter } from './questions/favoriteCharacter.js';
import { preferredGenre } from './questions/preferredGenre.js';
import { favoriteManga } from './questions/favoriteManga.js';
import { quirkyQuestion } from './questions/quirkyQuestion.js';
import cowsay from 'cowsay';
import chalk from 'chalk';

const questions = [
  favoriteAnime,
  favoriteCharacter,
  preferredGenre,
  favoriteManga,
  quirkyQuestion
];

async function runSurvey() {
  console.log(chalk.blue('Welcome to the Anime Survey!'));
  
  const responses = await inquirer.prompt(questions);
  
  console.log(cowsay.say({
    text: `Thank you for participating!\n\nHere's a summary of your preferences:\n\nFavorite Anime: ${responses.favoriteAnime}\nFavorite Character: ${responses.favoriteCharacter}\nPreferred Genres: ${responses.preferredGenre.join(', ')}\nFavorite Manga: ${responses.favoriteManga}\nPet Anime Character: ${responses.quirkyQuestion}`,
    e: 'oO',
    T: 'U '
  }));
}

runSurvey();
