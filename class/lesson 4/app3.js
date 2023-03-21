//In 10 chữ Hello World

// var i = 0
// while (i < 10){
//     console.log("Hello World");
//     i++;
// }



//Đếm số phần tử chẵn lẻ

// var i = 0
// arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]

// while(i < arr.length){
//     if (arr[i] % 2 == 0){
//         console.log("số chẵn",arr[i]); 
//     } else {
//         console.log("số lẻ  ",arr[i]);
//     }   
//     i++;
    
// }



//Tính tổng phần tử chẵn lẻ

// var i = 0
// var sumOdd = 0
// var sumEven =0
// arr =  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
// while(i<arr.length){
//     if(arr[i] % 2 == 0){
//         sumEven = sumEven + arr[i]
//     }else{
//         sumOdd = sumOdd + arr[i]
//     }
//     i++;
// }
// console.log(sumEven);
// console.log(sumOdd);





//Lọc phần tử chẵn ra mảng chẵn, phần tử lẻ ra mảng lẻ

// var i = 0
// var even = []
// var odd = []
// arr =  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
// while(i<arr.length){
//     if(arr[i] % 2 == 0){
//         even.push(arr[i])
//     }else{
//         odd.push(arr[i])
//     }
//     i++;
// }
// console.log(even);
// console.log(odd);





//Tìm phần tử số 2

// var i = 0
// arr =  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
// while(i < arr.length){
//     if(arr[i]==2){
//         console.log(i)
//     };
//     i++;
// }





// Tính tổng phần tử chẵn lẻ bằng for

// arr =  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
// var sumOdd = 0
// var sumEven = 0
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 == 0){
//         sumEven = sumEven + arr[i]
//     }else{
//         sumOdd = sumOdd + arr[i]
// }
// }

// console.log("tổng chẵn",sumEven);
// console.log("tổng lẻ",sumOdd);







//

// arr1 =  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
// sum = 0;
// for(let a in arr1){
//     sum += Number(a)
// }
// console.log(sum);




//

let student = [
    {
        name: "NVA",
        age: 16,
        course: ["mindX 01", "mindX 02", "mindX 03"]
    },
    {
        name: "NVB",
        age: 18,
        course: ["mindX 01", "mindX 02", "mindX 04"]
    },
    {
        name: "NVC",
        age: 17,
        course: ["mindX 01", "mindX 03", "mindX 04"]
    },
    {
        name: "NVD",
        age: 15,
        course: ["mindX 01", "mindX 02", "mindX 03"]
    }
    ]

for (let i = 0; i < student.length; i++) {
    console.log(student[i]);
}

