import displayFinalResults from '../game/layout/displayFinalResults';

describe('Testing the logging of the results', () => {
  console.log = jest.fn();

  test('It should log 3 times, strings in following order "You chose: rock", "Computer chose: scissors", "Player 1 wins"', () => {
    const p1: string = 'You chose: rock';
    const p2: string = 'Computer chose: scissors';
    const msg: string = 'Player 1 wins';

    displayFinalResults(p1, p2, msg);

    expect(console.log).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledTimes(3);
    expect(console.log).toHaveBeenNthCalledWith<string[]>(
      1,
      expect.stringMatching(p1)
    );
    expect(console.log).toHaveBeenNthCalledWith<string[]>(
      2,
      expect.stringMatching(p2)
    );
    expect(console.log).toHaveBeenNthCalledWith<string[]>(
      3,
      expect.stringMatching(msg)
    );
  });
});
