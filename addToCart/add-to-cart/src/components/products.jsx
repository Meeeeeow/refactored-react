import React, {useState , useEffect} from 'react'

const Products = () => {
  const [data,setData] = useState([]);
  const [filter,setFilter] = useState(data);
  const [loading,setLoading] = useState(false);
  let componentMounted = true;
  useEffect(()=>{
    const getProducts = async ()=>{
        setLoading(true);
        const response = await fetch('https://fakestoreapi.com/products');

        if(componentMounted)
        {
            setLoading(false);
            setData(await response.clone().json());
            setFilter(await response.json());
            console.log(filter);
            console.log(data);
        }

        return () =>{
            componentMounted = false;
        }

    } 
    getProducts();
  },[])

  const Loading = () =>{
      return(
          <>
            <h1>Loading...</h1>
          </>
      )
  }

  const ShowProducts = () =>{
      return(
          <>
            <div className="buttons d-flex justify-content-center">
                <button className="btn btn-outline-dark me-2">All</button>
                <button className="btn btn-outline-dark me-2">Men's Clothing</button>
                <button className="btn btn-outline-dark me-2">Women's Clothing</button>
                <button className="btn btn-outline-dark me-2">Jeweleries</button>
                <button className="btn btn-outline-dark me-2">Electronics</button>
            </div>

            {
                data.map(product =>{
                    return(
                        <>
                            <div className="col-md-3">
                                <div className="card">
                                    <img src={product.image} className="card-img-top" alt={product.title.substring(0,15)}/>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="google.com" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
            }
          </>
      )
  }
  return (
    <div className='container my-5 py-5'>
        <div className="row">
            <div className="col-12 mb-5">
                <h1 className='display-6 fw-bolder text-center'>
                    Latest Products
                </h1>
                <hr/>
            </div>
        </div>
        <div className="row justify-content-center">
            {
                loading ? Loading() : ShowProducts()
            }
        </div>
    </div>
  )
}

export default Products