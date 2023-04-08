import './App.css';
import Navb from './components/Navb';
import Product from './components/Product';
import Title from './components/Title';
import {Button} from 'react-bootstrap'

function App() {

  const myStyle = {color: 'red', textAlign: 'center'}

  const styleCards = {display: 'flex', justifyContent: 'space-around'}


  const handleName = (price) => {
    alert(`The price of this product is:  ${price}`)
  }
  return (
    <div className="App">
      <Navb />
      <Title name='Aziz' style={myStyle}/>
      <div style={styleCards}>
      <Product handleName={handleName} brand={23} model='14 Pro Max' price={2000} > <img src='https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/0/1/010-02159-14_1698_1.jpg' alt='phone'/> </Product>
      <Product handleName={handleName} brand='Samsung' model='S20' price={1500} > <img src='https://galleriatech.com.tn/img/p/7/8/3/783-large_default.jpg' alt='phone'/> </Product>
      <Product handleName={handleName} brand='Huawei' model='P30' price={1000} > <img src='https://www.wiki.tn/39984/huawei-p30-lite.jpg' alt='phone'/> </Product>
      </div>
      
    </div>
  );
}

export default App;
