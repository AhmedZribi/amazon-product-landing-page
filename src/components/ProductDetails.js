const ProductDetails = (props) => {
    const colorOptions =  props.data.colorOptions.map((color, pos) => {
        const imgClass = pos === props.currentDisplayImgPos ? "productImg selectedProductImg" : "productImg"
        return (
            <img key={pos} src={color.imageUrl} class={imgClass} 
            alt={color.styleName} onClick={() => props.onColorOptionClick(pos)}/>
        );
    })
    const featureList = props.data.featureList.map ((feature, pos) =>{
        const btnClass = (pos === 1 && props.showHeartBeatSection ? "featureBtn selectedFeautureBtn" : 
        pos === 0 && !props.showHeartBeatSection ? "selectedFeautureBtn featureBtn" : "featureBtn")
        return (
            <button class={btnClass} onClick={() => props.onFeatureClick(pos)}>{feature}</button>
        );
    })

    const onClickBuy = () => {
        return (
            alert("Product added to cart")
        )
    }

    return (
        <>
            <div className="productDetails col-12 col-lg-6">
                <h1 className="title">{props.data.title}</h1>
                <p className="description">{props.data.description}</p>
                <h2 className="heading">Select Color</h2>
                <div className="productColors">
                    {colorOptions}  
                </div>
                <h2 className="heading">Features</h2>
                <div className="productfeatures">
                    {featureList}
                </div>
                <button className="primaryBtn" onClick={onClickBuy}>Buy Now</button>
            </div>
        </>
    )
}

export default ProductDetails
