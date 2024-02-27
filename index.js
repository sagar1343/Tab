const contents = document.querySelectorAll(".content");
const tabs = document.querySelectorAll(".tabs");

tabs.forEach((tab) => tab.addEventListener("click", (e) => handleClick(e)));

function handleClick(e) {
  showContent(e.target.id);
  activeTab(e.target.id);
}

function showContent(id) {
  contents.forEach((content) => content.classList.add("d-none"));
  document.querySelector(`#content${id}`).classList.remove("d-none");
}
function activeTab(id) {
  tabs.forEach((tab) => tab.classList.remove("activeTab"));
  document.getElementById(id).classList.add("activeTab");
}

showContent(1);
activeTab(1);
