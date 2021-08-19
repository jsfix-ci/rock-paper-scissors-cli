import {
  RockPaperScissors,
  HandType,
  HandTypes,
  Rock,
  Paper,
  Scissors,
  Player
} from '../types/types';

const rockPaperScissors: RockPaperScissors = {
  rock: {
    win: ['scissors'],
    lose: ['paper']
  },
  paper: {
    win: ['rock'],
    lose: ['scissors']
  },
  scissors: {
    win: ['paper'],
    lose: ['rock']
  }
};

export const availableTypes: HandTypes = ['rock', 'paper', 'scissors'];

export function getRandomHandType(availableTypes: HandTypes): HandType {
  const randomNumber: number = Math.floor(
    Math.random() * availableTypes.length
  );
  return availableTypes[randomNumber];
}

export function getWinner(p1: Player, p2: Player): string {
  const theToughGuy: Rock | Paper | Scissors = rockPaperScissors[p1.player];

  for (const key in theToughGuy) {
    const winOrLose: string[] = theToughGuy[key as 'win' | 'lose'];
    if (winOrLose.includes(p2.player)) {
      if (key === 'win') return p1.message;
      if (key === 'lose') return p2.message;
    }
  }

  return "It's a tie!";
}
