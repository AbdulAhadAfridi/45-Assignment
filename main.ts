// // ////////////////////////Task : 2 ////////////////////////////////


// // let personName:string ="Eric";
// // console.log(`Hello ${personName},would you like to learn some Python today?`);




// // ////////////////////////Task :  3 ////////////////////////////////



// // let personName:string = "Abdul Ahad";
// // // lower case
// // console.log("lowercase:",personName.toLowerCase())
// // // upper case
// // console.log("uppercase:",personName.toUpperCase())
// // // title case
// // console.log("titilecase:",personName.replace(/\b\w/g,c=> c.toUpperCase()))

// // ////////////////////////Task : 4 ////////////////////////////////



// // let quote:string =" A person who never made a mistake never tried anything new.";
// // let author:string = "Elbert Einstein";
// // console.log(`${author} once said, "${quote}"`);

// // ////////////////////////Task : 5 ////////////////////////////////




// let famous_person:string = "Elbert Einstein";
// let quote:string =" A person who never made a mistake never tried anything new.";
// let message:string = (`${famous_person} once said, "${quote}"`);
// console.log(message);

 // // ////////////////////////Task : 6 ////////////////////////////////




// let personName:string = "\t\n Abdul Ahad \n\t";
// console.log("Original:", personName);
// console.log("stripped:", personName.trim())



// // // ///////Task : 7 and Task : 8 ////////////////////////////////



// console.log(5+3);
// console.log(10-2);
// console.log(4*2);
// console.log(16/2);


// // ////////////////////////Task : 9 ////////////////////////////////




// let favouriteNumber:number= 12;
// console.log(`my favourite number is ${favouriteNumber}`);

//// // ////////////////////////Task : 10 ////////////////////////////////



// author: Abdul Ahad
// date : 1 march 2024



//// // ////////////////////////Task : 11 ////////////////////////////////




// let names : string [] = ["ahad","samad","saboor","sami"];
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);



// // // ////////////////////////Task : 12 ////////////////////////////////




// let names : string [] = ["ahad","samad","saboor","sami"];
// let message:string = "do you like to play cricket?";
// console.log(names[0]+" "= message);
// console.log(names[1]+" "= message);
// console.log(names[2]+" "= message);
// console.log(names[3]+" "= message);



//// // ////////////////////////Task : 13 ////////////////////////////////

// let transportation:string [] =["Honda Motorcycle", "Car","Honda City"];

// transportation.map((items) => console.log(`I would like to own a ${items}`));



// // ////////////////////////Task : 14 ////////////////////////////////



// let guestArray : string [] = [,"samad","saboor","sami"];
// guestArray.map((items) => console.log(`Dear ${items} , you are invited to the dinner.`));




// // ////////////////////////Task : 15////////////////////////////////


// let guestArray : string [] = ["ahad","samad","saboor","sami"];
// let canNotAttend: string = "ahad";
// console.log(canNotAttend + "can not attend the dinner");
// let newGuest : string = "faiz";
// guestArray [guestArray.indexOf(canNotAttend)]= newGuest;
// console.log(guestArray);

// guestArray.map((items)=> console.log(`Dear ${items}, you are invited to the dinner`);






// // ////////////////////////Task : 16 ////////////////////////////////





// let guestArray : string [] = ["ahad","samad","saboor","sami"];
// let canNotAttend : string = "samad";
// let newGuest : string = "faiz";
// guestArray[guestArray.indexOf(canNotAttend)]=newGuest;
// console.log(guestArray)

// guestArray.map((items) =>
// console.log(`Dear ${items},I found a bigger dinner table so I am invited more people.`);
// )
// // part 2 began
// let bGuest :string = "ali";
// guestArray.unshift(bGuest);
// console.log(guestArray);

// // part 3 middle
// let middleGuest : string ="sameer"
// let middleIndex = guestArray.length/3
// guestArray.splice(middleIndex,3,middleGuest)
// console.log(guestArray);

//  part:4 append
// guestArray.push("maaz")
// console.log(guestArray)

// // part:5
// guestArray.map((items) => console.log(`Dear ${items}, you are invited in the more people list on dinner`));







// // ////////////////////////Task : 17 ////////////////////////////////



//  Initial list of guests

// let guests: string[] = ["ali" , "ahad", "sami", "talha", "samad"];

// // Informing that only two people can be invited

// console.log("due to limited space, only two people can be invitedfor dinner");
// // Removing guests until only two names remain
// while (guests.length > 2) {
//     const removedGuest = guests.pop();
//     console.log(`sorry,${removedGuest}, you are no longer invited to dinner`)}

//     // Printing invitations to the remaining two guests
//     guests.forEach((guest)  => {
//         console.log(`Dear, ${guest}, you are still invited to dinner`.)
//     });
//     // Removing the list two names from the list
//     guests.pop();
//     guests.pop();
// // Printing the final list to confirm its empty
// console.log("final guest list", guests);




// // ////////////////////////Task : 18 ////////////////////////////////




// store the location in an arry
// let placesToVisit: string[] = ["Tokoyo" , "Pakistan" , "America" , "China" , "Japan"];

// print the array in its original order
// console.log("original order:", placesToVisit);

// • Print your array in alphabetical order without modifying the actual list.
// console.log("Alphabetical order:", [...placesToVisit].sort());

// • Show that your array is still in its original order by printing it.
// console.log("original order after sorting:", placesToVisit);

// • Print your array in reverse alphabetical order without changing the order of the original list.
// console.log("Reverse alphabatical order:",[... placesToVisit].sort().reverse());

// Show that your array is still in its original order by printing it again.
// console.log("original order after reverse sorting:", placesToVisit);


// • Reverse the order of your list. Print the array to show that its order has changed.
// placesToVisit.reverse();
// console.log("Reversed order:", placesToVisit);

// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// placesToVisit.reverse();
// console.log(" Back to original order:", placesToVisit);


// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// placesToVisit.sort(a , b ) => b.localeCompare(a);
// console.log("Sorted in reverse alphabatical order:", placesToVisit);




// // ////////////////////////Task : 19 ////////////////////////////////

// let invitation : string [] = ["ali","bilal"]

// let count_invitation : number = invitation.length

// console.log(`${count_invitation} people will come to the dinner`)



// // ////////////////////////Task : 20 ////////////////////////////////

// let country: string [] = ["Australia","Pakistan","India","China"
// ] 
// console.log("List of country");
// console.log(country);


// // ////////////////////////Task : 21 ////////////////////////////////

// let  person : {
//     name:string,
//     age:number,

// }

// person = {
//     name : "Abdul Ahad",
//     age: 18,
// }

// console.log(person);

// // ////////////////////////Task : 22 ////////////////////////////////


// const days : string [] = ["monday","tuesday","wednesday","thursday","friday",
// "saturday","sunday"
// ]

// // console.log(days{7});
// console.log(days[6]);



//// // ////////////////////////Task : 23 ////////////////////////////////

// let car = "subaru";
// console.log( car == "subaru")
// console.log( car != "subaru");
// console.log( car == "Subara")
// console.log( car == "subaru");
// console.log( car.length == 6)
// console.log( car.length == 10);

// console.log( 10>5)
// console.log( 5>2)
// console.log( 2>5)
// console.log( 3<4)




//// // ////////////////////////Task : 24 ////////////////////////////////

// let name1 : string = "Abdul"
// let name2 : string = "Abdul Ahad"
// let name3 : string = "Abdul Ahad Afridi"

// if (name1 == name3){
//     console.log("Names are equal")
// } else {
//     console.log("Names are not equal")
// }
// if (name1 != name2){
//     console.log("Names are equal")
// }

// if (name1 != name3){
//     console.log("Names are equal")
// }



// let age1 : number = 18;
// let age2 : number = 20

// if (age1 == 18){
//     console.log("eligible for NIC")
// }
// if (age2 != 20){
//     console.log(" not eligible for NIC")
// }
// if(age1 <= age2){
//     console.log("younger")
// }
// if(age2 >= age1){
//     console.log("elder")
// }

// if (age1 == 18 && age2 == 20){
//     console.log("eligible for NIC")
// }

// if (age1 == 18 || age2 == 20){
//     console.log("  eligible for NIC")
// }

// let country : string[] = ["Pakistan","China","India"]
// // if (country.includes("Pakistan")){
// //     console.log("Pakistan Zindabad")
// // }

// if (!country.includes("America")){
//     console.log("America is not include in the list")
// }





//// // ////////////////////////Task : 25 ////////////////////////////////

// let alienColor = "green";

// if (alienColor == "green"){
//     console.log("you earn 5 point")
// }

// let alienColor = "yellow";

// if (alienColor == "green"){
//     console.log("no output")
// }



//// // ////////////////////////Task : 26 ////////////////////////////////


// let alienColor1 = "green";

// if (alienColor1 == "green"){
//     console.log("player just earned 5 points for shooting the alien")
// } else {
//     console.log("player just earned 10 points")
// }
// let alienColor2 = "red";

// if (alienColor2 == "green"){
//     console.log("player just earned 5 points for shooting the alien")
// } else {
//     console.log("player just earned 10 points")
// }

// // ////////////////////////Task : 27 ////////////////////////////////


// let alienColor = "green";

// if (alienColor == "green"){
//     console.log("get 5 points")
// } else if (alienColor == "yellow"){
//     console.log("get 10 points")
// } else {
//     console.log("get 15 points")
// }

// // // ////////////////////////Task : 28 ////////////////////////////////




// let age = 20;
// if(age < 2){
//     console.log("you are a baby")
// } else if(age< 4){
//     console.log("you are a toddler")
// } else if (age < 13){
//     console.log("you are a kid")
// } else if (age < 20){
//     console.log("you are a teenager")
// } else if (age < 65){
//     console.log("you are a adult")
// } else {
//     console.log("you are older")
// }





// // ////////////////////////Task : 29 ////////////////////////////////





// let favFruit : string[] = [,"kiwi","apple","orange"]

// if(favFruit.includes("kivi")){
//     console.log("kivi")
// }

// if(favFruit.includes("apple")){
//     console.log("apple")
// }
// if(favFruit.includes("orange")){
//     console.log("orange")
// }
// if(favFruit.includes("pineapple")){
//     console.log("you really like banana")
// }
// if(favFruit.includes("peach")){
//     console.log("you really like banana")
// }





//// // ////////////////////////Task : 30 ////////////////////////////////


// let users : string [] = ["admin","Eric","ahad","ali"]
// for(let user of users)
// if (user === "admin"){
//     console.log("Hello admin,would you like to see a status report")
// } else {
//     console.log(` Hello ${user}, thank you for logging in again`)
// }





/// // ////////////////////////Task : 31 ////////////////////////////////




// let users : string [] = ["admin","Eric","ahad","ali"]
// users = [] 
// if (users.length === 0) {
//     console.log("we need to find some users!")
// }




// // // ////////////////////////Task : 32 ////////////////////////////////

// let current_users : string [] = ["AdMin","ErIc","AlI","Ahad","Wahab"];

// let new_users : string [] = ["Abdul","AdMin","Samad","AlI","Saboor"];

// new_users.forEach(newUsername => {
//     let lowercase : string = newUsername.toLowerCase();
//     if(current_users.map(c_user => c_user.toLowerCase()).includes(lowercase)){
//         console.log(`The username ${newUsername} is not available .Please write adifferent username`)

//     } else {
//         console.log(`The username ${newUsername} is available` )
//     }
   
// });




// // // ////////////////////////Task : 33 ////////////////////////////////




// let numbers : number[] = [1,2,3,4,5,6,7,8,9];
// for(let num of numbers){
//     let ordinalEnding : string ;

// if(num === 1){
//     ordinalEnding = "st"
// } else if(num === 2){
//     ordinalEnding = "nd"
// }
// else if(num === 3){
//     ordinalEnding = "rd"
// }
// else {
//     ordinalEnding = "th"
// }

// console.log(`${num}${ordinalEnding}`)
// }






// // ////////////////////////Task : 34 ////////////////////////////////


// let pizzas : string[] = ["pepperoni","cuban","bbq chicken"];

// for( let pizza of pizzas ){
//     console.log(` I like ${pizza} pizza.`);

// }
// console.log("I really like pizza");






// ///////////////////////////////task: 35 /////////////////////////



// let animals : string[] = ["Dog","lion","cat"]

// for(let animal of animals){
//     console.log(`A ${animal} would make a great pet.`)
// }
// console.log("Ant of these animals would make a great pet");


// ////////////////////////////////task: 36///////////////////////



// function make_shirt(size:string , text:string){
//     console.log(`Creating a ${size} with the message : ${text}`)
// }

// make_shirt("large","Hello world")
// make_shirt("medium","Hello world")
// make_shirt("small","Hello world")

// // ////////////////////////Task : 37 ////////////////////////////////


// function make_shirt(size:string = "large" , text:string = "I love Typescript"){
//          console.log(`Creating a ${size} with the message : ${text}`)
//      }

// make_shirt();
// make_shirt("medium");
// make_shirt("small","I love javascript");



// // ////////////////////////Task : 38 ////////////////////////////////


// function describr_city(city:string , country: string = "Default Country"){
//     console.log(`${city} is in ${country}`)
// }

// describr_city("Karachi","Pakistan")
// describr_city("Tokyo","Japan")
// describr_city("Paris")




// // ////////////////////////Task : 39 ////////////////////////////////




// function describr_city(city:string , country: string){
//     return `${city},${country}`;
// }


// console.log(describr_city("karachi","Pakistan"));

// console.log(describr_city("Tokyo","Japan"));

// console.log(describr_city("Paris","France"));


// // ////////////////////////Task : 40 ////////////////////////////////



// function make_album (artist: string , title: string , tracks?:number){
//     const album : {artist: string , title: string , tracks?:number} = {
//         artist : artist,
//         title : title
//     }
//     if(tracks !== undefined){
//         album.tracks = tracks
//     }
//     return album
// }


// const album1 = make_album("Artist 1","Album Title 1");
// console.log(album1);


// const album2 = make_album("Artist 2","Album Title 2");
// console.log(album2);

// const album3 = make_album("Artist 3","Album Title 3",12);
// console.log(album3);







// // ////////////////////////Task : 41 ////////////////////////////////





// let magician : string[] = ["Herry Portr","Ali","wahid","Talal"]

// function show_magicians(magicians : string[]){
//     magicians.forEach(element => {
//         console.log(element);
//     });
// }


// show_magicians(magician);


// // ////////////////////////Task : 42 ////////////////////////////////


// let magician : string[] = ["Herry Portr","Ali","wahid","Talal"]

// function make_great(magicianArray : string[]){
//       for(let i=0; i<magicianArray.length; i++){
//      magician[i] =   `The great` + magicianArray[i]
//       }
// }




// function show_magicians(magicians : string[]){
//     magicians.forEach(element => {
//         console.log(element);
//     });
// }

//  make_great(magician);

// show_magicians(magician);



// // ////////////////////////Task : 43 ////////////////////////////////




// let magician : string[] = ["Herry Portr","Ali","wahid","Talal"]

// function copyArray(arr:string[]){
//     return [...arr]
// }

// function make_great(magicianArray : string[]){
//       for(let i=0; i<magicianArray.length; i++){
//         magicianArray[i] =   `The great` + magicianArray[i]
//       }
// }


// function show_magicians(magicians : string[]){
//     magicians.forEach(element => {
//         console.log(element);
//     });
// }

// const copyMagicianArray = copyArray(magician);
//  make_great(copyMagicianArray);

// console.log("This is my original array")
// show_magicians(magician);

// console.log("This is mymodified original array")
// show_magicians(copyMagicianArray);






// //////////////////////////////task: 44/////////////////////////////////////


// function makeSandwich(item : string[]){
//     console.log("\nmaking your sandwich with");
//     item.forEach(element => console.log ("- " + element))

// console.log(`Enjoy your sandwich\n`);
// }

// makeSandwich(["ham","cheese","lettuce"])


// makeSandwich(["butter","jelly",])


// makeSandwich(["May","ketchup","bread"])


// // ////////////////////////Task : 45 ////////////////////////////////


//                                                         //spread operator    //
// function storeCarInfo(manufacture:string , modelName:string , ...extraOption: { [key : string]: any } [] ):
// object {

// const carInfo = {
//     manufacture,
//     modelName,
//     ...Object.assign({},...extraOption)
// }

// return carInfo;
// };

// let answer = storeCarInfo("Honda","Civic",{color:"black"},{features : ["navigation","Power Window"]})

// console.log(answer);



