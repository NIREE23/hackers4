//Author - Pratham
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