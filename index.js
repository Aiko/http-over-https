const cors = require('cors')
const request = require('request')
var app = require('express')()

app.use(express.json())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
  next()
})
app.use(cors())
app.get('/', (q, s) => !!q.query.url ? request(q.query.url).pipe(s) : s.sendStatus(400))
app.post('/', (q, s) => !!q.query.url ? request.post({url: q.query.url, headers: q.headers, json: q.body}).pipe(s) : s.sendStatus(400))
app.get('/status', (_, s) => s.sendStatus(200))
app.listen(5050, () => console.log('Listening on port', 5050))
