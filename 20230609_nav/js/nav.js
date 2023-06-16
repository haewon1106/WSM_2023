// function sayHello(){
//     return alert("안녕");
// }
// sayHello();

// 1. html -> js
// 햄버거 메뉴 -> navToggleDiv
// 햄버거메뉴의 icon -> navToggleI
// nav-list -> navListul

// const navToggleDiv = document.getElementById("nav_toggle");
// console.log(navToggleDiv);
// console.log(nav_toggle);

const navToggleI = nav_toggle.getElementsByTagName("i")[0];
const navListul = document.getElementsByClassName("nav-list")[0];


// 2. Event handling
// 햄버거메뉴 클릭하면, 햄버거메뉴 icon <-> x로
// 햄버거메뉴 클릭하면, .nav-list에 .show-nav 보여주기 <-> 안보여주기
nav_toggle.onclick = () => alert("안녕"); //얘는 바로 실행 안됨
// nav_toggle.onclick = alert("안녕"); //얘는 바로 실행, 틀린 코드! 시험문제 냄

//..................
/// html -> js
// id
// const navToggleDiv = document.getElementById("nav_toggle");
// nav_toggle;

//tag
// const navToggleDiv = document.getElementsByTagName("div")[0];

//querySelector, querySelectorAll
// const navToggleDiv = document.querySelector("#nav_toggle");
// const navToggleDiv = document.querySelector(".nav-toggle")[0];
// const navToggleDiv = document.querySelector("div")[0];
