import chalk from 'chalk';
import { PromptModule, prompt } from 'inquirer';

import { availableTypes, getRandomHandType, getWinner } from './gameLogic';
import {
  NewGame,
  GameOptions,
  GameMode,
  Player,
  WinningMessage
} from '../types/types';
import displayFinalResults from './layout/displayFinalResults';

// Step 1 - prompt the user to choose if he wants to play a new game or not
export function inquireGame(prompt: PromptModule): Promise<NewGame> {
  const answer: Promise<NewGame> = prompt({
    type: 'confirm',
    name: 'newGame',
    message: 'Would you like to start a new game?'
  });

  return answer;
}

// Step 1.1 - verify user's answer
export function shouldGameStart(answer: NewGame): boolean {
  const game: NewGame = answer;

  return game.newGame;
}

// Step 2 - prompt the user to choose the game mode
export function inquireGameMode(prompt: PromptModule): Promise<GameMode> {
  const gameMode: Promise<GameMode> = prompt({
    type: 'list',
    name: 'mode',
    message: 'What game mode would you like to play?',
    choices: [
      { name: 'Player vs Computer', value: 'pvc' },
      { name: 'Computer vs Computer', value: 'cvc' }
    ]
  });

  return gameMode;
}

// Step 3 - prompt the user to choose which hand to play
export function inquireOptions(prompt: PromptModule): Promise<GameOptions> {
  const hand: Promise<GameOptions> = prompt({
    type: 'list',
    name: 'hand',
    message: 'What do you want to play?',
    choices: [
      { name: 'Rock', value: 'rock' },
      { name: 'Paper', value: 'paper' },
      { name: 'Scissors', value: 'scissors' }
    ]
  });

  return hand;
}

// Step 4 - inquire the user for a winning catch phrase
export function inquireWinningMessage(
  prompt: PromptModule
): Promise<WinningMessage> {
  const message: Promise<WinningMessage> = prompt({
    type: 'input',
    name: 'message',
    message:
      'Wirte here your personal winning catch phrase or press enter to keep it to default',
    default: 'Some times IRock, sometimes IPaper and sometimes IScissors ;)'
  });

  return message;
}

// Initialize the game
export async function initGame() {
  const userAnswer: NewGame = await inquireGame(prompt);
  const shouldStart: boolean = shouldGameStart(userAnswer);

  if (!shouldStart) {
    console.log(chalk.red('\nBYE!'));
    process.exit();
  }

  const mode: GameMode = await inquireGameMode(prompt);

  if (mode.mode === 'cvc') {
    const computer1: Player = {
      player: getRandomHandType(availableTypes),
      message: "I'm computer 1 and I'm a tough guy to beat!"
    };
    const computer2: Player = {
      player: getRandomHandType(availableTypes),
      message: "I'm computer 2 and I'm always lucky."
    };
    const theWinner: string = getWinner(computer1, computer2);

    displayFinalResults(
      `Computer 1 chooses ${computer1.player}`,
      `Computer 2 chooses ${computer2.player}`,
      theWinner
    );
    process.exit();
  }

  const { hand }: GameOptions = await inquireOptions(prompt);
  const { message }: WinningMessage = await inquireWinningMessage(prompt);
  const player: Player = {
    player: hand,
    message
  };
  const computer: Player = {
    player: getRandomHandType(availableTypes),
    message: 'Pff, you think you can beat me? Try again'
  };
  const theWinner: string = getWinner(player, computer);
  displayFinalResults(
    `You chose: ${player.player}`,
    `Computer chose: ${computer.player}`,
    theWinner
  );
}
