let exam_Promise=new Promise
(
    (resolve,reject)=>
    {
        let mark=100
        if(mark==100)
        (
            resolve()
        )
        else
        {
            reject()
        }
        
    }
)
exam_Promise.then
(
    ()=>
    {
        console.log("promise satisfied")
    }
)
.catch
(
    ()=>
    {
        console.log("promise NOT satisfied")
    }
)