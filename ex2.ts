'use strict';

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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr: number[]): void {
    // Write your code here
    var arrCres = arr.sort((a, b) => a - b).slice(0, -1);
    var arrDecres = arr.sort((a, b) => b - a).slice(0, -1);
    
    var somaMax = arrCres.reduce((acumulador, valorAtual) => acumulador + valorAtual);
    var somaMin = arrDecres.reduce((acumulador, valorAtual) => acumulador + valorAtual);
    
    console.log(somaMax, somaMin);
    

}

function main() {

    const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}




