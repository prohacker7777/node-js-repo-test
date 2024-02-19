const {readFile,writeFile} = require('fs');

console.log("Starting first task");
readFile('./content/first.txt', 'utf-8',(err, result) => {
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./content/result-async.txt', 
        `Here is the result ${first}, ${second} this is 
        actually
        done in an 
        async manner using callbacks`,
        {flag: 'w'},
        (err,result) => {
            if(err){
                console.log(err);
                return;
            }
            console.log("Done with above task");
        })
    })
})
console.log("Starting next task");