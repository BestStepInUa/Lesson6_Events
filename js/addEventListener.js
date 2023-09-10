const singleBtn = document.querySelector("#single");
let singleBtnEventCounter = 0;

const handleClick = () => {    
    singleBtnEventCounter += 1;
    console.log(`Click event listener callback. It's ${singleBtnEventCounter} click`);
};

singleBtn.addEventListener("click", handleClick);

// ===============================================
const multiBtn = document.querySelector("#multiple");

const firstCallback = () => {
  console.log("First callback!");
};
const secondCallback = () => {
  console.log("Second callback!");
};
const thirdCallback = () => {
  console.log("Third callback!");
};

multiBtn.addEventListener("click", firstCallback);
multiBtn.addEventListener("click", secondCallback);
multiBtn.addEventListener("click", thirdCallback);