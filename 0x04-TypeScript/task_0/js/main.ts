interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Alice',
    lastName: 'Zinto',
    age: 21,
    location: 'Bloem'
};

const student2: Student = {
    firstName: 'Sipho',
    lastName: 'Malatji',
    age: 23,
    location: 'Joburg'
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const tableHeader = table.createTHead();
const headerRow = tableHeader.insertRow();
const headerCell1 = headerRow.insertCell();
const headerCell2 = headerRow.insertCell();
headerCell1.textContent = 'First Name';
headerCell2.textContent = 'Location';

studentsList.forEach(student => {
    const row = table.insertRow();
    const cell1 = row.insertCell();
    const cell2 = row.insertCell();
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
});

document.body.appendChild(table);
