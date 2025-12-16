
 const fs = require("fs");

// console.log("Start")
// fs.writeFileSync('task1.txt', "Sync Task 1")
// console.log("end")




// const data= fs.readFileSync('task1.txt', 'utf-8')
// console.log(data)


// fs.appendFileSync('task1.txt', "\nAdded form task3")




fs.unlink("task1.txt", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("File Deleted Successfully!");
});



