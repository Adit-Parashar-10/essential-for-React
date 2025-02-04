// immutable vs mutable
// react me hum direct state change nhi kr skte is liye hum 
//ese copy nhi krenge array ya object ko......

var arr=[1,2,3,4]
var arr2 = arr

arr2.pop();

// hum is tarah se copy karenge array ko React me 
// destructuring through spread operator
var state = [1,2,3,4];

var copy = [...state];

//React me object ko ese update krenge...
//object

var sattu = {name:'adit', age:21}

var copy2 = {... sattu};// sattu ko copy2 me copy kr diya 

//copy me age change ki...
copy2.age = 22;

sattu = copy2; //ab copy2 ko sattu me copy kr diya to sattu me
// age change ho gyi...


// destructuring in objects

var obj = {name:'adit', age:22};

const {age} = obj

// destructuring in arrays

var a = [12, function(){}, 13]

var [chacha, ,halwa] = a;//chacha me 12 aayega aur halwa me 13 

 

 // map, filter 
 // dono array pr hi chlte hai aur dono ka kaam hai array pr  
 // perform krna

 var arrau = [1,2,3,4,5]

 const ans = arrau.map(val => val*5);
console.log(ans);
