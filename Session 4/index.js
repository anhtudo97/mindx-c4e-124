// const sortedArray = [
//     1, 3, 5, 5, 7, 8, 11, 12, 14, 14, 15, 16, 16, 17, 17, 17, 17, 18, 19, 19, 19,
// ];

// Tìm kiếm nhị phân
// console.log(sortedArray.length);

// const middleIndex = Math.floor(sortedArray.length / 2);

// console.log(sortedArray[middleIndex] === 19);

// Tìm kiếm phần tử đầu tiên là số 19

// const bs = (arr, target) => {
//     let start = 0;
//     let end = arr.length - 1;
//     //   let tries = 1;

//     while (start <= end) {
//         // console.log("TRY NUMBER ", tries);

//         let middle = Math.floor((start + end) / 2);

//         console.log("end is ", end);
//         console.log("start is ", start);
//         console.log(
//             `looking now at position ${middle} where the value is ${arr[middle]}`
//         );
//         console.log("\n");

//         if (arr[middle] === target) {
//             console.log("found the target at this location!! : ", arr[middle]);
//             return;
//         } else if (arr[middle] > target) {
//             console.log(
//                 "target is smaller than the midpoint so next look to the left half of the array"
//             );
//             end = middle - 1;
//         } else {
//             console.log(
//                 "target is bigger than the midpoint so next look to the right half of the array"
//             );
//             start = middle + 1;
//         }
//         // tries++;
//     }
//     return false;
// };

// bs(sortedArray, 19);

// 1
const name = "tuanh";
const age = 24;
const address = "Ha noi";
// ...

// 2 Array
const customers = ["tuanh", 24, "Ha noi"];

// 3 Object
const me = {
    name: "tuanh",
    age: 24,
    address: "Ha noi",
};

// In ra màn hình
console.log(me.name);

// Thêm thuộc tính
me.skill = "chem gio";
console.log(me.skill);

// Cập nhật thuộc tính
me.name = "Chúa tể";
console.log(me.name);

// Xoá thuộc tính
delete me.name;
console.log(me);

// C struct
// C++ struct
// C# class
// java class

// biến, vòng lặp, câu lệnh điều kiện , object

const students = [{
        name: "a",
        age: 25,
    },
    {
        name: "b",
        age: 26,
    },
    {
        name: "c",
        age: 22,
    },
    {
        name: "d",
        age: 23,
    },
];

// Alt + shift + F

// Triển khai thuật toán tình kiếm tuyền tính với mảng các đối tượng

// tìm phần tử có age = 23

// Duyệt qua các phần tử của mảng
for (let index = 0; index < students.length; index++) {
    const element = students[index];

    // So sành từ thuộc tính từng phần tử trong mảng với điều kiện ban đầu
    if (element.age === 23) {
        console.log(element);
        break;
    }
}

// Triển khai thuật toán sắp xếp nổi bọt, điều kiện sắp xếp là age
let swapped = false;
do {
    swapped = false;
    for (let index = 0; index < students.length - 1; index++) {
        if (students[index].age > students[index + 1].age) {
            let temp = students[index];
            students[index] = students[index + 1];
            students[index + 1] = temp;
            swapped = true;
        }
    }
} while (swapped);

console.log(students);

// Giải phương trình bậc 2 có chuẩn hoá đầu vào dùng object
// const variable = {
//     a: prompt("Enter a value: "),
//     b: prompt("Enter b value: "),
//     c: prompt("Enter c value: "),
// };

// Với array và object 
// Reference và primary ( number )

const a = 1; // => đưa vào ô nhớ
// a = 2;
const array = [] // => đưa vào địa chỉ - địa chỉ của ô nhớ chưa giá trị của array
array.push('123');
console.log(array);

// Kết nối đến 1 server
const server = {

}

// Nhập vào 1 mảng thông tin các bạn học viên sau đó:
// - Tìm ra người có số tuổi cao nhất
// - Tìm ra người có địa chỉ ở Hà nội
// - Tìm ra người có điểm đầu vào cao nhất
// - Sắp xếp các học viên theo chiều giảm dần của tên