export type NewGame = {
  readonly newGame: boolean;
};

export type GameOptions = {
  readonly hand: 'rock' | 'paper' | 'scissors';
};

export type GameMode = {
  readonly mode: 'pvc' | 'cvc';
};

export type WinningMessage = {
  readonly message: string;
};

export type Rock = Readonly<{
  win: ['scissors'];
  lose: ['paper'];
}>;

export type Paper = Readonly<{
  win: ['rock'];
  lose: ['scissors'];
}>;

export type Scissors = Readonly<{
  win: ['paper'];
  lose: ['rock'];
}>;

export type RockPaperScissors = Readonly<{
  rock: Rock;
  paper: Paper;
  scissors: Scissors;
}>;

export type Player = Readonly<{
  player: HandType;
  message: string;
}>;

export type HandType = 'rock' | 'paper' | 'scissors';
export type HandTypes = Readonly<['rock', 'paper', 'scissors']>;
