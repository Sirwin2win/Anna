/*
Error is a part of JavaScript program. It could occur in different ways. Error handling
talks about how the error could be managed so that it doesn't crash our program
Syntax
try{
// the javascript code to try out
}catch(error){
// block of code handling the error
}

const error = {
    type:"The type of error",
    message:"Message related to the error"
}
*/
try {
    console.lo("Hello world")
} catch (err) {
    console.log("Something went wrong: " +err.message)
}
console.log("Hi")
