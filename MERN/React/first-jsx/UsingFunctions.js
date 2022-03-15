const add = (props) => {
    console.log("This is inside the add function: ");
    console.log(props.num1 + props.num2);
    return props.num1 + props.num2;
}

const props = {
    num1: 5,
    num2: 4
}

let sum = add(props);

console.log('-------------')

console.log("This is the sum: ");
console.log(sum)