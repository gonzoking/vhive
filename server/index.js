const express = require('express')
const app = express()
const port = 3000

const articles = [];

// set express to use JSON as body format
app.use(express.json())

// add CORS headers for debugging to the express server
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

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
// the articleId should be a path variable
// the article should be found in the articles array and the question and answer should be added to the qanda array
app.post('/article/:articleId/question', (req, res) => {
  // get the articleId path variable
  const articleId = req.params.articleId
  // get the question and answer from the request body
  const { question, answer } = req.body

  // find the article in the articles array
  const article = articles.find(article => article.id === articleId)

  // add the question and answer to the article
  article.qanda.push({ question, answer })

  // send back the question and answer
  res.send(`question: ${question}, answer: ${answer}`)
});

app.get('/', (req, res) => {
  res.send('Hello World!')
});

// create a POST route for a single article. the payload should have the fields name and context
app.post('/article', (req, res) => {
  // get the name and context fields from the request body
  const { name, context, id } = req.body

  // add the article to the articles array
  articles.push({ name, context, id, qanda: [] });

  // send back the name and context
  res.send(`name: ${name}, context: ${context}`)
});

// create a GET route for all articles
app.get('/article', (req, res) => {
  // send back the articles
  res.send(articles)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});