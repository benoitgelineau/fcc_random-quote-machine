var urlQuotes = 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?';

function showQuote() {
  $.getJSON(urlQuotes, function (data) {
    $('.quote').html('<div id="text" class="text-center"><p><span><strong>&quot;</strong>' + data.quoteText + '<b>&quot;</b></span></div><div id="author" class="text-right"><p> &sim;<i><span> ' + data.quoteAuthor + '</span></i></p></div>');
  });
}

function getNewQuote() {
  $.getJSON(urlQuotes, function (data) {
    $('.quote p').remove();
    $('.quote').append('<div id="text" class="text-center"><p><span><strong>&quot;</strong>' + data.quoteText + '<b>&quot;</b></span></div><div id="author" class="text-right"><p> &sim;<i><span> ' + data.quoteAuthor + '</span></i></p></div>');
  });
}

function tweetQuote() {
  var textToTweet = $('.quote p span').text() + ' #amazingquotes';
  var tweetLink = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(textToTweet);
  $('.twitter').attr('href', tweetLink).click();
}

$(document).ready(function () {

  showQuote();

  $('#new-quote').on('click', getNewQuote);

  $('.twitter').click(tweetQuote);

});
