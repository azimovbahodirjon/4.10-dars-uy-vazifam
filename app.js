//masala-1

function getAverageAge(arr) {
    let totalAge = 0;

    for (let i = 0; i < arr.length; i++) {
        totalAge += arr[i].age;
    }

    return totalAge / arr.length;
}

// Masala-3
function getNameMaxMinAge(arr) {
    let maxAge = arr[0].age;
    let minAge = arr[0].age;
    let maxName = arr[0].name;
    let minName = arr[0].name;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].age > maxAge) {
            maxAge = arr[i].age;
            maxName = arr[i].name;
        }
        if (arr[i].age < minAge) {
            minAge = arr[i].age;
            minName = arr[i].name;
        }
    }

    return [maxName, minName];
}

const people = [
    { name: "Abdulaziz", age: 33 },
    { name: "Erkin", age: 22 },
    { name: "Temur", age: 34 },
    { name: "Sardor", age: 20 },
];

console.log(getNameMaxMinAge(people));

// Masala-4
function invertObject(arr) {
    const result = {};

    for (let key in arr) {
        const value = arr[key];
        if (!result[value]) {
            result[value] = [];
        }
        result[value].push(Number(key));
    }

    return result;
}


console.log(invertObject(input));

// Masala-5
function mergeObjects(obj1, obj2) {
    const result = {};

    for (let key in obj1) {
        if (!(key in obj2)) {
            result[key] = obj1[key];
        }
    }

    for (let key in obj2) {
        if (!(key in obj1)) {
            result[key] = obj2[key];
        }
    }

    return result;
}

//Masala-2
function createSquaredObject(n) {
    const result = {};

    for (let i = 1; i <= n; i++) {
        result[i] = i * i;
    }

    return result;
}

console.log(createSquaredObject(5));


//Masala-3
function sumKeysAndValues(obj) {
    const keysSum = Object.keys(obj).reduce((sum, key) => sum + Number(key), 0);
    const valuesSum = Object.values(obj).reduce((sum, value) => sum + value, 0);

    return keysSum + valuesSum;
}