export const ContactUs = () =>{
    return (
        <div>
            <h1 className="font-bold text-2xl p-3 m-3">Contact us page</h1>
            <form className="">
                <input type="text" className="p-2 m-2 border border-black" placeholder="Enter name"></input>
                <input type="text" className="p-2 m-2 border border-black" placeholder="Message"></input>
                <button className="p-2 m-2 border border-black bg-gray-300 rounded-lg">Submit</button>
            </form>
         </div>
    )
}