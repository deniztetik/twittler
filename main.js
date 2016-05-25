$(document).ready(function(){
  var $tweets = $('tweets');
        
  function refreshStream() {
    var min = min || 0;
    return function() {
      var index = streams.home.length;
      for (var i = min; i < index; i++) {
        var tweet = streams.home[i];
        var $tweet = $('<div></div>');
        $tweet.html("<user>@" + tweet.user + ":</user> " + tweet.message + " at " + tweet.created_at);
        $tweet.data("username", tweet.user);
        $tweets.prepend($tweet);
      }
      min = index;
      $('user').click(showProfile);
    }
  }
  var stream = refreshStream();
  stream();
  //setInterval(stream, 3000); //updates every three seconds
  // $('user').click(showProfile); //shows user's profile when clikced
  $('.btn').click(stream); //refresh button

  function showProfile() {
    var user = ($(this).parent().data("username")); //does not work if refresh
    var userTweets = streams.users[user];           //button has been pressed
    $('tweets').empty();
    var index = userTweets.length;
    for (var i = 0; i < index; i++) {
      var tweet = userTweets[i];
      var $tweet = $('<div></div>');
      $tweet.html("<user>@" + tweet.user + ":</user> " + tweet.message + " at " + tweet.created_at);
      $tweets.prepend($tweet);
    }
  }
});