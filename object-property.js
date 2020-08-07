const student = [
    {id: 21, name: 'omar sunney'},
    {id: 31, name: 'Mannnnnnna'},
    {id: 41, name: ' Moyori'},
    {id: 71, name: 'depjol'}
]


// const output = [];

// for( let i = 0; i < student.length; i++){
//     const element = student[i];
//     const result = element.name;
//     output.push(result);

// }
// console.log(output);
// Map
const names = student.map(s => s.name);
const ids = student.map( s => s.id);
// Filter
const bigger = student.filter( s => s.id>40);
// Find
const bigger1 = student.find(s => s.id>40);
console.log(bigger1);