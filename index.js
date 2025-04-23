import moment from "moment";
import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function main() {
    rl.question('Masukkan tanggal : ', function(input) {
        if (moment(input,'DD-MM-YYYY').isValid()) {
            console.log(moment(input,'DD-MM-YYYY').format('DD/MM/YYYY'))
            rl.close()
        }
        else { 
            console.log("Format tanggal salah")
            main()
        }
    })
}

// let a = moment('24-04-2015','DD-MM-YYYY').format('DD/MM/YYYY')
// console.log(a)
// console.log(moment('24-04-2015','DD-MM-YYYY').isValid())

main()