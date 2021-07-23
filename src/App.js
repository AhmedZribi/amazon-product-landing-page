import React, {Component} from 'react'
import './App.css'
import Nav from './components/Nav'
import ProductDisplay from './components/ProductDisplay'
import ProductDetails from './components/ProductDetails'
import productData from './ProductData'

class App extends Component {
  state = {
    productData : productData,
    currentDisplayImgPos : 0,
    showHeartBeatSection : false
  }

  onColorOptionClick = (pos) => {
    this.setState({currentDisplayImgPos: pos})
  }

  onFeatureClick = (pos) => {
    let updatedState = false;
    if (pos === 1) {
      updatedState = true;
    }
    this.setState({showHeartBeatSection: updatedState})
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <div className="container">
          <ProductDisplay currentDisplayImg={this.state.productData.colorOptions
          [this.state.currentDisplayImgPos].imageUrl} 
          showHeartBeatSection={this.state.showHeartBeatSection}/>
          <ProductDetails data={this.state.productData} onColorOptionClick={this.onColorOptionClick} 
          currentDisplayImgPos={this.state.currentDisplayImgPos} onFeatureClick={this.onFeatureClick}
          showHeartBeatSection={this.state.showHeartBeatSection}/>
        </div>
      </div>
    )
  }
}
export default App
