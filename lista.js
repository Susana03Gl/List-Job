import dataJson from "/data.json" assert { type: "json" };
const Contlist = document.querySelector(".contlist"),
  filter = document.querySelector(".filter");

console.log(dataJson);

const info = dataJson

  .map((el) => {
    return `<div id="${el.languages.map((el) => {
      return `${el}`;
    })}" class="box">
    <div class="boxduo">
    <div class="box1">
     <img  class="img"src=${el.logo}>
    </div>
    <div class="box2">  
      <div class="line1"> <p>${el.company}</p> </div>
     <div class="line2">${el.position}</div>
     <div class="line3"><p>${el.postedAt}</p><p>${el.contract}</p> <p>${
      el.location
    }</p> </div>
     </div>
     </div>
     <div class="box3">
     <p id="${el.role}" class="p btn">${el.role}</p><p id="${
      el.level
    }" class="p btn">${el.level}</p> <p>${el.languages
      .map((el) => {
        return `<p id="${el}" class="p btn" >${el}</p>`;
      })
      .join(" ")}</p></div>
     </div>
     <div> </div>
    
    `;
  })
  .join(" ");
Contlist.innerHTML = info;
const box = document.querySelector(".box"),
  arraydelen = [];

Contlist.addEventListener("click", (e) => {
  if (e.target.classList[1] == "btn") {
    filter.classList.add("flex");
    arraydelen.push(e.target.id);

    filter.innerHTML = `<div class="divfilter" ><p class="filtertag" >${e.target.id} </p> <div class="delete"></div> </div>`;
  }
});
