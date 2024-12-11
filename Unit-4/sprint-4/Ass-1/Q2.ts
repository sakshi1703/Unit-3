
let Identifier : string | number 

function getIdentifierInfo(id: Identifier){
    console.log("Identifier is a string. Value :" {id});
    console.log("Identifier is a number. Value :" {id})
}

getIdentifierInfo("ABC123"); 
getIdentifierInfo(101);  


// getIdentifierInfo("ABC123"); // Output: Identifier is a string. Value: ABC123
// getIdentifierInfo(101);      // Output: Identifier is a number. Value: 101

