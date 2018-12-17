var darkThemeSelected = false;

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

function toggle() {
  darkThemeSelected = !darkThemeSelected
  if(darkThemeSelected)
  {
      alert("Dark");
      // Show dark theme
      document.getElementById("theme").href="style/betterbooks_dark.css";
  }
  else
  {
      alert("Light");
      // Show dark theme
      document.getElementById("theme").href="style/betterbooks_light.css";
  }
}
$("#theme-switch123").on('change', function() {
    if ($(this).is(':checked')) {
        darkThemeSelected = $(this).is(':checked');
        document.getElementById("theme").href="style/betterbooks_light.css";
        //alert(darkThemeSelected);// To verify
    }
    else {
       darkThemeSelected = $(this).is(':checked');
       document.getElementById("theme").href="style/betterbooks_dark.css";
       //alert(darkThemeSelected);// To verify
    }
});


$('#theme-switch123').click(function(){
$('.tab').hide();
darkThemeSelected = !darkThemeSelected
darkThemeSelected = !darkThemeSelected
if(darkThemeSelected)
{
    alert("Dark");
    // Show dark theme
    document.getElementById("theme").href="style/betterbooks_dark.css";
}
else
{
    alert("Light");
    // Show dark theme
    document.getElementById("theme").href="style/betterbooks_light.css";
}
//alert($('#myonoffswitch').attr('checked'));
});
