const cors = require('cors')
const request = require('request')
var app = require('express')()

app.use(cors())
app.get('/', (q, s) => !!q.query.url ? request(q.query.url).pipe(s) : s.sendStatus(400))
app.get('/status', (_, s) => s.sendStatus(200))
app.listen(5050, () => console.log('Listening on port', 5050))