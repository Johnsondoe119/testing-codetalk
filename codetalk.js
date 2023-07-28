// 1. What Cypress is and why you should use it?

const { describe } = require("node:test");

/*Cypress is a front-end testing framework built specifically for the modern web.
 It runs tests directly in the browser and provides interactive debugging tools,
  making UI testing fast, reliable, and developer-friendly.*/

// 2. What types of tests is Cypress designed for?

/*
Cypress is optimized for front-end testing of modern web applications,
 supporting end-to-end, integration, and unit testing. It runs tests directly in the browser to
  simulate real user flows from start to finish, while also handling stubbing and debugging internally to simplify test creation and execution.*/

// 3. Write a test that visits the URL https://www.roadtohire.org/ and explain your code.

<reference types="cypress" />;

describe("Visit Road to Hire website", () => {
  //define the test case or name the tes
  it("should load the homepage", () => {
    //Check that it visits the correct URL (https://www.roadtohire.org)
    cy.visit("https://www.roadtohire.org/");
    //Check if the title of the page containe  "Road to Hire"
    cy.title().should("contain", "Road to Hire");
  });
});

// 4. Write a test based on the following HTML. Share the thought process behind your approach.  Be sure to share any resources that aided the construction of this test.

// <h1 class="header-inner container--fluid data-test-id="header-inner">
//   Road to Hire
// </h1>

it("the h1 contains the correct text", () => {
  cy.getByData("header-inner").Roacontains("d to Hire");
});

// 5. Explain the code snippet below:

// describe('My First Test', () => {
//   it('Does not do much!', () => {
//     expect(true).to.equal(true)
//   })
// })

// Make sure to define the following aspects of the code above:
// Describe: "describe is used to group m,ultiple test cases together"
// It: "it is the actiual test case, tells you what we are testing for"
// Expec: "Expect is telling us what we are looking for in the test"
// .to.equal: ".to.equal tells you what its suppose to be or what is the actual outcome that you intended to be when you wrote the code"
