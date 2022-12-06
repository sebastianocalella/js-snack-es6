const people = [
    {
        name: 'Adamo',
        surname: 'Adamis',
        age: 15
    },
    {
        name: 'Andrea',
        surname: 'Raguso',
        age: 20
    },
    {
        name: 'Giulia',
        surname: 'Semeraro',
        age: 21
    },
    {
        name: 'Adamo',
        surname: 'Adamis',
        age: 15
    },
    {
        name: 'Andrea',
        surname: 'Raguso',
        age: 20
    },
    {
        name: 'Giulia',
        surname: 'Semeraro',
        age: 21
    },
    {
        name: 'Adamo',
        surname: 'Adamis',
        age: 15
    },
    {
        name: 'Andrea',
        surname: 'Raguso',
        age: 20
    },
    {
        name: 'Giulia',
        surname: 'Semeraro',
        age: 21
    },
    {
        name: 'Adamo',
        surname: 'Adamis',
        age: 15
    },
    {
        name: 'Andrea',
        surname: 'Raguso',
        age: 20
    },
    {
        name: 'Giulia',
        surname: 'Semeraro',
        age: 21
    }
]

const profiles = people.map((person)=>{

    let answer;
    if(person.age>18){
        answer = ' il profilo inserito può guidare'
    } else {
        answer = ' il profilo inserito non può guidare'
    }

    return 'candidato: ' + person.name + ' ' + person.surname + ' ' +
        'età: ' + person.age + answer;

});

console.log(profiles);

