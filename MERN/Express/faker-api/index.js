const faker = require("faker");
const express = require("express");
const app = express();
const port = 8000;

const createUser = () =>({
    _id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName:faker.name.lastName(),
    phoneNumber:faker.phone.phoneNumber(),
    email: faker.internet.email(),
    password: faker.internet.password(),
});

//console.log(createUser());

const createCompany = () => ({
    _id: faker.datatype.uuid(),
    name: faker.company.companyName(),
    address: {
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country()
    }
});

//console.log(createCompany());

app.get("/api/users/new", (req, res) => {
    const newUser = createUser();
    res.json(newUser)
});

app.get("/api/companies/new", (req,res) => {
    const newCompany = createCompany();
    res.json(newCompany)
});

app.get("/api/user/company", (req,res) => {
    const newUser = createUser();
    const newCompany = createCompany();
    const response = {
        user: newUser,
        company: newCompany
    }
    res.json(response)
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );