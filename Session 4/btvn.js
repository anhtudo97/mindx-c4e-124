// Nhập vào 1 mảng thông tin các bạn học viên sau đó:

const students = [{
        name: "a",
        age: 1,
        address: "Ha Noi",
        score: 8,
    },
    {
        name: "b",
        age: 1,
        address: "Ha Noi",
        score: 8,
    },
    {
        name: "c",
        age: 2,
        address: "Sai Gon",
        score: 8,
    },
    {
        name: "d",
        age: 28,
        address: "Hue",
        score: 8,
    },
    {
        name: "e",
        age: 25,
        address: "Binh Dinh",
        score: 8,
    },
];

// - Tìm ra người có số tuổi cao nhất -> age

console.log("---- Max age ----");

let tempStudentMaxAge = students[0];

for (let index = 0; index < students.length; index++) {
    const student = students[index];

    if (tempStudentMaxAge.age < student.age) {
        tempStudentMaxAge = student;
    }
}

console.log({ tempStudentMaxAge });

// - Tìm ra người có địa chỉ ở Hà nội -> address

console.log("---- Address live in Ha Noi ----");

for (let index = 0; index < students.length; index++) {
    const student = students[index];

    if (student.address === "Ha Noi") {
        console.log({ student });
    }
}

// - Tìm ra người có điểm đầu vào cao nhất -> score

console.log("---- Max score ----");

let tempStudentMaxScore = students[0];

for (let index = 0; index < students.length; index++) {
    const student = students[index];

    if (tempStudentMaxScore.score < student.score) {
        tempStudentMaxScore = student;
    }
}

console.log({ tempStudentMaxScore });

// - Sắp xếp các học viên theo chiều giảm dần của tên -> name
console.log("---- Sort by name ----");

for (let index = 0; index < students.length; index++) {
    for (let jndex = index + 1; jndex < students.length; jndex++) {
        if (students[index].name < students[jndex].name) {
            let temp = students[index];
            students[index] = students[jndex];
            students[jndex] = temp;
        }
    }
}

console.log(students);

// - Tìm ra người có tuổi lớn thứ 2

// lọc phần tử trùng nhau

// 2 biến 1 biến lưu max 1 biến lưu lớn thứ 2

// Sắp xếp mảng xong lấy length - 2

// - Tìm ra các bạn có address tại miền bắc
// - Tìm ra các bạn có age > 24

// input => láy đc ngày - tháng - năm => tiền xử lý 

// xử lý tay
new Date()

// moment()