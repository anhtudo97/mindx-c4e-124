// Get element from DOM
// const h1Element = document.getElementsByTagName("h1");
const h1Element = document.getElementsByClassName("h1-class"); // => return array
const h1Id = document.getElementById("h1-id");

// return the first
const h1QuerySelect = document.querySelector(".h1-class");

// return array
const h1QuerySelectAll = document.querySelectorAll(".h1-class");

console.log(h1Element);
console.log(h1Id);
console.log("h1 query selector", h1QuerySelect);
console.log("h1 query selectorall ", h1QuerySelectAll);

h1QuerySelect.innerHTML = "anhtu";
h1QuerySelect.classList.add("abc");
h1QuerySelect.addEventListener("mouseover", function() {
    console.log("Mình lướt qua đời nhau");
});

console.log("h1 query selector", h1QuerySelect);

// Button
const btnSearch = document.querySelector(".btn-search");
btnSearch.addEventListener("click", () => {
    console.log("clicked");
});
btnSearch.addEventListener("mouseover", () => {
    console.log("mouseovered");
});

// Nhập vào 1 mảng thông tin các bạn học viên sau đó:
// - Tìm ra người có số tuổi cao nhất
// - Tìm ra người có địa chỉ ở Hà nội
// - Tìm ra người có điểm đầu vào cao nhất
// - Sắp xếp các học viên theo chiều giảm dần của tên