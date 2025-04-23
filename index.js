import moment from "moment";
import readline from "readline/promises";

// Menggunakan external packages moment
async function main() {
    try {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        const input = await rl.question('Masukkan tanggal : ')
        // rl.question('Masukkan tanggal : ', function(input) {
        if (moment(input,'DD-MM-YYYY').isValid()) {
          console.log(moment(input,'DD-MM-YYYY').format('DD/MM/YYYY'));
          rl.close();
        }
        else { 
          let err = new Error("Gagal");
          throw err;
          // console.log("Format tanggal salah");
          // main();
        }
    //   });
    } catch(err) {
        if(err.message === "Gagal") {
            console.log("Format tanggal salah");
        }
    }
}

// Tanpa external package
// function main2() {
//   rl.question('Masukkan tanggal : ', function(input) {
//     let temp = new Date(input.split('-').reverse().join('-'));
//     if (temp==='Invalid Date') {
//     const err = new Error("Gagal");
//     throw err;
//     } else {
//       let newDate = temp.getDate()+'/'+temp.getMonth()+'/'+temp.getFullYear();
//       console.log(newDate);
//       rl.close();
//     }
//   });
// }

// try {
//   main(); // Menggunakan external package moment
//   // main2(); // Tanpa external package
// } catch(err) {
//   if(err.message === "Gagal") {
//     console.log("Format tanggal salah");
//   }
// }

main();