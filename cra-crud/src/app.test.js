import {render, screen} from "@testing-library/react";
import App from './App'
import userEvent from "@testing-library/user-event";

test("Add a new product to the table", async () => {
  
  render(<App/>);
  let populatedData = await screen.findByText(/black watch/i);
  expect(populatedData).toBeTruthy()
  const totalProducts = await screen.findAllByRole('row').length

  const addProductButton = screen.getByRole("button", {
    name: "add-new-product",
  });

    userEvent.click(addProductButton);

    const inputFieldProdName = screen.getByLabelText('Name', {selector: 'input'});
    userEvent.type(inputFieldProdName, "A Test Name");

    const textareaProdDescription =  screen.getByLabelText('Description', {selector: 'textarea'});
    userEvent.type(textareaProdDescription, "A Test Description of the product");

    const selectProdCategory = screen.getByLabelText('Accessories');
    userEvent.click(selectProdCategory);
       
    const saveAddProduct = screen.getByRole("button", {
        name: "save",
      });

    userEvent.click(saveAddProduct);

    const newTotalOfProducts = await screen.findAllByRole('row')
    expect(newTotalOfProducts === totalProducts + 1)
   
});


test("Delete a product from table", async () => {
  render(<App/>);
  let populatedData = await screen.findByText(/black watch/i);
  expect(populatedData).toBeTruthy()

  const products = await screen.findAllByRole('row')
  const numberOfRowsAfterDelete = products.length - 1;
  const deleteButton = await screen.findAllByRole('button', {
    name: /delete/i
  })

  userEvent.click(deleteButton[1])
 
  const confirmDelete = await screen.findByText(/yes/i)
  userEvent.click(confirmDelete)

  expect((await screen.findAllByRole('row')).length === numberOfRowsAfterDelete)

});