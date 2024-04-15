describe("Create user in Petstore API with invalid ID",()=>{
    it("API should give 500 error code",()=>{     
        cy.request({        
        method:"POST",
        url:"user",
        body: {
          id: "abc",
          username: "Steve1234",
          firstName: "Steve",
          lastName: "Joseph",
          email: "steve.joseph@gmail.com",
          password: "Steve1234",
          phone: "999988881",
          userStatus: 1
          },
          failOnStatusCode: false  
      }).then((response)=>{
        expect(response.status).to.equal(500);
    });
    });
    });
  