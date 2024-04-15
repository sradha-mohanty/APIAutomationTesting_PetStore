import { storeData } from '../commonData/store.js';
describe("POST, GET and DELETE stores in Petstore API",()=>{
    it("POST: Create order for Store API",()=>{
        cy.request(
        {
        method: "POST",
        url:"store/order",
        body: storeData,
        header:{
        "content-type":"text/xml",
        }
        }).then((response)=>{
        expect(response.status).to.equal(200);
        expect(response.headers).to.have.property("content-type","application/json");
    });
  });
  it('GET the order details from Store API', () => {
    cy.request(
    {
      method:"GET",
      url:`store/order/${storeData.id}`,
      failOnStatusCode: false
    }
  ).then((response) => {
      expect(response.status).to.equal(200);
    });
  });
    it("DELETE the order details from Store API",()=> {
      cy.request(
        {
            method:"DELETE",
            url:`store/order/${storeData.id}`,
            failOnStatusCode: false
        }
      ).then((response) => {
        expect(response.status).to.equal(200);
    });
    });
  });