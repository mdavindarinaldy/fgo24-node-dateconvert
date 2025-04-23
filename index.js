import moment from "moment";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Menggunakan external packages moment
function main() {
  rl.question('Masukkan tanggal : ', function(input) {
    if (moment(input,'DD-MM-YYYY').isValid()) {
      console.log(moment(input,'DD-MM-YYYY').format('DD/MM/YYYY'));
      rl.close();
    }
    else { 
      console.log("Format tanggal salah");
      main();
    }
  });
}

// Tanpa external package
function main2() {
  rl.question('Masukkan tanggal : ', function(input) {
    let temp = new Date(input.split('-').reverse().join('-'));
    if (temp==='Invalid Date') {
      console.log("Format tanggal salah");
      main2();
    } else {
      let newDate = temp.getDate()+'/'+temp.getMonth()+'/'+temp.getFullYear();
      console.log(newDate);
      rl.close();
    }
  });
}

main(); // Menggunakan external package moment
main2(); // Tanpa external package