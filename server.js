const express = require('express');
const cors = require('cors')
const app = express();

var fakeData = []
var n = 5000
for (i=1; i<n; i++) {
    fakeData.push({
        x: i,
        y: Math.floor(Math.random()*1000)
    })
}

app.use(cors());

app.use('/data', (req, res) => {
  res.send(fakeData);
});

app.listen(8080, () => console.log('API is running on http://localhost:8080/data'));