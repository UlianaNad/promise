const fs = require('fs');
const fsp = fs.promises;

console.log('run');

const run = async() => {
    await fsp.appendFile('test.txt', "Hello, dear friend!", (err) =>{
        if(err) throw err;
        console.log("File was created!");
    })

     const data = await fsp.readFile(`${__dirname}/test.txt`, 'utf-8');

     const newData = '===' + data + '===';
     
     await fsp.writeFile(`${__dirname}/test.txt`, newData);
     console.log("done");
};
run();