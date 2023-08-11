//Function is used to check if a property exists in a object and check if the property has certain value.
var person={
    name:"Krithika",
    age:23,
    adress:"Mangalore",
    profession:"Trainee",
}

/**
 * 
 * @param {*} key- is the property to be checked 
 * @param {*} value- is the value to be checked if the key contains elements
 * @returns boolean value if object has that key and if the key has certain value
 */
function prop_exists(key,value){
    console.log(person[key])
    if(person.hasOwnProperty(key)&&person[key]==value){
        
        return true;
    }
    else{
        return false;
    }
}

console.log(prop_exists("name","Krithika"));