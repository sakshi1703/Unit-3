const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function simplepattern(N) {        

    for(let i=N-1; i>=0; i--){
        let bag = "";
        for(let j=i; j<N; j++){
            bag = bag + "*" + " ";
        }
        console.log(bag);
    }
}



rl.question('Enter the number: ', (N) => {
    const size = parseInt(N);
    simplepattern(N);
    // Close the readline interface
    rl.close();
});
