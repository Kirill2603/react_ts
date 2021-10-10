import React from 'react';

function App() {
    return (
      <div>123</div>
    );
}
type Operation = (a: number, b: number) => number;

function mathOp(x: number, y: number, op: Operation): number{

    return op(x, y);
}
let sum: Operation = function(x: number, y: number): number {
    return x + y;
};

console.log(mathOp(10, 20, sum));

export default App;
