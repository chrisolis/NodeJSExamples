var axios = require("axios");

axios.get("https://reqres.in/api/users")

.then ((response) =>{
    console.log(response.data)
})