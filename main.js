$(document).ready(function(){
  var $tweets = $('tweets');
        
  function showStream() {
    var min = min || 0;
    return function() {
      var index = streams.home.length - 1;
      for (var i = index; i >= min; i--) {
        var tweet = streams.home[i];
        var $tweet = $('<div></div>');
        $tweet.text('@' + tweet.user + ': ' + tweet.message + ' at ' + tweet.created_at);
        $tweets.prepend($tweet);
      }
    min = index;
    }
  }
  var stream = showStream();
  stream();
  $('button').on('click', stream);
});