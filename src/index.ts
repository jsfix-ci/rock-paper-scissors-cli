#!/usr/bin/env node

import { initGame } from './game/playGame';
import displayTitle from './game/layout/displayTitle';

displayTitle('ROCK PAPER SCISSORS', {
  width: 80,
  whitespaceBreak: true
});

initGame();
