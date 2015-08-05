$("#questionnaire").submit(function( event ) {
  event.preventDefault();

  name = $('[name="name"]').val();
  console.log(name);

  teammates = document.getElementsByName('teammates');
  console.log(teammates[1].value);

  player = [teammates[0].value, teammates[1].value, teammates[2].value];
  console.log(player);

  Cookies.set('name', name);

  Cookies.set('teammates1', player[0]);
  Cookies.set('teammates2', player[1]);
  Cookies.set('teammates3', player[2]);

  location.href='result.html';
});
