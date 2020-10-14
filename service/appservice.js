var persistence = require("../persistence/PeoplePersistence");
module.exports={
    addPeople:(people)=>{
        people.fecha = new Date();
        persistence.addPeople(people);
    },getPeoples:async ()=>{
        return await persistence.getPeoples();
    }
}