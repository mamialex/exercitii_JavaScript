console.log(
  '======================================   exercitiu   3   ==================================\n\n\n\n'
)

let animal1 = {
  name: 'Aki',
  type: 'Dog',
  age: 5,
  race: 'Shiba Inu',
//speak() : Va printa "Bark! Bark! Bark!"
speak: function(){
    console.log("Bark! Bark! Bark!")
},
//details() : Va printa "Type:{type} Name:{name} Age:{age} Race:{race}"
details: function() {
    console.log(`Type:${type} Name: ${name} Age: ${age} Race: ${race}`)
},
//howOldAmI(): Va printa varsta animal1
howOldAmI: function() {
    console.log(`Varsta lui ${name} este ${age}`)
}
}
console.log(animal1.speak+"\n")
console.log(animal1.details)
console.log(animal1.howOldAmI)


let animal2 = {
  name: 'Biiiird',
  type: 'Parrot',
  age: 1,
  race: 'Lovebird'
}
//   Se cere pentru animal2 adaugarea urmatoarelor proprietati si metode si apelarea metodelor:
//       friend : proprietate cu valoarea primului obiect (animal1)
//       myFriendIs() : Va printa numele obiectului prorietii friend
//       amIYoungerThanFriend() : Va prinda "True" daca (vreau sa folosim un if) varsta este mai mica decat
//                    varsta proprietii friend altfel vom printa "False"
