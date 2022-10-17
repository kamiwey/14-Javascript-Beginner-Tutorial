let myArray = [1,1,1,1,2,1,1,1,1,1,3,4];

function sing(arr){
    let return_array = "";
    arr.forEach((item, index) => {
        if (item === 1){
            return_array += ("let it be, ");
        }
        else if (item === 2){
            return_array += ("whisper words of wisdom, ");
        }
        else if (item === 4){
            return_array += ("let it be")
        }
        else {
            return_array += ("there will be an answer, ");
        }
        
    });
    return return_array;
}

//Your code above ^^^

console.log(sing(myArray));