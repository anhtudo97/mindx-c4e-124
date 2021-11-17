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

// Get student container
const studentsContainer = document.querySelector(".students");

// The first loading
for (let index = 0; index < students.length; index++) {
    const element = students[index];

    const divContainer = document.createElement("div");
    studentsContainer.appendChild(divContainer);
    divContainer.innerHTML = `
        <div>Name: ${element.name}</div>
        <div>Age: ${element.age}</div>
        <div>Address: ${element.address}</div>
        <div>Score: ${element.score}</div>
    `;

    const divHr = document.createElement("div");
    divHr.innerText = "----------------------";
    studentsContainer.appendChild(divHr);
}

// Searching
const inputSearch = document.querySelector(".input-search");

inputSearch.addEventListener("input", (event) => {
    // Clear older data
    let lastChild = studentsContainer.lastElementChild;
    while (lastChild) {
        studentsContainer.removeChild(lastChild);
        lastChild = studentsContainer.lastElementChild;
    }

    // Get value to search
    const value = event.target.value;

    // Filter data by value
    const tempList = [...students].filter((student) =>
        student.name.includes(value)
    ); // return array

    // Fill data to screen
    for (let index = 0; index < tempList.length; index++) {
        const element = tempList[index];

        const divContainer = document.createElement("div");
        studentsContainer.appendChild(divContainer);
        divContainer.innerHTML = `
            <div>Name: ${element.name}</div>
            <div>Age: ${element.age}</div>
            <div>Address: ${element.address}</div>
            <div>Score: ${element.score}</div>
        `;

        const divHr = document.createElement("div");
        divHr.innerText = "----------------------";
        studentsContainer.appendChild(divHr);
    }
});