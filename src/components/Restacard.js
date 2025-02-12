const Restacard = (props) => {
    const {resdata} = props;
    return (
        <div className="res-card">
            <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resdata.info.cloudinaryImageId} alt="res-logo"></img>
            <h3>{resdata.info.name}</h3>
            <h4>{resdata.info.cuisines}</h4>
            <h4>{resdata.info.avgRating}</h4>
            <h4>{resdata.info.costForTwo}</h4>
            <h4>{resdata.info.sla.slaString}</h4>
        </div>
    );
};
export default Restacard;