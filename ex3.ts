'use strict';

import { WriteStream, createWriteStream } from "fs";
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s: string): string {
    // Write your code here
    if(s.includes("PM")){
        var primeirosDois = Number(s.slice(0, 2));
        var somaPrimeirosDois = primeirosDois + 12;
        if(primeirosDois === 12){
            var res = s.slice(0, -2);
            return res;
        }else{
            var tempoFormatado = somaPrimeirosDois + s.slice(2, 8);
            return tempoFormatado;
        }
    }else if(s.includes("AM")){
        var primeirosDoisAM = Number(s.slice(0, 2));
        if(primeirosDoisAM === 12){
            var tempoFormatadoAM = "00" + s.slice(2, 8);
            return tempoFormatadoAM;
        }else{
            var resAM = s.slice(0, -2);
            return resAM;
        }
    }


}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const s: string = readLine();

    const result: string = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}