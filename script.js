// imports
import {Employee} from "./employee.js";

const persons = [];
let area = 0


// table

const p = createEl('p')
const p1 = createEl('p')
const p2 = createEl('p')
getEl('personsList').append(p)
getEl('personsList').append(p1)
getEl('personsList').append(p2)
let table = createEl('table')
let thead = createEl('thead')
let tbody = createEl('tbody')
table.appendChild(thead);
table.appendChild(tbody);
table.classList.add('table')
table.classList.add('table-striped')
table.style.marginTop = '80px';
getEl('personsList').appendChild(table);


// rows
let row_1 = createEl('tr')

row_1.appendChild(formTable('th', 'id'));
row_1.appendChild(formTable('th', 'Full name'));
row_1.appendChild(formTable('th', 'age'));
let salary = formTable('th', 'salary ')
// let buttonS = formTable('button', '&darr;');
// buttonS.style.background = 'white'
// buttonS.style.border = 'white'
//
// salary.append(buttonS)
row_1.appendChild(salary);
row_1.appendChild(formTable('th', 'position'));
row_1.appendChild(formTable('th', 'years in company'));

thead.appendChild(row_1);

addPerson.onclick = addPersonF;
calcStats.onclick = calcStatsF;


// function Person(id, firstName, lastName, age){
//     this.id = id;
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = +age;
// }
function addPersonF() {


    let employee = new Employee(getEl('personId').value, getEl('firstName').value, getEl('lastName').value,
        getEl('age').value, getEl('salary').value, getEl('dataBeginWork').value, getEl('position').value)


    console.log(employee)
    persons.push(employee)

    let row_2 = createEl('tr')

    let row_2_data_1 = formTable('td', employee.id)
    let row_2_data_2 = formTable('td', employee.fullName())
    let row_2_data_3 = formTable('td', employee.age)
    let row_2_data_4 = createEl('td')
    let salary = formTable('p', employee.salary)
    let but = formTable('button', '&#9998')
    but.style.marginLeft = '10px'
    row_2_data_4.display = 'absolute'
    salary.appendChild(but)
    row_2_data_4.appendChild(salary)

    but.style.background = 'transparent'
    but.style.border = 'none'
    let view = salary;

    let row_2_data_5 = formTable('td', employee.yearsInCompany)
    let row_2_data_6 = formTable('td', employee.position)

    row_2.appendChild(row_2_data_1);
    row_2.appendChild(row_2_data_2);
    row_2.appendChild(row_2_data_3);
    row_2.appendChild(row_2_data_4);
    row_2.appendChild(row_2_data_5);
    row_2.appendChild(row_2_data_6);
    tbody.appendChild(row_2);

    but.onclick = () => {
        editStart()
        function editStart() {
            area = createEl('textarea')
            area.style.resize = 'none'
            area.style.cols = '1'
            area.style.rows = '1'

        }

            area.onkeydown = function (event){
                if (event.key === 'Enter') {
                    this.blur()
                }
            }
            area.onblur = function (){
                editEnd()
            }
            view.replaceWith(area)
        area.focus()
        }
        function editEnd() {
        view.innerHTML = area.value
            employee.salary = area.value
            area.replaceWith(view)
    }
}


function calcStatsF() {
    let res = persons.reduce((acum, item) => acum + parseInt(item.salary), 0) / persons.length

    p.innerHTML = `Average salary: ${res}`

    persons.sort((p1, p2) => p1.salary > p2.salary ? 1 : -1)

    p1.innerHTML = `Min salary: ${persons[0].salary}`
    p2.innerHTML = `Max salary: ${persons[persons.length - 1].salary}`
}



function createEl(tag) {
    return document.createElement(tag)
}
function getEl(id) {
    return document.getElementById(id)
}

function formTable(tag, text) {
    let elem = createEl(tag)
    elem.innerHTML = text
    return elem
}
