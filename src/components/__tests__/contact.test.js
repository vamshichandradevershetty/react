import { render,screen } from "@testing-library/react"
import { ContactUs } from "../ContactUs"
import "@testing-library/jest-dom"

describe("contact page test cases",()=>{
test("contact us page should load",()=>{

    render(<ContactUs/>)

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();

})
test("button should load in the component",()=>{

    render(<ContactUs/>)

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

})

test("should load input in the component",()=>{

    render(<ContactUs/>)

    const name = screen.getByPlaceholderText("Enter name");
    expect(name).toBeInTheDocument();

})
//called as quering
test("all input boxes shoule be loaded",()=>{
    render(<ContactUs/>)

    const inputboxes = screen.getAllByRole("textbox");
   // console.log(inputboxes.length);
    expect(inputboxes.length).toBe(2); //or we can give it as .not.toBe(3) means its not to be equal to 3 & there are many functions as toBe
})
})
