let fs = require("fs")

fs.readFile("movies.txt", "utf8", (err,datos) => {
    if (err) {
        console.log(error);
    }
    else {
        console.log(datos);
    }
})