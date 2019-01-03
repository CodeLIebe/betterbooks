var books_in_store_old = [
  'Goku',
  'Naruto',
  'Ichigo',
  'Flash',
  'Batman',
  'Sherlock Holmes',
  'Khaleesi',
  'Steve Fox'
];

var books_in_store = [

    {
        "titel": "Die Geschichte der Bienen",
        "Autor": "Lunde, Maja",
        "ISBN": "9783442717415",
        "Preis": "11 EUR"
    },
    {
        "titel": "Das Café am Rande der Welt",
        "Autor": "Streckley, John",
        "ISBN": "9783423209694",
        "Preis": "8,95 EUR"
    },
    {
        "titel": "Homo Deus",
        "Autor": "Harari, Yuval Noah",
        "ISBN": "9783406727863",
        "Preis": "14,95 EUR"
    },
    {
        "titel": "Der nasse Fisch",
        "Autor": "Kutscher, Volker",
        "ISBN": "9783462040227",
        "Preis": "12 EUR"
    },
    {
        "titel": "Das Gutshaus. Stürmische Zeiten",
        "Autor": "Jacobs, Anne",
        "ISBN": "9783734104886",
        "Preis": "10,99 EUR"
    },
    {
        "titel": "Das Leben ist zu kurz für später",
        "Autor": "Reinwarth, Alexandra",
        "ISBN": "9783868829167",
        "Preis": "16,99 EUR"
    },
    {
        "titel": "Der Trafikant",
        "Autor": "Seethaler, Robert",
        "ISBN": "9783036959092",
        "Preis": "12 EUR"
    },
    {
        "titel": "Die Frauen vom Löwenhof. Solveigs Versprechen",
        "Autor": "Bomann, Corina",
        "ISBN": "9783548289991",
        "Preis": "10 EUR"
    },
    {
        "titel": "Blut ist dicker als Glühwein",
        "Autor": "Bittrich, Dietmar (Hr.)",
        "ISBN": "9783499634253",
        "Preis": "10,99 EUR"
    },
    {
        "titel": "Passagier 23",
        "Autor": "Fitzek, Sebastian",
        "ISBN": "9783426510179",
        "Preis": "9,99 EUR"
    },
    {
        "titel": "Vom Ende der Einsamkeit",
        "Autor": "Wells, Benedict",
        "ISBN": "9783257244441",
        "Preis": "13 EUR"
    },
    {
        "titel": "Die Känguru-Apokryphen",
        "Autor": "Kling, Marc-Uwe",
        "ISBN": "9783548291956",
        "Preis": "9 EUR"
    }
];

ul = document.getElementById("book-store");

var render_books = function(books){
  var store = ``;

  for(index in books){
    if(index % 3 == 0){
      store += `<div class="row">`;
      store += `<div class="col">` + `<div class="card">`;
      store += `<img class="card-img-top" src="../assets/img/book-title.png">`;
      store += `<div class="card-body mh-6">` + `<h5 class="card-title">` + books[index].titel + `</h5></div>`;
      store += `<ul class="list-group list-group-flush">`;
      store += `<li class="list-group-item">` + books[index].Autor + `</li>`;
      store += `<li class="list-group-item">` + books[index].ISBN + `</li>`;
      store += `<li class="list-group-item">` + books[index].Preis + `</li>`;
      store += `</ul>`;
      store += `</div></div>`;
    }else if(index % 3 == 2){
      store += `<div class="col">` + `<div class="card">`;
      store += `<img class="card-img-top" src="../assets/img/book-title.png">`;
      store += `<div class="card-body mh-6">` + `<h5 class="card-title">` + books[index].titel + `</h5></div>`;
      store += `<ul class="list-group list-group-flush">`;
      store += `<li class="list-group-item">` + books[index].Autor + `</li>`;
      store += `<li class="list-group-item">` + books[index].ISBN + `</li>`;
      store += `<li class="list-group-item">` + books[index].Preis + `</li>`;
      store += `</ul>`;
      store += `</div></div>`;
      store += `</div> <!-- end row --->`;
    } else {
      store += `<div class="col">` + `<div class="card">`;
      store += `<img class="card-img-top" src="../assets/img/book-title.png">`;
      store += `<div class="card-body mh-6">` + `<h5 class="card-title">` + books[index].titel + `</h5></div>`;
      store += `<ul class="list-group list-group-flush">`;
      store += `<li class="list-group-item">` + books[index].Autor + `</li>`;
      store += `<li class="list-group-item">` + books[index].ISBN + `</li>`;
      store += `<li class="list-group-item">` + books[index].Preis + `</li>`;
      store += `</ul>`;
      store += `</div></div>`;
    }
  }
  ul.innerHTML = store;
};

render_books(books_in_store);

// lets filters it
input = document.getElementById('search_form');

var filterBooks = function(event){
  keyword = input.value.toLowerCase();
  filtered_books = books_in_store.filter(function(book){
        book = book.titel.toLowerCase();
       return book.indexOf(keyword) > -1;
  });

  render_books(filtered_books);
};

input.addEventListener('keyup', filterBooks);
