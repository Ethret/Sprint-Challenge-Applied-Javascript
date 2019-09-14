// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function articleCreator(articleInfo) {
  const article = document.createElement('div');
  const articleHeadline = document.createElement('div');
  const articleAuthor = document.createElement('div');
  const articleAuthImgCont = document.createElement('div');
  const articleAuthImg = document.createElement('img');
  const articleAuthName = document.createElement('span');

  article.appendChild(articleHeadline);
  article.appendChild(articleAuthor);
  articleAuthor.appendChild(articleAuthImgCont);
  articleAuthImgCont.appendChild(articleAuthImg);
  articleAuthor.appendChild(articleAuthName);

  articleHeadline.textContent = articleInfo.headline;
  articleAuthImg.textContent = articleInfo.authorPhoto;
  articleAuthName.textContent = articleInfo.authorName;

  article.classList.add('card');
  articleHeadline.classList.add('headline');
  articleAuthor.classList.add('author');
  articleAuthImgCont.classList.add('img-container');

  return article
}
axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then( response => {
    console.log(response.data);
    
    let articleInfo = response.data.articles.javascript.concat(response.data.articles.bootstrap, response.data.articles.technology, response.data.articles.jquery, response.data.articles.node);

    console.log(articleInfo);

    const cardsCont = document.querySelector('.cards-container');

    articleInfo.forEach(data => {
      cardsCont.appendChild(articleCreator(data));
  })})
