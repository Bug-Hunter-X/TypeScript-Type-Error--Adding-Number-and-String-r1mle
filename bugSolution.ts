function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both inputs must be numbers');
  }
  return a + b;
}

const result1 = add(1, 2); // Correct
console.log(result1); // Output: 3

try {
  const result2 = add(1, '2'); // Type Error
  console.log(result2);
} catch (error) {
  console.error(error.message); // Output: Both inputs must be numbers
}

//Alternative solution using type guards
function isNumber(val: any): val is number {
    return typeof val === 'number';
}

function add2(a: any, b: any): number {
    if (!isNumber(a) || !isNumber(b)) {
        throw new Error('Both arguments must be numbers');
    }
    return a + b;
}

console.log(add2(1,2)); //3
console.log(add2(1,'2')); //Error