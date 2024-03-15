let A = [50, 107, 'jack', 83, 'killer', 'son', true];

// 1. Show only strings in a new array
let Strings = A.filter(i => typeof i === 'string');
console.log("Just strings in a new array:", Strings);

// 2. Create a new array from numbers and sort them
let Numbers = A.filter(item => typeof item === 'number').sort((a, b) => a - b);
console.log("Create a new array from the numbers and sort them into rows:", Numbers);

// 3. Make the string array reverse
let reversed_Strings = Strings.reverse();
console.log("Reverse the string array:", reversed_Strings);

// 4. Combine both array of numbers and strings
let Combine = Numbers.concat(Strings);
console.log("Concatenate arrays of both numbers and strings:", Combine);

// 5. Delete 3 items from the 6th item from the combined array
Combine.splice(5, 3);
console.log("Deleted 3 items from the 6th item from the combined array:", Combine);

// 6. Show elements from A which are less than 100
let less_Than_100 = A.filter(item => typeof item === 'number' && item < 100);
console.log("Fewer than 100 elements from A are shown:", less_Than_100);

// 7. From string array remove the last letter and add word 'str' before each of them
let Modified_Strings = Strings.map(item => item.slice(0, -1) + 'str');
console.log("Remove the last character from the string array and add the word 'str' before each of them:", Modified_Strings);

