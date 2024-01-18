// controllers/quizzController.js
const generateRoomCode = () => {
  const characters = "ABCDEFGHIJKLMOPQURSTUVXYZ";
  const codeLenght = 6;
  let roomCode = "";

  for (let i = 0; i < codeLenght; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    roomCode += characters.charAt(randomIndex);
  }
  return roomCode;
};

const salons = {};

// CREER UN SALON
const createRoom = (req, res) => {
  const { username } = req.body;

  const roomCode = generateRoomCode();

  salons[roomCode] = {
    host: username,
    players: [
      {
        username: username,
        isHost: true,
      },
    ],
  };

  res.json({ hostUsername: username, roomCode });

  // REJOINDRE AUTOMATIQUEMENT UNE ROOM APRES L'AVOIR CREE
  joinUserToRoom(roomCode, username, true);
};

const joinUserToRoom = (roomCode, username) => {
  if (salons[roomCode]) {
    if (
      !salons[roomCode].players.some((player) => player.username === username)
    ) {
      salons[roomCode].players.push({ username, isHost });
    }
  }
};

// REJOINDRE UN SALON
const joinRoom = (req, res) => {
  const { username, roomCode } = req.body;

  if (salons[roomCode]) {
    if (!salons[roomCode].players.includes(username)) {
      salons[roomCode].players.push(username);
      res.json({
        success: true,
        message: `Vous avez rejoint la room ${roomCode}`,
        username: username,
      });
    } else {
      res.json({
        success: false,
        message: `Vous êtes déjà dans la room ${roomCode}`,
      });
    }
  } else {
    res
      .status(404)
      .json({ success: false, message: `La room ${roomCode} n'existe pas` });
  }
};

// OBTENIR LES INFO D'UNE ROOM
const getWaitingRoom = (req, res) => {
  const { roomCode } = req.params;

  if (salons[roomCode]) {
    res.json({ success: true, roomInfo: salons[roomCode] });
  } else {
    res
      .status(404)
      .json({ success: false, message: `La room ${roomCode} n'existe pas` });
  }
};

module.exports = {
  createRoom,
  joinRoom,
  getWaitingRoom,
};
