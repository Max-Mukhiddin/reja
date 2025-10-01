// console.log("Jack Ma maslahatlari");
// const list = [
//   "yaxshi talaba bo'ling", // 0-20
//   "togri boshliq tanlang va koproq harakat qiling", // 20-30
//   "uzingizni ishingizni boshlang", // 30-40
//   "siz kuchli bolgan narsalarni qiling", // 40-50
//   "yoshlarga investitsiya qiling", // 50-60
//   "endi dam oling, foydasi yoq endi", // 60
// ];

// // CALLBACK. function
// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if ((a > 20) & (a <= 30)) callback(null, list[1]);
//   else if ((a > 30) & (a <= 40)) callback(null, list[2]);
//   else if ((a > 40) & (a <= 50)) callback(null, list[3]);
//   else if ((a > 50) & (a <= 60)) callback(null, list[4]);
//   else {
//     setInterval(function () {
//       callback(null, list[5]);
//     }, 1000);
//   }
// }

// console.log("passed here 0");
// maslahatBering(40, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   console.log("Javob:", data);
// });
// console.log("passed here 1");

// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if ((a > 20) & (a <= 30)) callback(null, list[1]);
//   else if ((a > 30) & (a <= 40)) callback(null, list[2]);
//   else if ((a > 40) & (a <= 50)) callback(null, list[3]);
//   else if ((a > 50) & (a <= 60)) callback(null, list[4]);
//   else {
//     setTimeout(function () {
//       callback(null, list[5]);
//     }, 5000);
//   }
// }

// console.log("passed herre 0");
// maslahatBering(65, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   console.log("Javob:", data);
// });
// console.log("passed here 1");

// ASYNC function

// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("insert a number");
//   else if (a <= 20) return list[0];
//   else if ((a > 20) & (a <= 30)) return list[1];
//   else if ((a > 30) & (a <= 40)) return list[2];
//   else if ((a > 40) & (a <= 50)) return list[3];
//   else if ((a > 50) & (a <= 60)) return list[4];
//   else {
//     // return list[5];

//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(list[5]);
//       }, 5000);
//     });

// setTimeout(function () {
//   return list[5];
// }, 5000);
//   }
// }

// // call via then/catch
// console.log("passed here 0");
// maslahatBering(20)
//   .then((data) => {
//     console.log("javob:", data);
//   })
//   .catch((err) => {
//     console.log("ERROR:", err);
//   });
// console.log("passed here 1");

// // call via. async/await
// async function run() {
//   let javob = await maslahatBering(25);
//   console.log(javob);
//   javob = await maslahatBering(70);
//   console.log(javob);
//   javob = await maslahatBering(41);
//   console.log(javob);
// }
// run();

// function countLetter(letter, word) {
//     return word.split(letter).length - 1;
//         }
// console.log(countLetter("c", "coconout"));
// console.log(countLetter("n", "banana"));
// console.log(countLetter("a", "alabama"));

//  ⭐️ Synchronous function vs Asynchronous function
// Asynchronous: CALLBACK

// // DEFINE
// function qoldiqliBolish(a, b, callback) {
//   if (b === 0) {
//     callback("Mahraj nolga teng bolmaydi", null);
//   } else {
//     const c = a % b;
//     callback(null, c, true);
//   }
// }

// // CALL
// qoldiqliBolish(5, 3, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("data:", data);
//     console.log("MATIQLAR ...");
//   }
// });

// function countDigits(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] >= "0" && str[i] <= "9") {
//       count++;
//     }
//   }
//   return count;
// }

// // Test b
// console.log(countDigits("ad2a54y79wet0sfgb9"));
// console.log(countDigits("hello123world"));
// console.log(countDigits("noNumbersHere"));
// console.log(countDigits("2025year"));

// function checkContent(str1, str2) {
//   if (str1.length !== str2.length) return false;

//   const sorted1 = str1.split("").sort().join("");
//   const sorted2 = str2.split("").sort().join("");

//   return sorted1 === sorted2;
// }

// // Test
// console.log(checkContent("mitgroup", "gmtiprou"));
// console.log(checkContent("hello", "ohlle"));
// console.log(checkContent("hello", "helo"));




const moment = require("moment");

class Shop {
  constructor(non, lagmon, cola) {
    this.products = { non, lagmon, cola };
  }

 
  getTime() {
    return moment().format("HH:mm");
  }

  // qoldiq (async)
  async qoldiq() {
    const time = this.getTime();
    console.log(
      `hozir ${time}da ${this.products.non}ta non, ${this.products.lagmon}ta lagmon va ${this.products.cola}ta cola mavjud!`
    );
  }

  // sotish (async)
  async sotish(mahsulot, soni) {
    if (!this.products[mahsulot]) {
      console.log("Bunday mahsulot yo‘q!");
      return;
    }
    if (this.products[mahsulot] < soni) {
      console.log("Yetarli mahsulot yo‘q!");
      return;
    }
    this.products[mahsulot] -= soni;
    console.log(
      `hozir ${this.getTime()}da ${soni}ta ${mahsulot} sotildi!`
    );
  }

  // qabul (async)
  async qabul(mahsulot, soni) {
    if (!this.products[mahsulot]) {
      console.log("Bunday mahsulot yo‘q!");
      return;
    }
    this.products[mahsulot] += soni;
    console.log(
      `hozir ${this.getTime()}da ${soni}ta ${mahsulot} qabul qilindi!`
    );
  }
}

// Test qilish async/await bilan
async function runShop() {
  const shop = new Shop(4, 5, 2);

  await shop.qoldiq();          // hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud!
  await shop.sotish("non", 3);  // hozir 20:41da 3ta non sotildi!
  await shop.qabul("cola", 4);  // hozir 20:42da 4ta cola qabul qilindi!
  await shop.qoldiq();          // hozir 20:42da 1ta non, 5ta lagmon va 6ta cola mavjud!
}

runShop();