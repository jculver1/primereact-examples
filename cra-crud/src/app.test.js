import React, { useState, useEffect, useRef } from 'react';
import {findByText, getByText, render, screen, waitFor, within} from "@testing-library/react";
import App from './App'
import userEvent from "@testing-library/user-event";
import * as products from '../public/demo/data/products.json'
import { DataTable } from 'primereact/datatable';
import { getProducts } from './ProductService';
// import axios from 'axios';

// jest.mock('axios');

test("Add a new product to the table", async () => {
  // axios.get.mockResolvedValue({ products: getProducts.data });

  render(<App/>);

//because there are several buttons as elements, i'm also specifying the aria-label to grab the correct button.
  const addProductButton = screen.getByRole("button", {
    name: "add-new-product",
  });

    userEvent.click(addProductButton);

  //show modal is open
    expect(screen.getByText("Product Details")).toBeInTheDocument();

    const inputFieldProdName = screen.getByLabelText('Name', {selector: 'input'});
    userEvent.type(inputFieldProdName, "A Test Name");

    const textareaProdDescription =  screen.getByLabelText('Description', {selector: 'textarea'});
    userEvent.type(textareaProdDescription, "A Test Description of the product");

    const selectProdCategory = screen.getByLabelText('Accessories');
    userEvent.click(selectProdCategory);
    
       
    const saveAddProduct = screen.getByRole("button", {
        name: "Cancel",
      });

    userEvent.click(saveAddProduct);
   
});

test("Delete a product from table", async () => {

  // axios.get.mockResolvedValue({ products: getProducts.data });
 render(<App  />);


 const bambooWatch = await waitFor(() => screen.getByText("Bamboo Watch")); 
 expect(userList).toBeInTheDocument();

 
});







//type items in input field and add (make sure starts with an a)

// check to see if item is in doc 


// expect(screen.getByText("1 Vanilla")).toBeInTheDocument();
// expect(screen.getByText("2 Chocolate")).toBeInTheDocument();
// expect(screen.getByText("Cherries")).toBeInTheDocument();



//   // add ice cream scoops and toppings
//   const vanillaInput = await screen.findByRole("spinbutton", {
//     name: "Vanilla",
//   });
//   userEvent.clear(vanillaInput);
//   userEvent.type(vanillaInput, "1");

//   const chocolateInput = screen.getByRole("spinbutton", {name: "Chocolate"});
//   userEvent.clear(chocolateInput);
//   userEvent.type(chocolateInput, "2");

//   const cherriesCheckbox = await screen.findByRole("checkbox", {
//     name: "Cherries",
//   });
//   userEvent.click(cherriesCheckbox);

//   // find and click order summary button
//   const orderSummaryButton = screen.getByRole("button", {
//     name: /order sundae/i,
//   });
//   userEvent.click(orderSummaryButton);

//   // check summary subtotals
//   const summaryHeading = screen.getByRole("heading", {name: "Order Summary"});
//   expect(summaryHeading).toBeInTheDocument();

//   const scoopsHeading = screen.getByRole("heading", {name: "Scoops: $6.00"});
//   expect(scoopsHeading).toBeInTheDocument();

//   const toppingsHeading = screen.getByRole("heading", {
//     name: "Toppings: $1.50",
//   });
//   expect(toppingsHeading).toBeInTheDocument();

//   // check summary option items
//   expect(screen.getByText("1 Vanilla")).toBeInTheDocument();
//   expect(screen.getByText("2 Chocolate")).toBeInTheDocument();
//   expect(screen.getByText("Cherries")).toBeInTheDocument();

//   // // alternatively...
//   // // const optionItems = screen.getAllByRole('listitem');
//   // // const optionItemsText = optionItems.map((item) => item.textContent);
//   // // expect(optionItemsText).toEqual(['1 Vanilla', '2 Chocolate', 'Cherries']);

//   // accept terms and click button
//   const tcCheckbox = screen.getByRole("checkbox", {
//     name: /terms and conditions/i,
//   });
//   userEvent.click(tcCheckbox);

//   const confirmOrderButton = screen.getByRole("button", {
//     name: /confirm order/i,
//   });
//   userEvent.click(confirmOrderButton);

//   // Expect "loading" to show
//   const loading = screen.getByText(/loading/i);
//   expect(loading).toBeInTheDocument();

//   // check confirmation page text
//   // this one is async because there is a POST request to server in between summary
//   //    and confirmation pages
//   const thankYouHeader = await screen.findByRole("heading", {
//     name: /thank you/i,
//   });
//   expect(thankYouHeader).toBeInTheDocument();

//   // expect that loading has disappeared
//   const notLoading = screen.queryByText("loading");
//   expect(notLoading).not.toBeInTheDocument();

//   const orderNumber = await screen.findByText(/order number/i);
//   expect(orderNumber).toBeInTheDocument();

//   // find and click "new order" button on confirmation page
//   const newOrderButton = screen.getByRole("button", {name: /new order/i});
//   userEvent.click(newOrderButton);

//   // check that scoops and toppings have been reset
//   const scoopsTotal = await screen.findByText("Scoops total: $0.00");
//   expect(scoopsTotal).toBeInTheDocument();
//   const toppingsTotal = screen.getByText("Toppings total: $0.00");
//   expect(toppingsTotal).toBeInTheDocument();

//   // wait for items to appear so that Testing Library doesn't get angry about stuff
//   // happening after test is over
//   await screen.findByRole("spinbutton", {name: "Vanilla"});
//   await screen.findByRole("checkbox", {name: "Cherries"});
// });

// test("Toppings header is not on summary page if no toppings ordered", async () => {
//   // render app
//   render(<App />);

//   // add ice cream scoops but no toppings
//   const vanillaInput = await screen.findByRole("spinbutton", {
//     name: "Vanilla",
//   });
//   userEvent.clear(vanillaInput);
//   userEvent.type(vanillaInput, "1");

//   const chocolateInput = screen.getByRole("spinbutton", {name: "Chocolate"});
//   userEvent.clear(chocolateInput);
//   userEvent.type(chocolateInput, "2");

//   // find and click order summary button
//   const orderSummaryButton = screen.getByRole("button", {
//     name: /order sundae/i,
//   });
//   userEvent.click(orderSummaryButton);

//   const scoopsHeading = screen.getByRole("heading", {name: "Scoops: $6.00"});
//   expect(scoopsHeading).toBeInTheDocument();

//   const toppingsHeading = screen.queryByRole("heading", {name: /toppings/i});
//   expect(toppingsHeading).not.toBeInTheDocument();
// });

// // Additional test to verify fix to erroneous code
// // See https://www.udemy.com/course/react-testing-library/learn/#questions/17055082/
// test("Toppings header is not on summary page if toppings ordered, then removed", async () => {
//   // render app
//   render(<App />);

//   // add ice cream scoops
//   const vanillaInput = await screen.findByRole("spinbutton", {
//     name: "Vanilla",
//   });
//   userEvent.clear(vanillaInput);
//   userEvent.type(vanillaInput, "1");

//   // add a topping and confirm
//   const cherriesTopping = await screen.findByRole("checkbox", {
//     name: "Cherries",
//   });
//   userEvent.click(cherriesTopping);
//   expect(cherriesTopping).toBeChecked();
//   const toppingsTotal = screen.getByText("Toppings total: $", {exact: false});
//   expect(toppingsTotal).toHaveTextContent("1.50");

//   // remove the topping
//   userEvent.click(cherriesTopping);
//   expect(cherriesTopping).not.toBeChecked();
//   expect(toppingsTotal).toHaveTextContent("0.00");

//   // find and click order summary button
//   const orderSummaryButton = screen.getByRole("button", {
//     name: /order sundae/i,
//   });
//   userEvent.click(orderSummaryButton);

//   const scoopsHeading = screen.getByRole("heading", {name: "Scoops: $2.00"});
//   expect(scoopsHeading).toBeInTheDocument();

//   const toppingsHeading = screen.queryByRole("heading", {name: /toppings/i});
//   expect(toppingsHeading).not.toBeInTheDocument();
