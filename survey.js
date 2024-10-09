const inquirer = require('inquirer');
const cowsay = require('cowsay');
const chalk = require('chalk');
const { favoriteLanguage } = require('./questions/favoriteLanguage');
const { preferredFramework } = require('./questions/preferredFramework');

async function runSurvey() {
  try {
    // Prompt the user with questions
    const answers = await inquirer.prompt([favoriteLanguage, preferredFramework]);

    // Log a summary using cowsay and chalk
    console.log(chalk.green('Thank you for completing the survey!'));
    console.log(cowsay.say({
      text: `Your favorite language is ${chalk.blue(answers.favoriteLanguage)} and your preferred framework is ${chalk.yellow(answers.preferredFramework)}!`
    }));
  } catch (error) {
    console.error(chalk.red('Something went wrong during the survey!'), error);
  }
}

runSurvey();
