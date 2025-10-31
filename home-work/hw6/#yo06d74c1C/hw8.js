


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let sort = coursesAndDurationArray.sort((a, b) => {
    if (a.monthDuration < b.monthDuration) {
        return 1;
    }
    if (a.monthDuration > b.monthDuration) {
        return -1;
    }
    if (a.monthDuration === b.monthDuration) {
        return 0;
    }
})

console.log(sort);

let filter = coursesAndDurationArray.filter((value) => value.monthDuration >= 5);
console.log(filter);

let map = filter.map((value,index) =>{
    let newCoursesAndDurationArray = {
        id: index + 1,
        title: value.title,
        monthDuration: value.monthDuration

    }
    return newCoursesAndDurationArray;
})

console.log(map);