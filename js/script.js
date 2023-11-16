$(window).scroll(function() {
  if($(this).scrollTop() > 50) {
    $('#header2').addClass('act');
  } else {
    $('#header2').removeClass('act');
  }
});

$('#login').click(function() {
  $('#block').css({ display: 'block'});
});

$('#login2').click(function() {
  $('#block').css({ display: 'block'});
});


$('#cancle').click(function() {
  $('#block').css({ display: 'none'});
});


