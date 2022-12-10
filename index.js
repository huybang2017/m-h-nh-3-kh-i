// câu 1
console.log("câu 1:");
// input: nhâp số ngày nhân viên đã làm (30 ngày)
// lương 1 ngày: 100000
// output: tính lương nhân viên
// program: lương 1 ngày * số ngày đã làm
const WAGE = 100000
let dayWork = 30
console.log("ngày lương trong 30 ngày là: ",WAGE*dayWork);



// câu 2
console.log("câu 2:");
// input: nhập vào 5 số thực 
// output: xuất giá trị trung bình 5 giá trị này
// program: 5 số thực cộng lại chia 5
let num1=2.5,num2=4,num3=6,num4=10.4,num5=12.234,valueMean
// biến tính giá trị trung bình
valueMean = (num1+num2+num3+num4+num5)/5
console.log("giá trị trung bình của 5 số thực là: ",valueMean);



// câu 3
console.log("câu 3:");
// input: nhập số tiền USD
// output: xuất ra tiền USD đổi sang VND
// program: tiền USD * mệnh giá 1 USD sang VND (23500) 
const USD_VND = 23500
let USD = 2
console.log("đổi USD sang VND: ",USD_VND*USD);




// câu 4
console.log("câu 4:");
// input: nhập chiều dài và nhập chiều rộng của HCN
// outout: xuất ra chu vi và diện tích HCN

// program: chu vi = (chiều dài + chiều rộng) * 2
        // diện tích  = chiều dài * chiều rộng
let length=20,breadth=10,perimeter,acreage
// chu vi
perimeter = (length+breadth) *2
// diện tích
acreage = length*breadth
console.log("chu vi hình chữ nhật là: ",perimeter);
console.log("diện tích hình chữ nhật là: ",acreage);




// câu 5
console.log("câu 5:");
// input: nhập vào 1 số có 2 chữ số
// output: tính tổng các kí số của số đó
// program: 2 số => có hàng chục hàng đơn vi
        // hàng đơn vị = số % 10 (chia lấy dư)
        // hàng chục = số / 10
        // sum = hàng đơn vị + hàng chục

let num = 24,numUnit,numDozen,sum
// hàng đơn vị
numUnit = num % 10
// hàng chục
numDozen = Math.floor(num / 10)
// tổng các kí sô
sum = numUnit + numDozen
console.log("tổng các kí số là: ", sum);





