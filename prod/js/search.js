
/**
*HTML Node IDs
*/
let MIN_PRICE_LABEL_ID = "minPrice";
let MAX_PRICE_LABEL_ID = "maxPrice";
let PRICE_FILTER_ID = "price-slider";
let BOOK_STORE_DIV_ID = "book-store";
let SEARCH_FORM_ID = "search_form";
let CURRENT_PRICE_FILTER_LABEL_ID = "currentPriceFilter"

var books_in_store = [
    {
        "titel": "Die Geschichte der Bienen",
        "Autor": "Lunde, Maja",
        "ISBN": "9783442717415",
        "Preis": "11 EUR",
        "Price": 11.00
    },
    {
        "titel": "Das Café am Rande der Welt",
        "Autor": "Streckley, John",
        "ISBN": "9783423209694",
        "Preis": "8,95 EUR",
        "Price": 8.95
    },
    {
        "titel": "Homo Deus",
        "Autor": "Harari, Yuval Noah",
        "ISBN": "9783406727863",
        "Preis": "14,95 EUR",
        "Price": 14.95
    },
    {
        "titel": "Der nasse Fisch",
        "Autor": "Kutscher, Volker",
        "ISBN": "9783462040227",
        "Preis": "12 EUR",
        "Price": 12.00
    },
    {
        "titel": "Das Gutshaus. Stürmische Zeiten",
        "Autor": "Jacobs, Anne",
        "ISBN": "9783734104886",
        "Preis": "10,99 EUR",
        "Price": 10.99
    },
    {
        "titel": "Das Leben ist zu kurz für später",
        "Autor": "Reinwarth, Alexandra",
        "ISBN": "9783868829167",
        "Preis": "16,99 EUR",
        "Price": 16.99
    },
    {
        "titel": "Der Trafikant",
        "Autor": "Seethaler, Robert",
        "ISBN": "9783036959092",
        "Preis": "12 EUR",
        "Price": 12.00
    },
    {
        "titel": "Die Frauen vom Löwenhof. Solveigs Versprechen",
        "Autor": "Bomann, Corina",
        "ISBN": "9783548289991",
        "Preis": "10 EUR",
        "Price": 10.00
    },
    {
        "titel": "Blut ist dicker als Glühwein",
        "Autor": "Bittrich, Dietmar (Hr.)",
        "ISBN": "9783499634253",
        "Preis": "10,99 EUR",
        "Price": 10.99
    },
    {
        "titel": "Passagier 23",
        "Autor": "Fitzek, Sebastian",
        "ISBN": "9783426510179",
        "Preis": "9,99 EUR",
        "Price": 9.99
    },
    {
        "titel": "Vom Ende der Einsamkeit",
        "Autor": "Wells, Benedict",
        "ISBN": "9783257244441",
        "Preis": "13 EUR",
        "Price": 13.00
    },
    {
        "titel": "Die Känguru-Apokryphen",
        "Autor": "Kling, Marc-Uwe",
        "ISBN": "9783548291956",
        "Preis": "9 EUR",
        "Price": 9.00
    }
];

div = document.getElementById(BOOK_STORE_DIV_ID);

var render_books = function(books){
  var store = ``;

  for(index in books){
    if(index % 3 == 0){
      store += `<div class="row">`;
      store += `<div class="col-lg-4 col-12">` + `<div class="card">`;
      store += `<img class="card-img-top" src="../assets/img/book-title.png">`;
      store += `<div class="card-body mh-6">` + `<h5 class="card-title">` + books[index].titel + `</h5></div>`;
      store += `<ul class="list-group list-group-flush">`;
      store += `<li class="list-group-item">` + books[index].Autor + `</li>`;
      store += `<li class="list-group-item">` + books[index].ISBN + `</li>`;
      store += `<li class="list-group-item">` + books[index].Preis + `</li>`;
      store += `</ul>`;
      store += `</div></div>`;
    }else if(index % 3 == 2){
      store += `<div class="col-lg-4 col-12">` + `<div class="card">`;
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
      store += `<div class="col-lg-4 col-12">` + `<div class="card">`;
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
  div.innerHTML = store;
};

render_books(books_in_store);

//price slider init
priceFilter = document.getElementById(PRICE_FILTER_ID);

/**
* This method will return a list containing all the book prices
* @return a List with all book prices
*/
var getPriceList = function(){
  res = [];
  for(bookIndex in books_in_store){
    curBook = books_in_store[bookIndex];
    res.push(curBook["Price"]);
  }
  return res;
}

/**
* This method will return the greatest number inside a list
* @param numbers which will be used to search the greatest number. Array must contain at least one element.
* @return the greatest number
*/
var getMax = function(numbers){
  res = numbers[0]

  for(numberIndex in numbers){
    if(numbers[numberIndex] > res){
      res = numbers[numberIndex];
    }
  }

  return res;
}

/**
* This method will find the smallest item inside a List
* @param numbers which will used for searching the lowest number. Array must contain at least one element.
* @return the lowest number
*/
var getMin = function(numbers){
  res = numbers[0]

  for(numberIndex in numbers){
    if(numbers[numberIndex] < res){
      res = numbers[numberIndex];
    }
  }

  return res;
}

/**
* This method will init the price slider
* During the initialisation  minimum and maximum price and labels will be set.
*/
var initPriceSlider = function(){
  priceList = getPriceList();
  priceLabel = document.getElementById(CURRENT_PRICE_FILTER_LABEL_ID);
  minPriceLabel = document.getElementById(MIN_PRICE_LABEL_ID);
  maxPriceLabel = document.getElementById(MAX_PRICE_LABEL_ID);

  minPrice = getMin(priceList);
  maxPrice = getMax(priceList);

  minPriceLabel.innerHTML = minPrice + "€";

  priceLabel.innerHTML = maxPrice + "€"
  priceFilter.setAttribute("min", minPrice);
  priceFilter.setAttribute("max", maxPrice);
  priceFilter.setAttribute("value", maxPrice);
}

initPriceSlider();

var priceFilterChanged = function(){
  priceLabel = document.getElementById(CURRENT_PRICE_FILTER_LABEL_ID);
  priceLabel.innerHTML = priceFilter.value + "€";

  filterBooks();
}
// lets filter it
input = document.getElementById(SEARCH_FORM_ID);

var filterBooks = function(event){
  keyword = input.value.toLowerCase();
  price = priceFilter.value;

  filtered_books = books_in_store.filter(function(book){
        bookPrice = book["Price"];
        if(bookPrice <= price){
          for(var key in book){
            if(key != "Price"){
              currentProperty = book[key].toLowerCase();
              if(currentProperty.indexOf(keyword) > -1){
                return true;
              }
            }
          }
        }
        return false;
  });

  render_books(filtered_books);
};

input.addEventListener('keyup', filterBooks);
