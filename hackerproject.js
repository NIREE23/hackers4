//Author - Pratham
//Author - Pratham
/**
 * This function takes a string and a letter as a parameter
 * This function does'nt return anything, instead it prints the frequency of that letter in the passed string
 * @param {string} str 
 * @param {character} letter 
 */
const stringFreq=(str, letter)=>
{
    let count=0;
    for(let i=0;i<str.length;i++)
    {
        if(str[i]==letter)
        {
            count++;
        }
    }
    if(count==0)
    {
        console.log("Letter not found!!!");
    }
    else
    {
        console.log(`${letter} has be found ${count} times`);
    }
}