$(function() {
  $("#tweet-text").on("input", function() {
    const maxLength = 140;
    const charCount = $(this).val().length;
    const remaining = maxLength - charCount;
    const counter = $('.counter');
    counter.text(remaining);
    counter.toggleClass('charOver', remaining < 0);
  });
});