function show_sidebar() {
  const sidebar = document.querySelector(".sidebar ul");
  const logo = document.querySelector(".logo");
  sidebar.style.display = "flex";
}
// For the menu part
function hide_sidebar() {
  const sidebar = document.querySelector(".sidebar ul");
  sidebar.style.display = "none";
}

// Get the search box element
const searchBox = document.querySelector(".search-box");

searchBox.addEventListener("input", function () {
  const searchQuery = this.value.toLowerCase();

  const products = document.querySelectorAll(".product");

  products.forEach(function (product) {
    const productName = product.querySelector("h3").textContent.toLowerCase();

    if (productName.includes(searchQuery)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
});
