const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const blurs = document.querySelector("#blur");
const body = document.querySelector("body");
const contentBar = document.getElementById("content-bar");
const toggle = document.getElementById("toggle");

let clrBtn = document.querySelector(".clr-btn");
let modalToggle = document.querySelector(".modal-close-btn");
let modalContent = document.querySelector(".modal-reward-content");
let darkBtn = document.querySelector(".dark-btn");
let bookmark = document.querySelector(".bookmark");
let book = document.querySelector(".book");
let button = document.querySelectorAll("#select");

let pledgeReward = document.querySelectorAll("#modal");
let modalList = document.querySelectorAll(".modal-reward-list");
let enterPledge = document.querySelectorAll(".enter-pledge-reward");
let modalSubmit = document.querySelectorAll("#submit-modal-reward");
let successPledge = document.querySelector(".success-pledge");
let successExitBtn = document.querySelector("#success-exit");
let inputNumber = document.querySelectorAll("input[type=number]");
console.log(inputNumber);

// inputNumber.forEach(input => {
//     if(input == "") {
//         window.alert("Please input a number")
//     }
// })

successExitBtn.addEventListener("click", function () {
  successPledge.classList.remove("show");
  document
    .querySelector(".modal-wrapper")
    .classList.remove("modal-wrapper-show");
});
modalSubmit.forEach((buttons) => {
  buttons.addEventListener("click", function () {
    successPledge.classList.toggle("show");
    modalContent.classList.remove("modal-reward-content-show");
    document
      .querySelector(".modal-wrapper")
      .classList.add("modal-wrapper-show");
    body.classList.remove("project-lock");
  });
});

button.forEach((buttons) =>
  buttons.addEventListener("click", function () {
    openToggle();
  })
);

// hamburger menu
hamburger.addEventListener("click", function () {
  body.classList.toggle("body-lock");
  blurs.classList.toggle("body-shadow");
  contentBar.classList.toggle("menu_show");
  hamburger.classList.toggle("hamburger-transform");
  book.classList.toggle("cyan-btn");
});

// Back this project button

clrBtn.addEventListener("click", openToggle);

function openToggle() {
  modalContent.classList.toggle("modal-reward-content-show");
  document
    .querySelector(".modal-wrapper")
    .classList.toggle("modal-wrapper-show");
  body.classList.toggle("project-lock");
}

modalToggle.addEventListener("click", closeToggle);

function closeToggle() {
  if (this.classList.contains("modal-reward-content")) {
    modalToggle.remove(openToggle());
  } else {
    openToggle();
  }
}

// bookmark clicked

darkBtn.addEventListener("click", bookmarkBtn);

function bookmarkBtn() {
  this.classList.toggle("cyan-btn");
  if (this.classList.contains("cyan-btn")) {
    book.textContent = "Bookmarked";
    console.log("Bookmarked");
  } else {
    book.textContent = "Bookmark";
    console.log("Bookmark");
  }
}

// function bookMarked() {
//     let bookmark = "Bookmarked"
//     if(darkBtn.matches('.dark-btn')) {

//     } else {
//         console.log('false')
//     }
// }

// bookMarked()
// remove the mobile navigation style when toggling width: 600px above
function resizeListener() {
  if (window.innerWidth >= 600) {
    body.classList.remove("body-lock");
    blurs.classList.remove("body-shadow");
    contentBar.classList.remove("menu_show");
    hamburger.classList.remove("hamburger-transform");
  } else {
    // console.log(innerWidth)
  }
}
window.addEventListener("resize", resizeListener);

for (let i = 0; i < pledgeReward.length; i++) {
  pledgeReward[i].addEventListener("click", (e) => {
    clearBorder();

    modalList[i].classList.add("active");
    console.log(e.path[3]);
    enterPledge[i].classList.add("show");
  });
}

function clearBorder() {
  for (let i = 0; i < pledgeReward.length; i++) {
    modalList[i].classList.remove("active");
    enterPledge[i].classList.remove("show");
  }
}

//     for(let i = 0; i < modalList.length; i++) {
//         console.log(modalList[i])
//     }
// let enterPledge = document.querySelector(".enter-pledge-reward")

//     for (let radio of pledgeReward) {
//     radio.addEventListener('click', function (){
//             if (!radio.checked) {
//             console.log('false')
//        } else {
//         console.log('true')
//         modalList.classList.add("active")
//         enterPledge.classList.add("show")
//     }
//     })

//         console.log(radio.checked)
//     }

//  pledgeReward.forEach(radio => radio.addEventListener('click', function () {
//         if (radio.checked == true) {
//             modalRewardContainer.forEach(container => {
//                 if(container.classList.contains("active")) {
//                     this.classList.add("acitve")
//                 } else {
//                     this.classList.re("active")
//                 }
//             })
//         }
// if (checked){
//     console.log('checked')
// } else {
//     console.log('unchecked')
// }
//     }))

// //  let pledgeReward = document.querySelectorAll("#modal")
// const modalRewardContainer = document.querySelectorAll(".modal-reward-container > *")

// modalRadio.forEach(radio => radio.addEventListener('click', function() {
//     let nextSibling = this.nextSibling;
// console.log(nextSibling)
// }))
// radio.addEventListener('click', function(){
//     for (let i = 0; i < modalRewardContainer.length - 3 ; i++) {
//      if(this.classList.contains("active") && radio.checked) {

//         console.log('true')
//      } else {
//         console.log('false')
//         modalRewardContainer[0].classList.add("active")
//      }
//     }

// })
