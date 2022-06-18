displayresult=(result)=>
{
    console.log(result)
}
    smallof2num=(a,b,callbackfn)=>

{
if(a<b)
{
    callbackfn(a)
}
else
{
    callbackfn(b)
}
}
smallof2num(20,14,displayresult)