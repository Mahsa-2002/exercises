function CleanObject(obj) {
    for (let key in obj) {
        if (obj[key] === null || obj[key] === undefined) {
            delete obj[key];
        }
    }
    return obj;
}

let person = {
    name: "Mahsa",
    family: "Vafaie",
    age: null,
    email: undefined,
    city: "Mashhad"
};

let cleaned = CleanObject(person);
console.log(cleaned)