

let coursesAndDurationArray = [

    {title: 'JavaScript Complex', monthDuration: 5},

    {title: 'Java Complex', monthDuration: 6},

    {title: 'Python Complex', monthDuration: 6},

    {title: 'QA Complex', monthDuration: 4},

    {title: 'FullStack', monthDuration: 7},

    {title: 'Frontend', monthDuration: 4}

];

for (const course of coursesAndDurationArray) {
    let courseDiv = document.createElement('div');
    courseDiv.classList.add('item');
    let h1Course = document.createElement('h1');
    h1Course.classList.add('heading');
    h1Course.innerText = `${course.title}`;
    let pCourse = document.createElement('p');
    pCourse.classList.add('description');
    pCourse.innerText = `${course.monthDuration}`;
    courseDiv.append(h1Course, pCourse);
    document.body.appendChild(courseDiv);
}