import { sum } from "../sum"

test("description",()=>{
    const res = sum(2,3);
    expect(res).toBe(5);
})