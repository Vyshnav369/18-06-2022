displayresult=(result)=>{
    console.log(result)
}

oddorevenof2num=(a,callbackfn)=>
{
if(a%2==0)
{
callbackfn ("even number")
}

else
{
callbackfn ("odd number")
}
}

oddorevenof2num(20,displayresult)