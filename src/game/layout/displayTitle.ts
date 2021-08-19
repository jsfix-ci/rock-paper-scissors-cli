import chalk from 'chalk';
import clear from 'clear';
import figlet, { Options } from 'figlet';

function displayTitle(text: string, options: Options) {
  clear();
  console.log(chalk.green(figlet.textSync(text, options)));
}

export = displayTitle;
