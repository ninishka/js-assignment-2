//number array
const amount = [2, 3, 6, 10, 13]
console.log('amount', amount[0] + amount[1] + amount[2] + amount[3] + amount[4])

let sum = 0;
amount.forEach(item => sum += item)
console.log('sum', sum)

amount.forEach(item => console.log('item', item))




//object array
const arr = [
  { 
    name: 'Nini',
    age: 20,
    address: 'Here',
  },
  { 
    name: 'Nini',
    age: 20,
    address: 'Here',
  },
  { 
    name: 'Nini',
    age: 20,
    address: 'Here',
  },
]

const str = 'My name is'
console.log('message:', str, arr[0].name)

const num = 'My age is'
console.log('message:', num, arr[1].age)


const addr = 'my address is'
console.log('addr:', addr, arr[2].address)


//if-else
const teenager = "i am a teenager";
const addult = "i am an addult";
console.log('arr', arr[2].age > 18)

if (arr[2].age > 18) {
  console.log(addult)
} else {
  console.log(teenager)
}

//weekdays

const currentDay = new Date().getDay(); 

switch (currentDay) {
 case 0:
    console.log("Sunday");
    break;
 case 1:
    console.log("Monday");
    break;
 case 2:
    console.log("Tuesday");
    break;
 case 3:
    console.log("Wednesday");
    break;
 case 4:
    console.log("Thursday");
    break;
 case 5:
    console.log("Friday");
    break;
 case 6:
    console.log("Saturday");
    break;
 default:
    console.log("Invalid day");
}














// const arr2 = [
//   'string',
//   5,
//   { key: 'value' },
//   [1241],
//   false,
//   undefined
// ]

// console.log('arr2', arr2)


// if (arr[0].name === 'Nini') {
//   console.log(true)
//  } else {
//   console.log(false)
//  }
 