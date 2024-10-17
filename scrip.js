// const abs =document.getElementById('blur');
// const bs=
function myFunction() {
    var blur=document.getElementById("blur");
    blur.classList.toggle("active");
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    // var popup = document.getElementById("myPopup");
    // popup.classList.toggle("show");

  }
  function myFunctio() {

    var popup = document.getElementById("myPopu");
    popup.classList.toggle("show");
 

  }
  function myFunctio1() {

    var popup = document.getElementById("myPopu1");
    popup.classList.toggle("show");
  }

  function myFunctio2() {
    var popup = document.getElementsByClassName("Popup");
        popup.classList.remove("show");
    
  }

 

  document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    
    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();
        
    
        const recipes = document.querySelectorAll('.menu_card');
        
        recipes.forEach(function (recipe) {
            const recipeName = recipe.getAttribute('data-search').toLowerCase();
            const isMatch = recipeName.includes(searchTerm);

            if (isMatch) {
                recipe.style.display = 'block';
            } else {
                recipe.style.display = 'none';
            }
        });
    });
});


