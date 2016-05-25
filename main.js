$(document).ready(function(){
  var $tweets = $('tweets');
        
  function showStream() {
    var min = min || 0;
    return function() {
      var index = streams.home.length - 1;
      for (var i = min; i < index; i++) {
        var tweet = streams.home[i];
        var $tweet = $('<div></div>');
        $tweet.html("<user>@" + tweet.user + ":</user> " + tweet.message + " at " + tweet.created_at);
        $tweet.data("username", tweet.user);
        $tweets.prepend($tweet);
      }
      min = index;
    }
  }
  var stream = showStream();
  stream();
  //setInterval(stream, 3000);
  $('.btn').on('click', stream);
  
  $('user').on('click', function() { // shows only the users tweets when clicked
    var user = ($(this).parent().data("username"));
    var userTweets = streams.users[user];
    $('tweets').empty();
    var index = userTweets.length - 1;
    for (var i = 0; i < index; i++) {
      var tweet = userTweets[i];
      var $tweet = $('<div></div>');
      $tweet.html("<user>@" + tweet.user + ":</user> " + tweet.message + " at " + tweet.created_at);
      $tweets.prepend($tweet);
    }
  });
});