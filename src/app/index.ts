// ----------- Example create server with nodeJs -----------
// import { createServer } from "node:http";
// import { hostname } from "node:os";

// const hostName = "127.0.0.1";
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello World");
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}`);
// });

// ----------- Example create server with express -----------
import express, { type Request, type Response } from "express";
const app = express();
const port: number = 3000;

app.get("/", (req: Request, res: Response) => {
  console.log("entre");
  // const song = getSong();
  // this will work
  // singSong(song);
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});

// function getSong() {
//   let _song = "";
//   let i = 100;
//   for (i; i > 0; i -= 1) {
//     setTimeout(function () {
//       _song += `${i} beers on the wall, you take one down and pass it around, ${
//         i - 1
//       } bottles of beer on the wall\n`;
//       if (i === 1) {
//         _song += "Hey let's get some more beer";
//       }
//     }, 0);
//   }
//   return _song;
// }
// function singSong(_song) {
//   if (!_song) {
//     throw new Error("song is '' empty, FEED ME A SONG!");
//   }
//   console.log(_song);
// }
