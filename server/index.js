const express = require('express')
const app = express()
const port = 3000

// set express to use JSON as body format
app.use(express.json())

// create a GET route with a path variable called articleId
// also add a query parameter called question
app.get('/article/:articleId/answer', (req, res) => {
  // get the articleId path variable
  const articleId = req.params.articleId
  // get the question query parameter
  const question = req.query.question
  // send back the articleId and question
  res.send(`articleId: ${articleId}, question: ${question}`)
});

// create a POST route called /article/:articleId/question which accepts a payload that has question and answer properties
app.post('/article/:articleId/question', (req, res) => {
  // get the articleId path variable
  const articleId = req.params.articleId
  // get the question and answer properties from the request body
  const { question, answer } = req.body
  // send back the articleId, question, and answer
  res.send(`articleId: ${articleId}, question: ${question}, answer: ${answer}`)
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})