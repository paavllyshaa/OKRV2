function findOldest(people) {
    let oldestName = '';
    let oldestAge = -1;
    
    for (let name in people) {
        if (people[name] > oldestAge) {
            oldestAge = people[name];
            oldestName = name;
        }
    }
    return oldestName;
}

const people = {
    'Аня': 25,
    'Ваня': 40,
    'Маша': 35,
    'Петя': 28
};

const oldest = findOldest(people);
console.log('Самый старший человек:', oldest);
console.log('Возраст самого старого человека:', people[oldest]);