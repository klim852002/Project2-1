$(document).ready(function () {
  console.log('good to go')

  $('#editUser').click(function(e) {
    e.preventDefault();
    alert('am here at editUser')
  window.location = '/edit'
  })

  $('#addAsset').click(function(e) {
    e.preventDefault();
    alert('am here at addAsset')
  window.location = '/assets/add'
  })


  $('#modifyUser').click(function(e) {
    e.preventDefault();
    // alert('am here at modify')
    var formdata = $('.editUser').serializeArray()
    var teamElement = $('.editUser');
    // var teamUrl = teamElement.attr('href');

    console.log(teamElement)
    // console.log('i am teamurl ' + teamUrl)
    console.log($('#profession').val())
    console.log($('#Name').val())
    console.log(formdata);
    $.ajax({
      method: 'put',
      url: '/edit',
      data: formdata
    }).done(function(data) {
      // get data returned from the PUT route
      console.log(data);
      alert(data)
      // do stuff when the PUT action is complete
      teamElement.remove();
      window.location = '/profile'
      // or, you can redirect to another page
    });
  });

})

  $('#deleteAsset').click(function(e) {
    e.preventDefault();
    alert('am here at delete asset')
    var formdata = $('.editAssetsform').serializeArray()
    var teamElement = $('.editUser');
    // var teamUrl = teamElement.attr('href');

    // console.log(teamElement)
    // // console.log('i am teamurl ' + teamUrl)
    // console.log($('#profession').val())
    // console.log($('#Name').val())
    console.log(formdata);
    console.log(window.location.href)
    $.ajax({
      method: 'delete',
      url: window.location.href,
      data: formdata
    }).done(function(data) {
      // get data returned from the PUT route
      console.log(data);
      alert(data)
      // do stuff when the PUT action is complete
      teamElement.remove();
      window.location = '/profile'
      // or, you can redirect to another page
    });
  });


  $('#editAsset').click(function(e) {
    e.preventDefault();
    alert('am here at edit asset')
    var formdata = $('.editAssetsform').serializeArray()
    var teamElement = $('.editUser');
    // var teamUrl = teamElement.attr('href');

    // console.log(teamElement)
    // // console.log('i am teamurl ' + teamUrl)
    // console.log($('#profession').val())
    // console.log($('#Name').val())
    console.log(formdata);
    console.log(window.location.href)
    $.ajax({
      method: 'put',
      url: window.location.href,
      data: formdata
    }).done(function(data) {
      // get data returned from the PUT route
      console.log(data);
      alert(data)
      // do stuff when the PUT action is complete
      teamElement.remove();
      window.location = '/profile'
      // or, you can redirect to another page
    });
  });
//
//
//
// })


// original working scripts
  // $('.editUser').on('submit', function(e) {
  //   e.preventDefault();
  //   alert('am here')
  //   var formdata = $(this).serializeArray()
  //   var teamElement = $(this);
  //   var teamUrl = teamElement.attr('href');
  //   // var teamData = teamElement.serialize();
  //   // console.log(teamData);S
  //   console.log(teamElement)
  //   console.log('i am teamurl ' + teamUrl)
  //   console.log($('#profession').val())
  //   console.log($('#Name').val())
  //   console.log(formdata);
  //   $.ajax({
  //     method: 'delete',
  //     url: teamUrl,
  //     data: formdata
  //   }).done(function(data) {
  //     // get data returned from the PUT route
  //     console.log(data);
  //     alert(data)
  //     // do stuff when the PUT action is complete
  //     teamElement.remove();
  //     // window.location = '/users'
  //     // or, you can redirect to another page
  //   });
  // });
