"use strict";

const restaurant = {
  name: "Classico Italyano",
  location: "Trinh Van Bo Ha Noi",
  categories: ["Italian", "pizzeria", "vegetarian", "Organic"],
  starterMenu: [
    "Focaccia",
    "Bruschetta",
    "Garlic",
    "Bread",
    "Caprese",
    "Salad",
  ],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Mở lúc 24h
      close: 24,
    },
  },
  order: function (starterindex, mainindex) {
    return [this.starterMenu[starterindex], this.mainMenu[mainindex]];
  },
  oderDelivery: function ({ starterIndex, mainIndex, address, time }) {
    console.log(
      `Đã đặt món từ ${this.starterMenu[starterIndex]} và ${this.mainMenu[mainIndex]} về địa chỉ ${address} lúc ${time}`
    );
  },
};

// ================================ Đây là phần mảng =============================
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// hủy cấu trúc mảng
const [x, y, z] = arr; // biến này chỉ để thực hiện lại việc tái cấu trúc dữu liệu mảng
console.log(x, y, z);
// Áp dụng vào mảng restaurant
// rest dùng để  lấy ra các phần tử còn lại trong mảng
const [...rest] = restaurant.categories;
console.log("Đây là rest: " + rest);

// const [fist, ,secondary] = restaurant.categories; // bỏ qua phân tử thứ 2 lấy phân tử 1 và 3
let [main, secondary] = restaurant.categories;
console.log(main, secondary);

[main, secondary] = [secondary, main]; // gắn cho biến secondary từ phụ thành chính

console.log(main, secondary);

// Hàm order lấy giá trị theo số phần tử

console.log(restaurant.order);
const [start, mainCourse] = restaurant.order(1, 2);
console.log(start, mainCourse);

//  Mảng lồng mảng

const nestend = [2, 3, [4, 5]];
const [i, , [k, h]] = nestend; // Tạo hai biến đại diện cho giá trị của hàm thứ 2
console.log(i, k, h);

// Gắn giá trị mặc định

const [p = 1, q = 1, w = 1] = [8, 9]; // Gắn giá trị mặc định cho các biến mới khởi tạo bằng 1

console.log(p, q, w); // nếu các biến trong mảng có sẵn thì in ra giá trị đó còn không thì in ra bằng 1 như đã gắn ở trên

// ========================= Đây là phần object ======================

const { name, openingHours, categories } = restaurant; // Gọi tên biến trong object ra
console.log("Đây là object: " + name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: Hours,
  categories: tags,
} = restaurant; // Thay dổi tên bến trong object
console.log(restaurantName, Hours, tags);

// Trả về một giá trị mặc định
const { menu = [], starterMenu: starter = [] } = restaurant;
// nếu thuộc tính menu trong object không tồn tại thì sẽ trả về undefined nên ta phải gắn cho nó một giá trị mặc định
console.log(menu, starter);

// Đột biến biến
let numa = 111;
let numb = 999;
const obj = { numa: 17, numb: 20, numc: 31 };

({ numa, numb } = obj);
console.log(numa, numb);

// object lồng object

const {
  fri: { open: op, close: cl },
} = openingHours;
console.log(op, cl);

restaurant.oderDelivery({
  time: "22:30",
  address: "Thành Phố Hà Nội",
  mainIndex: 2,
  starterIndex: 2,
});
