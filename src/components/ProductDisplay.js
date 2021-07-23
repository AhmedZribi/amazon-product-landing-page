const ProductDisplay = (props) => {
    const currentHour = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();
    const curretMinutes = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes();

    return (
        <>
            <div className="productDisplay col-12 col-lg-6">
                <img src={props.currentDisplayImg} alt="product display"/>
                {props.showHeartBeatSection ? 
                    <div className="featureDisplay heartBeat">
                        <i className="fas fa-heartbeat"></i>
                        <p>78</p>
                    </div> :
                    <div className="featureDisplay">
                        <p>{`${currentHour}:${curretMinutes}`}</p>
                    </div>
                }
            </div>
        </>
    )
}

export default ProductDisplay
