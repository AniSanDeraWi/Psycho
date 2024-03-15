let isAvailable = true
let checkboxes = document.querySelectorAll('.checkbox');

// Загружаем состояние чекбоксов при загрузке страницы
window.addEventListener('load', function() {
  checkboxes.forEach(function(checkbox) {
    // Проверяем, сохранено ли состояние флажка в localStorage
    if (localStorage.getItem('checkboxState') === 'true') {
      checkbox.checked = true; // Если да, устанавливаем состояние флажка как true
    }
  });
});

// Добавляем обработчик события изменения состояния флажков
checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    // Сохраняем текущее состояние флажка в localStorage
    localStorage.setItem('checkboxState', checkbox.checked);
  });
});
let catalogData = [
    {isAvailable: true, isSpecial: true},
    {isAvailable: true, isSpecial: false},
    {isAvailable: true, isSpecial: false},
    {isAvailable: true, isSpecial: false},
    {isAvailable: true, isSpecial: false},   
    {isAvailable: true, isSpecial: false},
    {isAvailable: true, isSpecial: false},
    {isAvailable: true, isSpecial: true},
    {isAvailable: false, isSpecial: false},
    {isAvailable: false, isSpecial: false},
    {isAvailable: true, isSpecial: false},
    {isAvailable: true, isSpecial: false}
]
let updateCards = function(products){
    let elements = document.querySelectorAll('.headBlock')
    for(let i = 0; i < catalogData.length; i++){
        let availablilityClass = 'product--available'
        let element = elements[i]
        let product = products[i]
        if(!product.isAvailable){
            availablilityClass = 'product--unavailable'
        }
        if(product.isSpecial){
            availablilityClass = 'product--special'
        }
        element.classList.add(availablilityClass)
    }
}
updateCards(catalogData)
$(document).ready(function() {
    function showNextImage() {
        var currentImage = $('.gallery-image:visible');
        var nextImage = currentImage.next();

        if (nextImage.length) {
            currentImage.hide("slide", { direction: "left" }, 700);
            nextImage.show("slide", { direction: "right" }, 700);
        } else {
            $('.gallery-image:first').show("slide", { direction: "right" }, 1000);
        }
    }

    function showPrevImage() {
        var currentImage = $('.gallery-image:visible');
        var prevImage = currentImage.prev();

        if (prevImage.length) {
            currentImage.hide("slide", { direction: "right" }, 700);
            prevImage.show("slide", { direction: "left" }, 700);
        } else {
            $('.gallery-image:last').show("slide", { direction: "left" }, 1000);
        }
    }

    $('.next-button').on('click', showNextImage);

    $('.prev-button').on('click', showPrevImage);
});

$(document).ready(function(){
    $('.nav').hide()
    $('.cookie-button').click(function(){
        $(".cookies").fadeOut(600);
    })
    $(".wrapper").click(function(){
        $('.nav').slideToggle(500)
    });
});