import faker from 'faker';
import shortid from 'shortid';

const students = [];

const DEPT = ['CSE', 'EEE', 'CMS', 'BBA', 'MSC'];

for (let i = 0; i < 10; i++) {
    const student = {}
    student.id = shortid.generate();
    student.name = faker.name.findName();
    student.dept = DEPT[Math.floor(Math.random() * DEPT.length)]

    students.push(student)
}

export default students;