const strings = ["apple", "banana", "pear", "kiwi", "grape", "plum"];

const groupedByLength = {};

strings.forEach(str => {
    const len = str.length;
    if (!groupedByLength[len]) {
        groupedByLength[len] = [];
    }
    groupedByLength[len].push(str);
});

console.log(groupedByLength);
