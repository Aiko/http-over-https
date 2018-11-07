const cors = require('cors')
const request = require('request')
var app = require('express')()

app.use(cors())
app.get('/', (q, s) => !!q.params.url ? request(q.params.url).pipe(s) : s.status(400))
app.listen(5050)