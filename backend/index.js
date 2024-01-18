const express = require("express");
const cors = require("cors");
const quizzRoutes = require("./routes/quizzRoutes");

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

app.use("/api", quizzRoutes);

app.listen(port, () => {
  console.log(`Le serveur écoute sur le port ${port}`);
});

// const express = require("express");
// const cors = require("cors");
// const app = express();
// const port = 3001;

// app.use(express.json());
// app.use(cors());

// const salons = {};

// // Générer une room
// app.post("/api/create-room", (req, res) => {
//   const { username } = req.body;

//   const roomCode = generateRoomCode();

//   salons[roomCode] = {
//     host: username,
//     players: [username],
//   };
//   res.json({ roomCode });
// });

// // fonction générer room :
// function generateRoomCode() {
//   const characters = "ABCDEFGHIJKLMOPQURSTUVXYZ";
//   const codeLenght = 6;
//   let roomCode = "";

//   for (let i = 0; i < codeLenght; i++) {
//     const randomIndex = Math.floor(Math.random() * characters.length);
//     roomCode += characters.charAt(randomIndex);
//   }
//   return roomCode;
// }

// // Rejoindre room :
// app.post("/api/join-room", (req, res) => {
//   const { username, roomCode } = req.body;

//   if (salons[roomCode]) {
//     if (salons[roomCode].players.includes(username)) {
//       res.json({
//         success: true,
//         message: `Vous avez rejoins le salon ${roomCode}`,
//       });
//     } else {
//       res.status(404).json({
//         success: false,
//         message: `le salon ${roomCode} n'existe pas`,
//       });
//     }
//   }
// });

// // api.get("/api/waiting-room/:roomCode", (req, res) => {
// //   const { roomCode } = req.params;

// //   if (salons[roomCode]) {
// //     res.join({ success: true, room: salons[roomCode] });
// //   } else {
// //     res
// //       .status(404)
// //       .json({ success: false, message: `le salon ${roomCode} n'existe pas` });
// //   }
// // });

// app.listen(port, () => {
//   console.log(`Le serveur écoute sur le port ${port}`);
// });
