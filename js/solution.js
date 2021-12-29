// получить все аттрибуты ul

let listUl = document.getElementById("ulId");
let UlAttributes = listUl.attributes;
console.log(UlAttributes);

// перебрать их (for..of) и записать значение каждого аттрибута в массив — вывсести этот массив в консоль
let arrOfAttributes = [];

for (let attribute of UlAttributes) {
  arrOfAttributes.push(attribute.value);
}
console.log(arrOfAttributes);

// Так-же записать в отдельный массив каждое имя аттрибута — вывести массив в консоль
let attributeNames = listUl.getAttributeNames();
console.log(attributeNames);

// С помощью JS изменить текст в последнем теге li на — «Привет меня зовут » + Ваше имя
listUl.lastElementChild.textContent = "Привет меня зовут Алла";

// Добавить первому элементу li аттрибут ‘data-my-name‘ со значением в котором будет лежать Ваше имя
listUl.firstElementChild.setAttribute("data-my-name", "Alla");

// Удалить у тега ul аттрибут ‘data-dog-tail‘

listUl.removeAttribute("data-dog-tail");
