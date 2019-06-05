const WebSocket = require('ws');
const port = 4001;
const wss = new WebSocket.Server({ port });
const actions = require('./server/websocket-actions');

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    try{
      const {action, data} = JSON.parse(message);
      console.log({action, data})
      if(typeof(actions[action])!=='function'){
        throw(`Action ${action} is not available in actions`)
      }else{
        actions[action](ws, data);
      }
    }catch(e){
      console.log({error:e});
    }
  });
  ws.send('something');
});
