import { screen,fireEvent, render } from "@testing-library/react"
import { Header } from "../Header"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router";
//import { TextEncoder, TextDecoder } from 'util';
import "@testing-library/jest-dom";
import { TextEncoder } from 'fast-text-encoding';
import { appStore } from "../../utils/appStore";


it("should load header component with login btn",()=>{
render(
    <BrowserRouter>
<Provider store={appStore}>
<Header/>
</Provider>
</BrowserRouter>)

const headerbtn = screen.getByRole("button",{name:"LogIn"}); //specifying clearly to find button with name as LogIn

expect(headerbtn).toBeInTheDocument();

})

it("should change login to logout on click",()=>{
    render(
        <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>)
    
    const loginbtn = screen.getByRole("button",{name:"LogIn"}); //specifying clearly to find button with name as LogIn
    //or we can write as screen.getByText("logIn"); but not a good way
    fireEvent.click(loginbtn)

    const logoutbtn = screen.getByRole("button",{name:"LogOut"});
    expect(logoutbtn).toBeInTheDocument();
    
})


it("should render header component with cart items 0",()=>{
        render(
            <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>)
        
        const cartitems = screen.getByText("Cart(0)");
        //or we can write as screen.getByText("logIn"); but not a good way
        
        expect(cartitems).toBeInTheDocument();
        
})

it("should render header component with cart is there or not",()=>{
            render(
                <BrowserRouter>
            <Provider store={appStore}>
            <Header/>
            </Provider>
            </BrowserRouter>)
            
            const cartitems = screen.getByText(/Cart/);
            //or we can write as screen.getByText("logIn"); but not a good way
            
            expect(cartitems).toBeInTheDocument();
            
})