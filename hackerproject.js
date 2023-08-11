
var person={
    name:"Krithika",
    age:23,
    adress:"Mangalore",
    profession:"Trainee",
}

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