
const students = [{
    age: 32,
    examScores: [],
    gender: 'male',
    name: 'edu'
  },
  {
    age: 29,
    examScores: [],
    gender: 'female',
    name: 'silvia'
}]

const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos'];
const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
const availableGenders = ['male', 'female'];

// 1- Mostrar en formato de tabla todos los alumnos. 
console.table(students);

// 2- Mostrar por consola la cantidad de alumnos que hay en clase.
console.log(students.length);

// 3- Mostrar por consola todos los nombres de los alumnos.
students.forEach(student => console.log(student.name))

// 4- Eliminar el último alumno de la clase.
function removeLastStudent() {
    students.pop();
    return students;
}
const noLastStudent = removeLastStudent(students);
console.log(noLastStudent);

// 5- Eliminar un alumno aleatoriamente de la clase.

// 6- Mostrar por consola todos los datos de los alumnos que son chicas.
function femaleStudents() {
    if (students.gender === 'female') {
        console.log(students);
    }
}

const femaleList = femaleStudents(students)
console.log(femaleList)

// 7- Mostrar por consola el número de chicos y chicas que hay en la clase.
function gender() {
    students.length === 0
    if (students.gender === 'female') {
        console.log("Female students:", students.length);
    }
    else {
        console.log("Male students:", students.length);
    }
}

const genderList = gender(students)
console.log(genderList)

// 8- Mostrar true o false por consola si todos los alumnos de la clase son chicas.
function allFemale() {
    if (students.gender === 'female') {
        return true
    }
    else {
        return false
    }
}

const trueFemale = allFemale(students);
console.log(trueFemale)

// 9- Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.

function twenties() {
    if (students.age >= 20 && students.age <=25) {
        console.log(students.name);
    }
}

const twentiesList = twenties(students);
console.log(twentiesList)

// 10- Añadir un alumno nuevo con los siguientes datos:


// 11- Mostrar por consola el nombre de la persona más joven de la clase.
function youngerStudent() {
    const ages = students.age;
    console.log(ages.min);   //aqui enseña la edad, no el nombre
}

// 12- Mostrar por consola la edad media de todos los alumnos de la clase.
function averageAge() {
    let sum = students.age.reduce((a, b) => a += b, 0);
    let avg = sum / students.age.length;
    console.log(avg)
}

// 13- Mostrar por consola la edad media de las chicas de la clase.
function averageAgeFemale() {    //FOR
}

// 14- Añadir nueva nota a los alumnos. Por cada alumno de la clase, 
//tendremos que calcular una nota de forma aleatoria(número entre 0 y 10) y añadirla a su listado de notas

// 15- Ordenar el array de alumnos alfabéticamente según su nombre.
function alphabeticalOrder() {
    const ages = students.name
    const alphabeticalList = ages.sort();;
    return alphabeticalList;
}


