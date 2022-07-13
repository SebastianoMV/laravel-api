require('./bootstrap');




document.getElementById('formCreate').addEventListener('submit', function(event) {



  const titolo = document.forms["myForm"]["title"].value;

  if (titolo == "") {
    event.preventDefault();
    alert("Title non può essere vuoto");
  }
  event.return
  Value = false;

});

