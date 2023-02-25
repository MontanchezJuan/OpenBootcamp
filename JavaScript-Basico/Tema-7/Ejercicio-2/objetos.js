const me = {
    name: 'Juan',
    last_name: 'Montanchez',
    age: 19,
    altura: '1.60 m',
    isDeveloper: true}

let edad = me.age

const santi = {
    name: 'Santiago',
    last_name: 'Bedoya',
    age: 21,
    altura: '1.68 m',
    isDeveloper: true}

const marco = {
    name: 'Marco',
    last_name: 'Zuñiga',
    age: 19,
    altura: '1.80 m',
    isDeveloper: true}

const list = [me,santi,marco]

const orderList = list.sort((a,b)=> a.age - b.age)
