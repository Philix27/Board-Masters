import { WebSocketServer } from 'ws';
import { GameManager } from './GameManager';
import url from 'url';
// import { extractAuthUser } from './auth';

const wss = new WebSocketServer({ port: 5545 });

const gameManager = new GameManager();

wss.on('connection', function connection(ws, req) {
  // @ts-ignore
  const token: string = url.parse(req.url, true).query.token;
  const user = extractAuthUser(token, ws);
  gameManager.addUser(user);

  ws.on('close', () => {
    // gameManager.removeUser(ws);
    console.log('Game monger');
  });

  ws.on('error', console.error);

  ws.send('Hey bro.. We good');
});

console.log('done');
