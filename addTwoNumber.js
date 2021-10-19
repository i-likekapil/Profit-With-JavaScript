/*
//add two numbers
function add(a,b)
{
	return a+b
}

console.log(add(4.6,6.6))

// convert min to sec
function convertMinToSec(min){
	return min*60;
}
console.log(convertMinToSec(60))
console.log(convertMinToSec(2))

//convert age to sec
function convertAgeToSec(year){
	return year*365*24*60*60;
}
console.log(convertAgeToSec(1))
console.log(convertAgeToSec(23))

// return first item of array

function getFirstItem(items){
	return items[0];
}
items=[2,1,3,4,1,98]
console.log(getFirstItem(items))

//if else BadMovieGoodMovie
function BadGoodMovie(rating){
	if(rating >=7) return "Good Movie";
	return "Bad Movie";
}
console.log(BadGoodMovie(4.6));
console.log(BadGoodMovie(8));

//check string is empty or not
function isEmptyString(str){
	if(str === "") return "True";
	return "False";

}
console.log(isEmptyString(""))
console.log(isEmptyString("JavaScript"))

//find min and max in array
function findMinMax(arr){
	let min=arr[0],max=arr[0];
	for(let i in arr){
		//console.log(arr[i])
		if(min>arr[i]) min = arr[i];
		if(max<arr[i]) max = arr[i];
	}
	console.log("min : ",min);
	console.log("max : ",max);
}

let arr=[1,-2,30,5,607,12,4,-1];
findMinMax(arr); 

// sorting
function sortByBestMoviesFirst(arr){
	for(let i=0;i<arr.length-1;i++){
		let max_num=arr[i];
		let max_loc = i;
		for(let j=i;j<arr.length;j++){
			if(max_num<arr[j]) {
				max_num = arr[j];
				max_loc = j;
			}
		}
		arr[max_loc]=arr[i];
		arr[i]=max_num;

	}
	return arr;
}
let arr=[67,1,89,3,5,8,2];
console.log(sortByBestMoviesFirst(arr));
*/



//63 -> alfred
//64 -> chrome inspector tool
//65 -> zsh
//66 -> vim
//69 -> spectacle
//70 -> dropler


// ES6 ------------------------------------------------------


//72 onwards

/*
var - global and function scope
let - block scope and value is change
const - block scope and value does not change

templete literals - string interpolation => ``

let name ="kapil"
console.log(`Hi, i am ${name}`); // console.log("Hi, i am ",name) //both are same

//75 Arrow function
add = (a,b) => { return a+b }
console.log(add(5,7))

//76 default parameters

printGreeting = (fName = "Everyone") => {console.log(`Hello ${fName}`)}

printGreeting()
printGreeting("Kapil Kaushik")

//77 Iterations -alternative way of loops

of, forEach, map

const arr=[1,98,67,7,8,9,9,2,3,1]
let sum=0;
for (var i = 0; i < arr.length; i++) {
	sum+=arr[i]
}
console.log(sum)//205
sum =0

//of 
for (let a of arr){
	sum+=a
}
console.log(sum)//205
sum =0

arr.forEach((a)=>{
	sum+=a
})
console.log(sum)//205
sum =0

arr.map((a)=>{
	sum+=a
})
console.log(sum)//205
sum =0

//78 Destructuring objects

//traditional way
let fullName={
	firstName : "Kapil",
	lastName :"Kaushik"
}
//let firstName = fullName.firstName
//let lastName = fullName.lastName
//ES6
let ={firstName,lastName} = fullName
console.log(firstName,lastName)

let user=[
{
	firstName : "Kapil",
	lastName :"Kaushik"
},
(user)=>{
	console.log("I set the user: ",user)
}
]
	
let [getUser, setUser] = user;
console.log(getUser);
setUser({firstName : "Mohit",lastName :"Rajput"})
console.log(getUser);

//79 convert text editor to ES6

//80 promises - 


*/

let promise = new Promise((resolve, reject)=>{
	console.log("start")
	setTimeout(()=>{
		// resolve({
		// 	first:"Kapil",
		// 	last:"Kaushik"
		// })
		reject("something went wrong")
	},1000)
})

promise.then((response)=>{
	console.log("here is response after 1 sec",response)
}).catch((error)=>{
	console.log(error)
})










