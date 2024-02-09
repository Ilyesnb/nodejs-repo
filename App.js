const http = require("http")
const path = require("path")
const fs = require("fs");
const PORT = 3009

const firstNames = [
    "Emma", "Noah", "Olivia", "Liam", "Ava", "William", "Isabella", "James", "Sophia", "Benjamin",
    "Charlotte", "Elijah", "Mia", "Lucas", "Amelia", "Oliver", "Harper", "Alexander", "Evelyn", "Ethan",
    "Abigail", "Michael", "Elizabeth", "Daniel", "Sofia", "Matthew", "Victoria", "Aiden", "Emily", "Joseph",
    "Madison", "Samuel", "Scarlett", "Jackson", "Aria", "David", "Grace", "Sebastian", "Lily", "Carter",
    "Zoey", "Wyatt", "Penelope", "Jayden", "Riley", "Gabriel", "Nora", "John", "Chloe", "Isaac"
];
const lastNames = [
    "Smith", "Johnson", "Williams", "Brown", "Jones", "Davis", "Miller", "Wilson", "Taylor", "Anderson",
    "Martinez", "Thompson", "Garcia", "Hernandez", "Lewis", "Lee", "Walker", "Hall", "Allen", "Young",
    "Scott", "King", "Wright", "Adams", "Green", "Hill", "Baker", "Nelson", "Carter", "Mitchell", "Perez",
    "Clark", "Thomas", "White", "Harris", "Martin", "Jackson", "Lopez", "Rodriguez", "Harris", "Moore",
    "Turner", "Phillips", "Campbell", "Parker", "Evans", "Edwards", "Collins", "Stewart", "Sanchez"
];
const generateRandomName = () =>{
    const randomFirstName = Math.floor(Math.random()*firstNames.length)
    const randomLastName = Math.floor(Math.random()*lastNames.length)
    const firstRandom = firstNames[randomFirstName]
    const lastRandom = lastNames[randomLastName]
    return  `${firstRandom} ${lastRandom}`;   
}
console.log(generateRandomName());
const server = http.createServer((req,res)=>{
    // fs.readFile(path.join(__dirname + "./index.html"));
    let url = req.url
    if(url=== "/"){   
        res.write(generateRandomName())
        res.end()
    }
    console.log(generateRandomName());
})
server.listen(PORT,()=>{
    console.log(`listening to the server on ${PORT}`);
});