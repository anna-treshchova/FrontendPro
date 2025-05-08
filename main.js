function Student (name, birthYear) {

    this.name = name;
    this.birthYear = birthYear;

    Object.defineProperty(this, "age", {
        get: function () {
            return new Date().getFullYear() - this.birthYear;
        },
        set: function (newAge) {
            if (typeof newAge !== "number" || newAge < 16 || newAge > 100) {
                console.warn("Invalid age");
                return;
            }
            this.birthYear = new Date().getFullYear() - newAge;
        }
    })

    this.grades = [];
    this.attendance = [];
}

Student.prototype.isAttendanceFull = function ()  {
    const full = this.attendance.length >= 25;

    if (full) {
        console.warn("Attendance is full");
    }
    return full;
}

Student.prototype.isValidGrade = function (grade) {
    const valid = typeof grade === "number" && grade > 0 && grade <= 100

    if (!valid) {
        console.warn("Invalid grade");
    }
    return valid;
}

Student.prototype.present = function (grade) {
    if (this.isAttendanceFull()) return;
    if (!this.isValidGrade(grade)) return;

    this.attendance.push(true);
    this.grades.push(grade);

    return this;
}

Student.prototype.absent = function (grade) {
    if (this.isAttendanceFull()) return;
    if (!this.isValidGrade(grade)) return;

    this.attendance.push(false);
    this.grades.push(grade);

    return this
}

Student.prototype.avgGrade = function () {
    if (this.grades.length === 0) return 0;
    return Math.round(this.grades.reduce((a, b) => a + b, 0) / this.grades.length);
}

Student.prototype.summary = function () {
    const avgAttendance = this.attendance.filter(Boolean).length / this.attendance.length;
    const avgGrade = this.avgGrade();

    if (avgGrade >= 90 && avgAttendance >= 0.9) {
        console.log("Great job!")
    } else if (avgGrade >= 90 || avgAttendance >= 0.9) {
        console.log("You're good, but you could do better.")
    } else {
        console.log("You need try harder!")
    }
    console.log(`Average grade: ${avgGrade}, Average attendance: ${avgAttendance}`);
    return "";
}

const student1 = new Student("Kate", 2001);
student1.present(90).present(100).present(85).present(100).present(90).present(80).present(95).present(90).present(100).present(100).present(90).present(100).absent(85).present(100).present(90).present(100).present(95).present(90).present(100).present(100).present(100).present(90).present(100).absent(95).present(90).present(80);
console.log(student1.summary());

const student2 = new Student("John", 2000);
student2.present(70).present(70).present(85).present(80).present(85).present(80).present(90).present(90).present(80).present(90).present(90).present(60).absent(85).absent(70).present(80).absent(75).absent(80).present(80).present(90).present(60).present(80).present(90).absent(100).absent(70).present(65);
console.log(student2.summary());

const student3 = new Student("Emma", 1995);
student3.present(100).present(80).present(100).present(80).present(85).present(80).present(90).present(90).present(80).present(90).present(90).present(75).present(85).present(70).present(80).absent(75).absent(80).present(80).present(90).present(60).present(80).present(90).present(100).present(70).present(65);
console.log(student3.summary());

console.log(student1.age);
console.log(student1.grades);

student1.age = 30;
console.log(student1.birthYear);
