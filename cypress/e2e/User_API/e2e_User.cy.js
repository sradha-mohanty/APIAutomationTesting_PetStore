describe("POST, GET and DELETE users in Petstore API",()=>{
    it("POST request to User API",()=>{
      cy.fixture("userList.json").then((data)=>{
        const requestBody=data;
        for(let i=0;i<data.length;i++){        
        cy.request(
        {
        method: "POST",
        url:"user",
        body:requestBody[i]
        }
        ).then((response)=>{
        expect(response.status).to.equal(200);
        expect(response.headers).to.have.property("content-type","application/json");
    });
   }
    });
    });
    it("GET Request from User API",()=>{
      cy.fixture("userList.json").then((data)=>{
        const requestBody=data;
        for(let i=0;i<data.length;i++){ 
        cy.request("GET", `user/${requestBody[i].username}`).then((response) => {
        expect(response.status).to.equal(200);
      });
    }
    });
    });
    it("DELETE Users",()=> {
      cy.fixture("userList.json").then((data)=>{
        const requestBody=data;
        for(let i=0;i<data.length;i++){ 
      cy.request("DELETE", `user/${requestBody[i].username}`).then((response) => {
        expect(response.status).to.equal(200);
      });
    }
    });
    });
    });