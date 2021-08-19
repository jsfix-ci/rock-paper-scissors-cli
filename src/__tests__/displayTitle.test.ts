import figlet, { Options } from 'figlet';
import displayTitle from '../game/layout/displayTitle';

describe('Testing title is displayed', () => {
  console.log = jest.fn();
  figlet.textSync = jest.fn((title: string) => title);

  test('It should .... ', () => {
    const title: string = 'ROCK PAPER SCISSORS';
    const options: Options = {};

    displayTitle(title, options);

    expect(console.log).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(expect.stringMatching(title));
  });
});
