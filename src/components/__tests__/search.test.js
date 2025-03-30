import { fireEvent, render,screen, waitFor } from "@testing-library/react"
import Body from "../Body";
import { data } from "react-router";
import mock_data from "../mocks/mockrestalist.json"
import { act } from "react";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";

global.fetch = jest.fn(()=>{
    return Promise.resolve({  //fetch returns us a promise
        json: () =>  Promise.resolve(mock_data), //which is json and we convert to json which returns a promise that has data

    })
});
//console.log(mock_data);
/*it("should render search component and search for restaurant after giving text as input",async ()=>{
    await act(async () => 
    render(
    <BrowserRouter>
    <Body/>
    </BrowserRouter>
    )
    );

    screen.debug();

    const cardsbeforeclick = screen.getAllByTestId("rescard");
    expect(cardsbeforeclick.length).toBe(8);

    
    const btn = await waitFor(() => screen.findByRole("button", { name: /search/i }));
    expect(btn).toBeInTheDocument();

    
    const searchtext = screen.getByTestId("searchText");

    fireEvent.change(searchtext,{target:{value: "restaurant"}})
    fireEvent.click(btn);

    const rescard = screen.getAllByTestId("rescard");

    expect(rescard.length).toBe(0);

    //expect(searchtext).toBeInTheDocument();
    
    
})
*/


it("find filtered restaurant", async ()=>{
    await act(async () => 
        render(
        <BrowserRouter>
        <Body/>
        </BrowserRouter>
        ));


        screen.debug(); // See what's rendered initially

        await waitFor(()=>{
            expect(screen.queryByTestId("shimmercontainer")).not.toBeInTheDocument();
        })
    
        screen.debug();
    
        await waitFor(()=> { expect(screen.getAllByTestId("rescard").length).toBe(8)})
    

        const btn1 = await waitFor(() => screen.findByRole("button", { name: "Top rated restaurents" }));
        //expect(btn1).toBeInTheDocument();
        fireEvent.click(btn1);

        await waitFor(()=>{ expect(screen.getAllByTestId("rescard").length).toBe(8)})
        
})

