$(document).ready(function () {
  expandCards();
});

function expandCards() {
  $('.card-header-icon').click(function () {
    var card = $(this).parents('div')[0];
    $(card).children('.card-content').toggle();
  });
}