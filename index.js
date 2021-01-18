const endpoint = "https://trello-clone-ppm.herokuapp.com";
var list = [];
const listWrapper = document.getElementById("wrapper");

window.onload = () => {
  fetchData();
};
const fetchData = () => {
  fetch(endpoint + "/list")
    .then((res) => res.json())
    .then((data) => {
      list = data;
      console.log(data);
      const allListHtmlStr = list.map((l) => toListHtmlString(l)).join("");
      listWrapper.innerHTML = allListHtmlStr;
    });
};

const toListHtmlString = (l) => {
  return `
  <div class="card m-3">
        <div class="d-flex ml-2 align-items-center justify-content-between">
          <h5 class="pt-2 ml-2" style="font-size: 14px">${l.title}</h5>
          <button class="btn btn-sm text-muted m-1">
            <i class="far fa-ellipsis-h"></i>
          </button>
        </div>
        ${l.cards && l.cards.map((card) => toCardHtmlString(card)).join("")}
        <div class="d-flex m-2">
          <button class="addCardBtn btn">
            <i class="fal fa-plus"></i>&nbsp;Add another Card
          </button>
          <button class="btn">
          <i class="fas fa-clipboard-list"></i>
          </button>
        </div>
      </div>
  `;
};

const toCardHtmlString = (card) => {
  return `
  <div class="card-body m-1">
          <p class="m-1">${card.title}</p>
          ${
            card.description
              ? `
          <button class="btn btn-sm">
            <i class="fal fa-align-left"></i>
          </button>
          `
              : ""
          }
          <button class="btn btn-sm">
            <i class="fal fa-paperclip"></i>&nbsp;1
          </button>
          <button class="btn btn-sm">
            <i class="fa fa-github"></i>&nbsp;1
          </button>
        </div>
  `;
};
