class Employee {
    constructor(name, surname, age, specialist, workExperience) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.specialist = specialist;
        this.workExperience = workExperience;
    }
    greet() {
        console.log(`Hello, my name ${this.name}, I am a ${this.specialist} who has been working for ${this.workExperience} years.`)
    }
}
const companyEmployee = new Employee('Ivan','Petrov', 29, 'Senior frontend developer', 7);
companyEmployee.greet();
console.log(companyEmployee.name);

class NewEmployee extends Employee {
    constructor(name, surname, age, specialist, workExperience, probation) {
       super(name, surname, age, specialist, workExperience); 
       this.probation = probation; 
    }
    
    welcomeNewEmployee() {
        console.log(`Hi, I am ${this.name} ${this.surname}, I am ${this.age} years old, I'm a ${this.specialist} who has been working for ${this.workExperience} years. I have a probationary period of ${this.probation} months`);
    }
}

const companyNewEmployee = new NewEmployee('Petya', 'Simanov', 20, 'Junior frontend developer', 1, 3);
companyNewEmployee.welcomeNewEmployee();