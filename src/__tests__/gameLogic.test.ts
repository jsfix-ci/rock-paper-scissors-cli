import {
  getRandomHandType,
  availableTypes,
  getWinner
} from '../game/gameLogic';
import { HandType, Player } from '../types/types';

describe('Testing game logic functionality', () => {
  for (let i = 0; i < 20; i++) {
    test('It should return either rock, paper or scissors', () => {
      const actualValue: HandType = getRandomHandType(availableTypes);

      expect(actualValue).toBeDefined();
      expect(actualValue).toMatch(/rock|paper|scissors/);
    });
  }

  test('It should return "Player 1 wins"', () => {
    const expectedValue: string = 'Player 1 wins';
    const player1: Player = {
      player: 'rock',
      message: 'Player 1 wins'
    };
    const player2: Player = {
      player: 'scissors',
      message: 'Player 2 wins'
    };

    const actualValue: string = getWinner(player1, player2);

    expect(actualValue).toBeDefined();
    expect(actualValue).toBe(expectedValue);
  });

  test('It should return "Player 2 wins"', () => {
    const expectedValue: string = 'Player 2 wins';
    const player1: Player = {
      player: 'rock',
      message: 'Player 1 wins'
    };
    const player2: Player = {
      player: 'paper',
      message: 'Player 2 wins'
    };

    const actualValue: string = getWinner(player1, player2);

    expect(actualValue).toBeDefined();
    expect(actualValue).toBe(expectedValue);
  });

  test('It should return "Player 2 wins"', () => {
    const expectedValue: string = 'Player 2 wins';
    const player1: Player = {
      player: 'paper',
      message: 'Player 1 wins'
    };
    const player2: Player = {
      player: 'scissors',
      message: 'Player 2 wins'
    };

    const actualValue: string = getWinner(player1, player2);

    expect(actualValue).toBeDefined();
    expect(actualValue).toBe(expectedValue);
  });

  test('It should return "Player 1 wins"', () => {
    const expectedValue: string = 'Player 1 wins';
    const player1: Player = {
      player: 'paper',
      message: 'Player 1 wins'
    };
    const player2: Player = {
      player: 'rock',
      message: 'Player 2 wins'
    };

    const actualValue: string = getWinner(player1, player2);

    expect(actualValue).toBeDefined();
    expect(actualValue).toBe(expectedValue);
  });

  test('It should return "Player 1 wins"', () => {
    const expectedValue: string = 'Player 1 wins';
    const player1: Player = {
      player: 'scissors',
      message: 'Player 1 wins'
    };
    const player2: Player = {
      player: 'paper',
      message: 'Player 2 wins'
    };

    const actualValue: string = getWinner(player1, player2);

    expect(actualValue).toBeDefined();
    expect(actualValue).toBe(expectedValue);
  });

  test('It should return "It\'s a tie!"', () => {
    const expectedValue: string = "It's a tie!";
    const player1: Player = {
      player: 'rock',
      message: 'Player 1 wins'
    };
    const player2: Player = {
      player: 'rock',
      message: 'Player 2 wins'
    };

    const actualValue: string = getWinner(player1, player2);

    expect(actualValue).toBeDefined();
    expect(actualValue).toBe(expectedValue);
  });
});
