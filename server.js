const express = require('express');
var cors = require('cors')
const app = express();
app.use(cors());
app.use(express.static('./dist/paper-dashboard-angular'));

app.get('/*', function (req, res) {
  res.sendFile('index.html', { root: 'dist/paper-dashboard-angular' }
  );
});

app.listen(process.env.PORT || 8080);

console.log(`Running on port ${process.env.PORT || 8080}`)
