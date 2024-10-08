const getArticlesHandler = (req, res) => {
  res.send('GET articles route')
}

const postArticlesHandler = (req, res) => {
  res.send('POST articles route')
}

const getArticleByIdHandler = (req, res) => {
  const { articleId } = req.params
  res.send(`GET article by id: ${articleId}`)
}

const deleteArticleByIdHandler = (req, res) => {
  const { articleId } = req.params
  res.send(`DELETE article by id: ${articleId}`)
}

const putArticleByIdHandler = (req, res) => {
  const { articleId } = req.params
  res.send(`PUT article by id: ${articleId}`)
}

export {
  getArticlesHandler,
  postArticlesHandler,
  getArticleByIdHandler,
  deleteArticleByIdHandler,
  putArticleByIdHandler
}
