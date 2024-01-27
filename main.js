//Javascript for employee list
const reviews = [
  {
    id: 1,
    name: 'Leonaydo DeCap',
    job: 'pilot',
    img: 'https://pyxis.nymag.com/v1/imgs/e3e/1b2/c417830c99d64d34a6396833fbf764a7f5-12-leonardo-dicaprio.rsquare.w330.jpg',
    text: 'Leonaydo is one of our main pilots that has been a part of our team for 5 years. He likes the freedom he has when it comes to travelling.'
  },
  {
    id: 2,
    name: 'Shaquille O Nile',
    job: 'flight attendant',
    img: 'https://cdn.justjared.com/wp-content/uploads/headlines/2022/10/popular-celebs-14.jpg',
    text: 'Shaq has been a part of the team for the longest time working as a flight attendant. He has been in service for 7 years and thoroughly enjoyes the job that he is in.'
  },
  {
    id: 3,
    name: 'The Boulder',
    job: 'security',
    img: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Dwayne_%22The_Rock%22_Johnson_Visits_the_Pentagon_%2841%29_%28cropped%29.jpg',
    text: 'Dwayne works in the security of the airport. He is often the one that you see at the gate before entering the plane. He is very passionate about his job and takes it very seriously.',
  },
  {
    id: 4,
    name: 'Kevin SMart',
    job: 'baggage unloader',
    img: 'https://www.thefamouspeople.com/profiles/thumbs/kevin-hart.jpg',
    text: 'Kevin works in the baggage area and takes great care of the luggage on the planes.',
  },
];
// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

//added like and dislike feature
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count+=2;
    } 
    else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "white";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "black";
    }
    value.textContent = count;
  });
});


//background color change
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  // console.log(hexColor);


  document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}


//random buttom
function myFunction() {
  alert("hi mr rai, can i get good mark pls");
}