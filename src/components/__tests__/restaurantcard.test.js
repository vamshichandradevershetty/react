import { render,screen } from "@testing-library/react"
import Restacard from "../Restacard"
import mockdata from "../mocks/mockresdata.json"
import "@testing-library/jest-dom"

it("should render restacard with data",()=>{
    render(
        <Restacard resdata={mockdata}/>
    )

    const resname = screen.getByText("Capital Multi Cuisine Restaurant");
    expect(resname).toBeInTheDocument();
})
//work on below code to find veg restaurant which is HOC
/*it("should render restacard with veg as text",()=>{
    render(
        <withPromotedLabel resdata={mockdata}/>
    )

    const vegresname = screen.getByText("Veg");
    expect(vegresname).toBeInTheDocument();
})
*/