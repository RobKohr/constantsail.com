//websocket-actions.js

exports.log = (ws, data) => {
  console.log(JSON.stringify(data, 0, 5));
}

