import React, { useState, useEffect } from 'react'
import { useParams  } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { addItem } from '../store/actions/actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
const Product = () => {
    const [product,setProduct] = useState([]);
    const [loading,setLoading] = useState(false);
    const {id} = useParams();
    console.log(id);

    const dispatch = useDispatch();

    const addProduct = product =>{
        dispatch(addItem(product));
    }
    useEffect(()=>{
        const getProduct = async () =>{
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    },[])
    console.log(product.rating);
    const Loading = () =>{
        return(
            <h1>Loading...</h1>
        )
    }

    const ShowProduct = () =>{
       return(
            <>
                <div className="col-md-6">
                    <img src={product.image} alt={product.title} height="400px" width="400px"/>
                </div>

                <div className="col-md-6">
                    <h3 className='text-uppecase text-black-50'>{product.category}</h3>
                    <div className="title  display-4 fw-bold">
                        { product.id === 1 ? product.title.substring(0,22) : product.title}
                    </div>
                    <h6 className='mt-2 lead fw-bolder'><FontAwesomeIcon icon={ faStarHalfAlt}/> {product.rating && product.rating.rate} ({product.rating && product.rating.count} reviews)</h6>
                    <button onClick={()=>{addProduct(product)}}>Add to cart</button>
                    <button><NavLink to="/cart">Go to cart</NavLink></button>
                </div>
            </>
       )
    }
    return (
        <div className="container mt-4 pt-4">
            <div className="row ">
                {loading ? <Loading/>:  <ShowProduct/>}
            </div>
        </div>
    )
}

export default Product