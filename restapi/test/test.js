
let chai = require ("chai");
let chaiHttp = require ("chai-http");
let server = require ("../index");


chai.should();

chai.use(chaiHttp);

describe ('data' ,() => {
    
     /************************** Test the GET route *****************************/
    describe("/getusers",() => {
        it("It should get all the data", (done) => {
            chai.request(server)
            .get("/getusers")
            .end((err, response) => {
                 response.should.have.status(200);
                 response.body.should.be.an('object');
                 console.log(response.body);
             done();
            })
        })
    })
  
      
     /********************************* Test the GET (by id) route *****************************/

     describe("/getuserid/id",() => {
        it("It should get a data by id", (done) => {
            chai.request(server)
            .get("/getuserid/3")
            .end((err, response) => {
                console.log(response.body);
                 response.should.have.status(200);
                 response.body.should.be.an('object');
                 response.body.data[0].should.have.property('id');
             done();
            })
        })
    })
      
     /********************************* Test the DELETE (by id) route *****************************/

     describe("/delete/id",() => {
        it("It should delete a data by id", (done) => {
            chai.request(server)
            .delete("/delete/6")
            .end((err, response) => {
                console.log(response.body);
                 response.should.have.status(200);
                 response.body.should.be.an('object');
             done();
            })
        })
    })
      
     /******************************** Test the POST route **********************************/
     describe("/addusers",() => {
        it("It should post new data", (done) => {
           const data = [ {
                "id": 5,
                "FirstName": "karan",
                "LastName": "Sadhwani",
                "address": "Nashik",
                "salary": 25000
            }]
            chai.request(server)
            .post("/addusers")
            .send(data)
            .end((err, response) => {
                 response.should.have.status(200);
                 response.body.should.be.an('object');
                 console.log(response.body);
             done();
            })
        })
    })
  
      
      
     /********************************************** Test the PUT route *************************************/
     describe("/update/:id",() => {
        it("It should put new data", (done) => {
           const data =  {
                "id": 5,
                "FirstName": "Vaishnavi",
                "LastName": "Avhad",
                "address": "Nashik",
                "salary": 25000
            }
            chai.request(server)
            .put("/update/5")
            .send(data)
            .end((err, response) => {
                 response.should.have.status(200);
                 response.body.should.be.an('object');
                 console.log(response.body);
             done();
            })
        })
    })
});