type Player = {
  name: string;
  id: number;
};

const player1: Player = {
  name: 'Max',
  id: 45,
};

const player2 = {
  id: 2,
  color: 'green',
};

const getPlayerData = (parameter: keyof Player, player: Player) => {
  return player[parameter];
};

const playerName = getPlayerData('name', player1); //?

// create an array with all items typed like the player1 object
// create some function and create a type that represents type of created function

const playersInTeam: (typeof player2)[] = [];

playersInTeam.push(player2);

const getPlayerId = (player: Player) => {
  return player.id;
};

type PlayerIdFunc = typeof getPlayerId;
