function removeCharacters(str, arrToDelete) {

   let result = ""
    for(let i = 0; i < str.length; i++) {
        if(!arrToDelete.includes(str[i])) {
            result += str[i]
        }
    }
    console.log(result)
}

removeCharacters("hello world", ["l", "d"]);

