import moment from "moment";
import readline from "readline/promises";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Menggunakan external packages moment
async function main() {
  try {
    const input = await rl.question('Masukkan tanggal : ');
    if (moment(input,'DD-MM-YYYY').isValid()) {
      console.log(moment(input,'DD-MM-YYYY').format('DD/MM/YYYY'));
      rl.close();
    }
    else { 
      let err = new Error("Gagal");
      rl.close();
      throw err;
    }
  } catch(err) {
    if(err.message === "Gagal") {
      console.log("Format tanggal salah");
    }
  }
}

// Tanpa external package
// async function main2() {
//   try {
//     const input = await rl.question('Masukkan tanggal : ');
//     const [day, month, year] = input.split('-');
//     if (!isNaN(day) || !isNaN(month) || !isNaN(year)) {
//       let newDate = new Date(`${year}-${month}-${day}`);
//       if (newDate==='Invalid Date') {
//         const err = new Error("Gagal");
//         throw err;
//       } else {
//         newDate = `${day}/${month}/${year}`;
//         console.log(newDate);
//         rl.close();
//       }
//     } else {
//       const err = new Error("Gagal");
//       throw err;
//     }
//   } catch (err) {
//     if(err.message === "Gagal") {
//       console.log("Format tanggal salah");
//       rl.close();
//     }
//   }
// }


main(); // Menggunakan external package moment
// main2(); // Tanpa external package