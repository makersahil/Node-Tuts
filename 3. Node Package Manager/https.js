const axios = require('axios');
axios.get('https://google.com')
    .then((res) => {
        console.log(res.data);
    })
    .catch((err) => {
        console.log(err)
    })
    .then(() => {
        console.log('All fucking done!');
    }); 