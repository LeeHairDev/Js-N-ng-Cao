"use strict";

const restaurant = {
    name: 'Classico Italyano',
    location: "Trinh Van Bo Ha Noi",
    categories: ['Italian', 'pizzeria', 'vegetarian', 'Organic'],
    starterMenu: ['Focaccia','Bruschetta', 'Garlic','Bread', 'Caprese', 'Salad'], 
    mainMenu: ['Pizza', 'Pasta','Risotto'],
    order: function(starterindex,mainindex){
        return [this.starterMenu[starterindex], this.mainMenu[mainindex]];
    }
}

const arr = [2,3,4];
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
 const [start, mainCourse] = restaurant.order(1,2);
 console.log(start, mainCourse);

//  Mảng lồng mảng 

const nestend = [2, 3 ,[4, 5]];
const [i, ,[k, h]] = nestend; // Tạo hai biến đại diện cho giá trị của hàm thứ 2
console.log(i,k,h);

// Gắn giá trị mặc định 

const [p=1,q=1,w=1] = [8,9]; // Gắn giá trị mặc định cho các biến mới khởi tạo bằng 1

console.log(p,q,w); // nếu các biến trong mảng có sẵn thì in ra giá trị đó còn không thì in ra bằng 1 như đã gắn ở trên
