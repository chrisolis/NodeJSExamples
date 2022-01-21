let bandlist = require("./bands")

for (let x in bandlist){
    //console.log(x) // x es la llave (key) que regresa cada iteracion el for in.
    //console.log(bandList[x]) //Al escribir el nombre del objeto con la llave como parametro pues podemos obtener el contenido de una propiedad del objeto. Esto es la otra manera
    // a parte de usar el . para acceder a una propiedad de un objeto. Aqui lo dice: https://www.w3schools.com/js/js_objects.asp. Es un objeto no un arreglo

    //La segunda manera de accesar a las propiedades de un objeto es util al usar como ahorita un for in o al simplemente estar recorriendo las propiedades del objeto.
    console.log(`A ${x} band is ${bandlist[x]}`) //Si solo dejaramos un bandlist.x lo que pasaria es que siempre accesariamos al contenido (hola) del atributo llamado x.
}