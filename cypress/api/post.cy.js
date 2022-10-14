describe("POST /characters", () => {

    before(() => {
        cy.request({
            method: "POST",
            url: "/sessions",
            body: {
                email: "adelon2@qacademy.io",
                password: "qa-cademy"
            }
        }).then((response) => {
            expect(response.status).to.eql(200);
            cy.log(response.body.token);
            Cypress.env('token', response.body.token);
        })
    });

  it("should create a new character", () => {
    const character = {
      name: "Wade Wilson",
      alias: "Deadpool",
      team: ["x-men", "agency x"],
      active: true,
    };

    cy.request({
      method: "POST",
      url: "/characters",
      body: character,
      headers: {
        Authorization: Cypress.env('token')
      }
    }).then((response) => {
      expect(response.status).to.eql(201);
    });
  });
});
