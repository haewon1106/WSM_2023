// URL book에 해당하는 parameter 값 읽어오기(string)
let url = new URL(location.href);
let book = url.searchParams.get("book");
//book이 null이면 책장으로 가기
if(book === null){
    location.href = 'index.html';
}

console.log(`book: ${book}`);

// book값(string) -> bookId(number) 변환하기 : "3" -> 3
// let bookId = parseInt(book); //number
// let bookId = book * 1; //number (쓰지않기!)
let bookId = Number(book);
console.log(`bookId: ${bookId} type: ${typeof bookId}`); //number 3

// book 를 돌면서 bookId(number)와 같은 id값의 책을 가져오자
let bookData;
for(let bookOne of books){
    if(bookId === bookOne.id){  //=== : 값이랑 자료형이 모두 동일할 때
        bookData = bookOne;
        break;
    }

}
// 제목 보여주자
let title = bookData.title;
console.log(title);
// console.log(bookData["title"]);


let author = bookData.author;
let publisher = bookData.publisher;
let bookImage = bookData.bookImage;
console.log(title, author, publisher, bookImage);

// HTML 요소 -> js 변수
// js 변수.innerHTML

const titleDiv = document.getElementsByClassName("title")[1];
titleDiv.innerHTML = title;

const authorDiv = document.getElementsByClassName("author")[1];
authorDiv.innerHTML = author;

const publisherDiv = document.getElementsByClassName("publisher")[1];
publisherDiv.innerHTML = publisher;

const bookImageDiv = document.getElementsByClassName("book-img")[0];
bookImageDiv.innerHTML = `<img src="${bookImage}"/>`;

// 읽은 날짜 : 임시로 오늘의 날짜 표시
let now = new Date();
// 오늘의 날짜 구하기
let year = now.getFullYear();
let month = now.getMonth() + 1;
let date = now.getDate();

// 사람이 알아보는 형식으로 바꾸기
let dateString = `${year}년 ${month}월 ${date}일`;
// HTML -> js
const readDataDiv = document.getElementsByClassName("read-date")[1];
//오늘의 날짜 값 넣기