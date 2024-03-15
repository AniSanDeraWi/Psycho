let cardsData = [
    {
        imgUrl: '../img/zoshit.jpg',
        text: 'ASUS DUAL GeForce RTX 4070 SUPER OC Edition',
    },
    {
        imgUrl: '../img/book.jpg',
        text: 'MSI GeForce RTX 4090 Gaming X Slim 24G',
    },
    {
        imgUrl: '../img/note.jpg',
        text: 'ASUS Cerberus GeForce GTX 1050 Ti OC Edition',
    },
    {
        imgUrl: '../img/printer.jpg',
        text: 'GIGABYTE GeForce RTX 4060 Ti GAMING OC 16G',
    },
    {
        imgUrl: '../img/tekstovi.jpg',
        text: 'Asus Dual GeForce GTX 1660 Super 6GB OC EVO',
    },
    {
        imgUrl: '../img/concenrn.jpg',
        text: 'MSI GeForce RTX 3060 Ti GAMING X TRIO 8GD6X',
    }
]
let makeElement = function(tagName, className, text){
    let element = document.querySelector(tagName)
    element.classList.add(className)
    if(text){
        element.textContent = text
    }
    return element
}
let createCard = function(card){
    let listItem = makeElement('div', 'card-style')
    let title = makeElement('li', 'card_title', card.text)
    listItem.appendChild(title)
    let pic = makeElement('img', 'card_image')
    pic.src = card.imgUrl
    listItem.appendChild(pic)
    return listItem
}
let cardList = document.querySelector('main')
for(let i = 0; i <cardsData.length; i++){
    let cardItem = createCard(cardsData[i])
    cardList.appendChild(cardItem)
}