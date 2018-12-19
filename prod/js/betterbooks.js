var storage = window.sessionStorage
//make dropup parent clickable
function clickDropdown() {
    if ($('.navbar-toggler').css("display") === "none") {
        $('.dropdown-toggle').click(function () {
            window.location.href = $(this).attr('href');
            return false;
        });
    }
}

$(document).ready(function () {
    clickDropdown();
    $(window).resize(function () {
        clickDropdown();
    });
});


//close quiz when clicked in overlay
$("#modal-wrapper").on('click', function () {
   hideQuiz();
}).children().on('click', function (e) {
    e.stopPropagation();
});

// This method changes the theme
function changeTheme(stylePath) {
  var selectedTheme = storage.getItem('Theme')
  if (selectedTheme === "Dark") {
      storage.setItem('Theme', "Light")
  }else{
      storage.setItem('Theme', "Dark")
  }
  console.log(selectedTheme);
  loadTheme(stylePath)
}

function loadTheme(stylePath) {

  var selectedTheme = storage.getItem('Theme')
  if(selectedTheme === "Dark")
  {
      // Change title
      document.getElementById("themeButton").innerHTML = "Light-theme"
      // Show dark theme
      document.getElementById("theme").href= stylePath + "betterbooks_dark.css";
      // Change the logo
      document.getElementById("logo").src= "assets/img/logo_light.png";

  }
  else
  {
      // Change title
      document.getElementById("themeButton").innerHTML = "Dark-theme"
      // Show dark theme
      document.getElementById("theme").href= stylePath + "betterbooks_light.css";
      // Change the logo
      document.getElementById("logo").src= "assets/img/logo.png";

  }
  console.log(document.getElementById("logo").src);
}
