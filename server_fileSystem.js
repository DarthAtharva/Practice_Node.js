/* ----------------------------------------------
READ FILE
-------------------------------------------------*/

// import fs from 'fs';

// /* readFile() - Callback */
// fs.readFile('./fileSystemTest.txt', 'utf8', (err, data) => {
    
    //     if(err) throw err;
    //     console.log(data);
    
    // });
    
    // /* readFileSync() - Synchronous version */
    
    // const data = fs.readFileSync('./fileSystemTest.txt', 'utf-8');
    // console.log(data);
        
// import fs from 'fs/promises';

// /* readFile() - Promise .then() */
// fs
//     .readFile('./fileSystemTest.txt', 'utf-8')
//     .then((data => console.log(data)))
//     .catch((err) => console.log(err));

// /* readFile() - async/await .then() */
// const readKrle = async () => {

//     try{

//         const data = await fs.readFile('./fileSystemTest.txt', 'utf-8');
//         console.log(data);

//     }catch(err){

//         console.log(err);

//     }

// };

// readKrle();

/* ----------------------------------------------
WRITE FILE
-------------------------------------------------*/

import fs from 'fs/promises';

const writeKrle = async () => {

    try{

        await fs.writeFile('./fileSystemTest.txt', 'General Kenobi...');
        console.log('File written...');

    }catch(err){

        console.log(err);

    }
};

writeKrle();