/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//Dynamic Tweet Function

$(document).ready(() => {
  /*const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png",
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
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];*/
// changed to prepend to ensure new tweets loaded at the top rather than at the end and all older tweets displayed from bottom to top

//escape function
const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

  const renderTweets = function(tweets) {
    for (const tweet of tweets) {
      const result = createTweetElement(tweet);
      $(`#tweets-container`).prepend(result);
    }
  };

  const createTweetElement = function(data) {
    return $(`
      <section class="tweet-container">
        <article class="tweets">
          <div class="users-profile">
            <div class="name-picture">
              <img src="${data.user.avatars}">
              <h3 class="username">${data.user.name}</h3>
            </div>
            <div class="display-name">${data.user.handle}</div>
          </div>
          <div class="tweet-msg">
            ${escape(data.content.text)}
          </div>
          <div class="dates"> 
            <h2 class="date-size">${timeago.format(data.created_at)}</h2>
            <div class="tweet-icons">
              <i class="fas fa-flag icon"></i>
              <i class="fas fa-retweet icon"></i>
              <i class="fas fa-heart icon"></i>
            </div>
          </div>
        </article>
      </section>
    `);
  };

  $('#tweet-submit').on('submit', (event) => {
    event.preventDefault();
    const maxLength = 140;
    const tweet = $('#tweet-text').val();
    if (!tweet) {
      return alert('Please enter text before submitting a Tweet');
    } 
    
    if (tweet.length > maxLength ) {
      return alert("You can only tweet messages with up to 140 characters!")
    } 
   
    //made a new function to load post submit tweet as utilizing loadtweets made duplicate posts
    const newTweet = function() {
      $.get('/tweets', function(tweet) {
        console.log("1",tweet[tweet.length-1])
        renderTweets([tweet[tweet.length - 1]]);
      })
    }

    const formData = $('#tweet-submit').serialize();
      $.post('/tweets', formData).then(newTweet);
      //clears submission textbox after submission
      $('#tweet-text').val('');
  
    // const tweet = $('#tweet-text').val();
    //const formData = $('#tweet-submit').serialize();
    //$.post('/tweets', formData).then(loadTweets)
  });
  

  const loadTweets = function() {
    $.get('/tweets', function(tweet) {
      renderTweets(tweet);
    })
  }

  loadTweets();
});