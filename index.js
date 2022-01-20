import init, { add, subtract, multiply, divide, speed_test } from './pkg/wasm_math.js';

init().then(() => {
    // Add
    document.getElementById('addBtn').addEventListener('click', () => {
        const a = +document.getElementById('addA').value || 0;
        const b = +document.getElementById('addB').value || 0;
        const sum = add(a, b);

        document.getElementById('sum').innerHTML = sum;
    });

    // Subtract
    document.getElementById('subtractBtn').addEventListener('click', () => {
        const a = +document.getElementById('subtractA').value || 0;
        const b = +document.getElementById('subtractB').value || 0;
        const difference = subtract(a, b);

        document.getElementById('difference').innerHTML = difference;
    });

    // Multiply
    document.getElementById('multiplyBtn').addEventListener('click', () => {
        const a = +document.getElementById('multiplyA').value || 0;
        const b = +document.getElementById('multiplyB').value || 0;
        const difference = multiply(a, b);

        document.getElementById('product').innerHTML = difference;
    });

    // Divide
    document.getElementById('divideBtn').addEventListener('click', () => {
        const a = +document.getElementById('divideA').value || 0;
        const b = +document.getElementById('divideB').value || 0;
        const difference = divide(a, b);

        document.getElementById('quotient').innerHTML = difference;
    });

    // JavaScript Speed Test
    document.getElementById('jsTestBtn').addEventListener('click', () => {
        let count = 0;

        const start = performance.now();
        while (count < 1000000000) {
            count += 1;
        }
        const end = performance.now();

        const ms = end - start;

        document.getElementById('jsMS').innerHTML = `Done (${ms.toFixed(2)} ms)`;
    });

    // Rust Speed Test
    document.getElementById('rustTestBtn').addEventListener('click', () => {
        const start = performance.now();
        speed_test();
        const end = performance.now();
        const ms = end - start;

        document.getElementById('rustMS').innerHTML = `Done (${ms.toFixed(2)} ms)`;
    });
});
