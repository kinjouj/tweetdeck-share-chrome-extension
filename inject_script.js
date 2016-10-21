console.log(window);

var mo = new MutationObserver((mutation) => {
  $('.js-tweet-button').trigger("click");
  $('.js-compose-text').text(`${tabTitle} ${tabUrl}`);
  mo.disconnect();
});
mo.observe($(".js-app.application.is-hidden").get(0), { attributes: true });
