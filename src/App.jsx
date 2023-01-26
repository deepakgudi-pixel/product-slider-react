import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from "./components/responsive";
import Product from './components/products';
import  { data } from "./utils/data";


function App() {

  const product = data.map((data)=>(
    <Product 
    key={data.id}
    name={data.name}
    url={data.imageurl}
    price={data.price}
    description={data.description}
    />
  ))

  return (
   <div className="App">
    <h1>View Products</h1>
    <Carousel responsive={responsive}
     arrows={false}  
     draggable={true}
     infinite={true}
     swipeable={true}
    >
     {product}
    </Carousel>
   </div>
  )
}

export default App
