// // Get element from DOM
// // const h1Element = document.getElementsByTagName("h1");
// const h1Element = document.getElementsByClassName("h1-class"); // => return array
// const h1Id = document.getElementById("h1-id");

// // return the first
// const h1QuerySelect = document.querySelector(".h1-class");

// // return array
// const h1QuerySelectAll = document.querySelectorAll(".h1-class");

// console.log(h1Element);
// console.log(h1Id);
// console.log("h1 query selector", h1QuerySelect);
// console.log("h1 query selectorall ", h1QuerySelectAll);
// const valueOfInput =
//     h1QuerySelect.innerHTML = "anhtu";
// console.log(h1QuerySelect.classList);
// h1QuerySelect.classList.add("abc");
// h1QuerySelect.addEventListener("mouseover", function() {
//     console.log("Mình lướt qua đời nhau");
// });

// console.log("h1 query selector", h1QuerySelect);

// // Button
// const btnSearch = document.querySelector(".btn-search");
// btnSearch.addEventListener("click", () => {
//     console.log("clicked");
// });
// btnSearch.addEventListener("mouseover", () => {
//     console.log("mouseovered");
// });

// Nhập vào 1 mảng thông tin các bạn học viên sau đó:
const students = [{
        name: "a",
        age: 12,
        address: "Ha noi",
        score: 9,
    },
    {
        name: "b",
        age: 23,
        address: "Sai Gon",
        score: 8,
    },
    {
        name: "d",
        age: 15,
        address: "Da Nang",
        score: 7,
    },
    {
        name: "f",
        age: 16,
        address: "Ca Mau",
        score: 7,
    },
    {
        name: "c",
        age: 19,
        address: "Nha Trang",
        score: 7,
    },
];

// Get information
const name = document.querySelector(".ip-name");
const age = document.querySelector(".ip-age");
const address = document.querySelector(".ip-address");
const score = document.querySelector(".ip-score");

const btnAdd = document.querySelector(".btn-add-student");
btnAdd.addEventListener("click", () => {
    // Get value input
    const studentName = name.value;
    const studentAge = age.value;
    const studentAddress = address.value;
    const studentScore = score.value;

    students.push({
        name: studentName,
        age: studentAge,
        address: studentAddress,
        score: studentScore,
    });

    console.log({ students });
});

// - Tìm ra người có số tuổi cao nhất
const btnSearchAge = document.querySelector(".btn-search-highest-age");

btnSearchAge.addEventListener("click", () => {
    let studentHighestAge = students[0];

    for (let index = 1; index < students.length; index++) {
        const element = students[index];
        if (studentHighestAge.age < element.age) {
            studentHighestAge = element;
        }
    }

    const highAge = document.querySelector(".highest-age");
    highAge.innerText = studentHighestAge.name;
});

// - Tìm ra người có địa chỉ ở Hà nội
// - Tìm ra người có điểm đầu vào cao nhất
// - Sắp xếp các học viên theo chiều giảm dần của tên
const sortedContainer = document.querySelector(".sortedList");

students.sort(function compare(a, b) {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
});

// render
const studentsItem = `
<div>
    <div>Name: tuanh</div>
    <div>Age: tuanh</div>
    <div>Address: tuanh</div>
    <div>Score: tuanh</div>
</div>
`;

const btnSorted = document.querySelector(".btn-sorted");

btnSorted.addEventListener("click", () => {
    for (let index = 0; index < students.length; index++) {
        const element = students[index];

        const divContainer = document.createElement("div");
        sortedContainer.appendChild(divContainer);
        divContainer.innerHTML = `
            <div>Name: ${element.name}</div>
            <div>Age: ${element.age}</div>
            <div>Address: ${element.address}</div>
            <div>Score: ${element.score}</div>
        `;

        const divHr = document.createElement("div");
        divHr.innerText = "----------------------";
        sortedContainer.appendChild(divHr);
    }
});