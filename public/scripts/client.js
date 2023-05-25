/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//Dynamic Tweet Function

$(document).ready(() => {

// Error msg hidden until error presents itself
$("#empty-error").hide();
$("#error-long").hide();

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
    $("#empty-error").slideUp("slow");
    $("#error-long").slideUp("slow");
    if (!tweet) {
      return $("#empty-error").slideDown("slow"), $("#error-long").hide();

    } 
    
    if (tweet.length > maxLength ) {
      return $("#error-long").slideDown("slow"),$("#empty-error").hide();
    } 
   
    //made a new function to load post submit tweet as utilizing loadtweets made duplicate posts
    const newTweet = function() {
      $.get('/tweets', function(tweet) {
        renderTweets([tweet[tweet.length - 1]]);
      })
    }

    const formData = $('#tweet-submit').serialize();
      $.post('/tweets', formData).then(newTweet);
      //resets counter on submission
      const counter = $('.counter');
      counter.text(maxLength);
      //clears submission textbox after submission
      $('#tweet-text').val('');
  });
  

  const loadTweets = function() {
    $.ajax({
      url: '/tweets',
      method: 'GET',
      success: function(tweet) {
        renderTweets(tweet);
      },
      error: function(error) {
        console.log(error);
      }
    });
  };

  loadTweets();
});