import chalk from 'chalk';

function displayFinalResults(p1: string, p2: string, msg: string): void {
  console.log(chalk.blueBright(p1));
  console.log(chalk.blueBright(p2));
  console.log(chalk.redBright(msg));
}

export = displayFinalResults;
