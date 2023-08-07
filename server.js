import app from './src/app.js';
import server from './src/configurations/server.js';
import log from './src/log.js';

let { PORT, HOST, } = server;

app.listen(PORT || 3000, HOST, () => log(`server running`))