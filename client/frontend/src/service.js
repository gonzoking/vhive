const URL = 'http://192.168.1.232:3001/articles';

export const getAnswer = async(articleId,question) => {
    articleId = 1;
   const result = await fetch(`${URL}/${articleId}?question=${question}`);
   return result.answer;
}

export const getArticles = async() => {
    const result = await fetch(`${URL}`);
    return result;
 }
 
