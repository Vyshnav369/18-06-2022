large2Num=(a,b)=>
{
if(a>b)
{
    return a
}
else
{
    return b
}
}
small2Num=(a,b)=>
{
if(a<b)
{
    return a
}
else
{
    return b
}
}

largeBtnEvent=()=>
{
    var x=parseInt(document.getElementById("num1").value)
    var y=parseInt(document.getElementById("num2").value)
    var z=large2Num(x,y)
    document.getElementById("result").innerText=z
}
smallBtnEvent=()=>
{
    var x=parseInt(document.getElementById("num1").value)
    var y=parseInt(document.getElementById("num2").value)
    var z=small2Num(x,y)
    document.getElementById("result").innerText=z
}
