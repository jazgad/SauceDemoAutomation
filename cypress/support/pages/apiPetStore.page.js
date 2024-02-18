class APIPetStore {





  addPet(timestamp) {
    cy.request({
      method: 'POST',
      url: 'https://petstore.swagger.io/v2/pet',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: {
        "id": timestamp,
        "category": {
          "id": 0,
          "name": "string"
        },
        "name": "agriffon",
        "photoUrls": [
          "string"
        ],
        "tags": [
          {
            "id": 0,
            "name": "string"
          }
        ],
        "status": "available"
      }
    }).then(response => {
      // Assert response status code
      expect(response.status).to.equal(200);
      // Assert response body or any other properties
      expect(response.body.name).to.equal("agriffon");
      // Add more assertions as needed
    });
  }



  searchPetById(id) {
    cy.request({
      method: 'GET',
      url: `https://petstore.swagger.io/v2/pet/${id}`,
      headers: {
        'accept': 'application/json'
      }
    }).then(response => {
      cy.log(JSON.stringify(response.body))
      // Handle the response
      expect(response.status).to.equal(200);
      expect(response.body.id).to.equal(id)
    });
  }

  modifyPetToSold(id) {
    cy.request({
      method: 'PUT',
      url: 'https://petstore.swagger.io/v2/pet',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: {
        "id": id,
        "category": {
          "id": 0,
          "name": "string"
        },
        "name": `Sold Pet: ${id}`,
        "photoUrls": [
          "string"
        ],
        "tags": [
          {
            "id": 0,
            "name": "string"
          }
        ],
        "status": "sold"
      }
    }).then(response => {
      cy.log(JSON.stringify(response.body))
      // Handle the response
    });
  }

  searchPetByStatus(status) {


    cy.request({
      method: `GET`,
      url: `https://petstore.swagger.io/v2/pet/findByStatus?status=sold`,
      headers: {
        'accept': `application/json`
      }
    }).then(response => {
      cy.log(JSON.stringify(response.body));

    });


  }




}






module.exports = new APIPetStore();


