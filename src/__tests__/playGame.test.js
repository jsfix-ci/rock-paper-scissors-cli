const inquirer = require('inquirer');
const {
  inquireGame,
  shouldGameStart,
  inquireGameMode,
  inquireOptions,
  inquireWinningMessage,
  initGame
} = require('../game/playGame');

describe('Testing user interaction with inquireGame function', () => {
  test('It should return true', async () => {
    inquirer.prompt = jest.fn().mockResolvedValue({ newGame: true });

    const message = await inquireGame(inquirer.prompt);

    expect(message).toBeDefined();
    expect(message).toHaveProperty('newGame');
    expect(message.newGame).toBeTruthy();
  });

  test('It should return false', async () => {
    inquirer.prompt = jest.fn().mockResolvedValue({ newGame: false });

    const message = await inquireGame(inquirer.prompt);

    expect(message).toBeDefined();
    expect(message).toHaveProperty('newGame');
    expect(message.newGame).toBeFalsy();
  });
});

describe('Testing shouldGameStart functionality', () => {
  test('It should return false when passed { newGame: false }', () => {
    const expectedValue = false;

    const actualValue = shouldGameStart({ newGame: false });

    expect(actualValue).toBeDefined();
    expect(actualValue).toBe(expectedValue);
  });
});

describe('Testing user interaction with inquireGameMode', () => {
  test('It should return cvc', async () => {
    inquirer.prompt = jest.fn().mockResolvedValue({ mode: 'cvc' });
    const expectedValue = 'cvc';

    const gameMode = await inquireGameMode(inquirer.prompt);

    expect(gameMode).toBeDefined();
    expect(gameMode).toHaveProperty('mode');
    expect(gameMode.mode).toBe(expectedValue);
  });

  test('It should return pvc', async () => {
    inquirer.prompt = jest.fn().mockResolvedValue({ mode: 'pvc' });
    const expectedValue = 'pvc';

    const gameMode = await inquireGameMode(inquirer.prompt);

    expect(gameMode).toBeDefined();
    expect(gameMode).toHaveProperty('mode');
    expect(gameMode.mode).toBe(expectedValue);
  });
});

describe('Testing user interaction with inquireOptions', () => {
  test('It should return rock', async () => {
    inquirer.prompt = jest.fn().mockResolvedValue({ hand: 'rock' });
    const expectedValue = 'rock';

    const handType = await inquireOptions(inquirer.prompt);

    expect(handType).toBeDefined();
    expect(handType).toHaveProperty('hand');
    expect(handType.hand).toBe(expectedValue);
  });

  test('It should return paper', async () => {
    inquirer.prompt = jest.fn().mockResolvedValue({ hand: 'paper' });
    const expectedValue = 'paper';

    const handType = await inquireOptions(inquirer.prompt);

    expect(handType).toBeDefined();
    expect(handType).toHaveProperty('hand');
    expect(handType.hand).toBe(expectedValue);
  });

  test('It should return scissors', async () => {
    inquirer.prompt = jest.fn().mockResolvedValue({ hand: 'scissors' });
    const expectedValue = 'scissors';

    const handType = await inquireOptions(inquirer.prompt);

    expect(handType).toBeDefined();
    expect(handType).toHaveProperty('hand');
    expect(handType.hand).toBe(expectedValue);
  });
});

describe('Testing user interaction with inquireWinningMessage', () => {
  test('It should return "I am the guru of rps"', async () => {
    inquirer.prompt = jest
      .fn()
      .mockResolvedValue({ message: 'I am the guru of rps' });
    const expectedValue = 'I am the guru of rps';

    const message = await inquireWinningMessage(inquirer.prompt);

    expect(message).toBeDefined();
    expect(message).toHaveProperty('message');
    expect(message.message).toBe(expectedValue);
  });

  test('It should return "Some times IRock, sometimes IPaper and sometimes IScissors ;)"', async () => {
    inquirer.prompt = jest.fn().mockResolvedValue({
      message: 'Some times IRock, sometimes IPaper and sometimes IScissors ;)'
    });
    const expectedValue =
      'Some times IRock, sometimes IPaper and sometimes IScissors ;)';

    const message = await inquireWinningMessage(inquirer.prompt);

    expect(message).toBeDefined();
    expect(message).toHaveProperty('message');
    expect(message.message).toBe(expectedValue);
  });
});
