const Restacard = (props) => {
    const {resdata} = props;
    return (
        <div data-testid="rescard" className="p-4 m-4 w-[250px] bg-gray-200 items-center rounded-lg hover:bg-gray-400">
            <img className="res-logo rounded-lg" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resdata.info.cloudinaryImageId} alt="res-logo"></img>
            <h3 className="py-2 font-bold">{resdata.info.name}</h3>
            <h4>{resdata.info.cuisines.join(", ")}</h4>
            <h4>{resdata.info.avgRating}</h4>
            <h4>{resdata.info.costForTwo}</h4>
            <h4>{resdata.info.sla.slaString}</h4>
        </div>
    );
};


export const withPromotedLabel = (Restacard) =>{
return (props)=>{
    return(
        <div>
        <label className="absolute bg-black text-white rounded-lg p-2 m-2">Veg</label>
        <Restacard {...props}/>
        </div>
    );
}
}
export default Restacard;