$('button').click(() => {
  $.ajax({
    type: 'GET',
    url: 'https://jsonplaceholder.typicode.com/users',
    success: function(orders) {
      console.log(orders);
      setTimeout(() => {
        $.each(orders, function(i, order) {
          $('h1').append(`<h3>${order.name}</h3>`);
        });
      }, 5000);
    }
  });
});
