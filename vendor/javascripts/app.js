$(document).ready(function(){
  $('iframe[src*="youtube"]').parent().fitVids();

  // url parts
  var path = window.location.href.split('/');

  // blog typography
  if (path[3] === 'blog') {
    $('.post-content > h1').addClass('mdl-typography--display-1 mdl-typography--font-thin');
    $('.post-content > h2').addClass('mdl-typography--display-2 mdl-typography--font-thin');
    $('.post-content > h3').addClass('mdl-typography--display-3 mdl-typography--font-thin');
    $('.post-content > h4').addClass('mdl-typography--display-4 mdl-typography--font-thin');
    $('.post-content > h5').addClass('mdl-typography--display-5 mdl-typography--font-thin');
    $('.post-content > h6').addClass('mdl-typography--display-6 mdl-typography--font-thin');
    $('.post-content > p, .post-content > ul > li, .post-content > p > strong').addClass('mdl-typography--headline mdl-typography--font-thin');
  }
});