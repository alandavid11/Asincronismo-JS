const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

fetchData(API).then(data =>{
    console.log(data.info.count);
    return fetchData(`${API}${data.results[1].id}`)
}).then(data => {
    console.log(data.name)
    console.log(data.status)
    console.log(data.species)
    console.log(data.gender)
    return fetchData(data.location.url)
}).then(data => {
    console.log(data.name)
}).catch(err => console.error(err));