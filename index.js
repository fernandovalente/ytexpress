const customExpress = require('./config/customExpress');

const app = customExpress();
const port = 3000;

app.listen(port, () => console.log('Listening on port ' + port));
