class User {
  constructor (nume, prenume, varsta, hobbies) {
    this.nume = nume
    this.prenume = prenume
    this.varsta = varsta
    this.hobbies = hobbies
  }
  speak(bla) {
      console.log(bla)
  }
}

const ale = new User('Ivan', 'Alexandra', 37, ['programming', 'gaming', 'hikking'])
const sofia = new User('Fraccaro', 'Sofia', 8, ['Front-end Developer'])
const marissa = new User('Fraccaro', 'Marissa', 28, ['gaming', 'cicling'])
const mihai = new User('Puleanu', 'Mihai', 18, ['gaming', 'cicling'])
const maria = new User('Aghinitei', 'Maria', 7, ['gaming', 'hikking'])

let users = []
users.push(ale)
users.push(sofia)
users.push(marissa)
users.push(mihai)
users.push(maria)

function ifMihai (objUser) {
  if (objUser.prenume === 'Mihai') {
    console.log(`Printam user cu numele Mihai:`)
    console.log(objUser)
  }
}

function legalAge (objUser) {
  if (objUser.varsta > 18) {
    console.log(`Printam user cu varsta legala:`)
    console.log(objUser)
  }
}

function hobby (objUser) {
  if (objUser.hobbies.includes('Front-end Developer')) {
    console.log(`Printam user cu hobby de Front-end Developer:`)
    console.log(objUser)
  }
}
// log toti utilizatorii cu prenumele Mihai
for(i in users) {
    ifMihai(users[i])
    console.log("\n\n\n")
}
// log toti utilizatorii cu varsta mai mare ca 18
for(i in users) {
  legalAge(users[i])
  console.log("\n\n\n")
}
// log toti utilizatorii care au in hobiuri "Front-end Developer"
for(i in users) {
  hobby(users[i])
}
console.log("\n\n\nPrintam toate prenumele utilizatorilor:")

// log toate prenumele utilizatorilor
for(i in users) {
  console.log(`___ ${users[i].prenume} ___`)
}
