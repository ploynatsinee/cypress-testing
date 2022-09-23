import 'cypress-file-upload'

describe("empty spec", () => {
  it("visit website", () => {
    cy.visit("https://fitfriends.vercel.app");
  });
  it("username input", () => {
    cy.get(":nth-child(1) > input").type("ploynatsinee");
  });
  it("password input", () => {
    cy.get(":nth-child(2) > input").type("1234");
  });
  it("click button signin", () => {
    Cypress.on('uncaught:exception', (err) => {
      cy.get("form > button").click();
    // cy.wait(9000);
    cy.intercept('/login').as('login')
    })
    
  });
  it("click add post", () => {
    
    // cy.visit('/addpost')
    cy.wait('@login').then((interception) => {
      cy.get(".Nav-ul > :nth-child(2) > a").wait(9000).click();
    })
  });
  it("select sport", () => {
    cy.wait(5000);
    cy.intercept('/users/login')
    cy.get("select").select("running");
  });
  it("location", () => {
    cy.get(".locationInput").type("Bangkok");
  });
  it("caption", () => {
    cy.get("textarea").type("I cannot imagine living and not running.");
  });
  it("date input", () => {
    cy.get(".dateInput").click().type("2022-09-22");
  });
  it("time start", () => {
    cy.get(":nth-child(5) > .inputTime").click().type("2022-09-22T08:30");
  });
  it("time end", () => {
    cy.get(":nth-child(6) > .inputTime").click().type("2022-09-22T09:55");
  });
  it("choose photo", () => {
    // cy.get('.inputPhoto').click()
    // cy.fixture("run.jpeg").then((fileContent) => {
      // cy.get(".inputPhoto").first().upload(
      //   { fileContent, fileName, mimeType: "image/jpeg" },
      //   { subjectType: "drag-n-drop" }
      // );
      const yourFiturePath = "run";

      cy.get(".inputPhoto").attachFile(yourFiturePath);
      // cy.get(".saveButton").click();
    // });
  });
});
