import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from "./responsive";



export default function Product(props) {
  return (
  <div className='card'>
   <img className='product--image' src={props.url} alt="product image" />
   <h2>{props.name}</h2>
   <p className='price'>{props.price}</p>
   <p>{props.description}</p>
   <p>
     <button>Add to cart</button>
   </p>
  </div> 
  )
}
