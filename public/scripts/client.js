/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//Dynamic Tweet Function




 const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

const renderTweets = function(tweets) {
  for (const tweet of tweets) {
    const result = createTweetElement(tweet);
    $(`#tweets-container`).append(result)
  }
}

const createTweetElement = function(data) {

  return $(`<section class="tweet-container" id="tweets-container">
  <article class="tweets">
      <div class="users-profile">
        <div class="name-picture">
        <img src="${data.user.avatars}">
        <h3 class="username" >${data.user.name}</h3>
        </div>
        <div class="display-name">${data.user.handle}</div>
      </div>
      <div class="tweet-msg">
        ${data.content.text}
      </div>
      <div class="dates"> 
        <h2 class="date-size">${data.created_at}</h2>
      <div class="tweet-icons">
        <i class="fas fa-flag icon"></i>
        <i class="fas fa-retweet icon"></i>
        <i class="fas fa-heart icon"></i>
      </div>
      </div>
  </article>
</section>`)
}


renderTweets(data);