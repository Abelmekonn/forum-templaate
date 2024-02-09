const pagesLink = document.querySelector(".pages");
const pageDropdown = document.getElementById("page_dropdown");

pagesLink.addEventListener("mouseover", () => {
  pageDropdown.classList.remove("d-none");
});

pagesLink.addEventListener("mouseout", () => {
  pageDropdown.classList.add("d-none");
});
