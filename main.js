// I created a variable that represents my age number in human years.  

var myAge = 28; 

// The variable below is able to be changed. 

var earlyYears = 2; 

earlyYears = earlyYears * 10.5 

// Below we created a new variable that equals myAge minus 2. It can be changed later. 

var laterYears = myAge - 2; 

// We multipled my laterYears by 4 to find number of dog years accounted for by later years. The multication assignment operator multiplies and assigns in a single step.  

laterYears *= 4; 

// Next I created a value called myAgeInDogYears and added earlyYears + laterYears to find that value. 

var myAgeInDogYears = earlyYears + laterYears;

// I created a variable called myName and used a built in string method .toLowerCase. This makes my name appear in it's lowercase form inside the console. 

var myName = 'Juan'.toLowerCase()  

// This next line of code I used string interpolation to replace words with variables I've given values. 

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)

