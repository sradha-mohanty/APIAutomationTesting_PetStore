import { storeData } from'../commonData/store.js';

describe("DELETE order from Store API",()=>{
  beforeEach(()=> {
    cy.createOrder(storeData);
  });
    it("Order Details should be deleted",()=>{
      cy.request("DELETE", `store/order/${storeData.id}`).then((response) => {
      expect(response.status).to.equal(200);
    });
    });
    it('API should return 404 when the orderId is invalid',()=>{
      cy.request({
        method:"DELETE",
        url: "store/order/wrongid",
        failOnStatusCode: false
        
      }).then((response) => {
        expect(response.status).to.equal(404);
      });
    });
    it('API should return 404 error if the id is not present',()=>{
      cy.request({
        method: "GET",
        url: "store/order/7896",
        failOnStatusCode: false

      }).then((response) => {
        expect(response.status).to.equal(404);
      });
    });
});