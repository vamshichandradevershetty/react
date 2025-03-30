import { fireEvent, render,screen,waitFor } from "@testing-library/react"
import { act } from "react"
import { RestaurantsMenu } from "../restaurantsmenu";
import { json } from "../../../jest.config";
import mock_data from "../mocks/mockresmenu.json"
import { Provider } from "react-redux";
import { appStore } from "../../utils/appStore";
import { Header } from "../Header";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: () => Promise.resolve(mock_data)
    })
})

it("should load restaurant menu component",async ()=>{
    await act(async ()=>{
        render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            <RestaurantsMenu/>
            </Provider>
            </BrowserRouter>);
    })

    screen.debug();

    const header  = await screen.findByText("Recommended",{ timeout: 3000 });
    fireEvent.click(header);

    const items = screen.getAllByTestId("fooditems");
    expect(items.length).toBe(20);

    const addbtns = screen.getAllByRole("button",{name: "Add +"})
    fireEvent.click(addbtns[0]);


    const cartlen = screen.getByText("Cart(1)");
    expect(cartlen).toBeInTheDocument();

})