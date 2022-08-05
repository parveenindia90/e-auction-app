import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import { Button, Col , Form, Row, Container} from 'react-bootstrap'; 
import ProductInfo from '../components/ProductInfo';
import BidList from '../components/BidList';

export interface IProductInfo {
    productInfo : {
        "shortDesc": string,
        "detailsDesc": string,
        "category": string,
        "startingPrice": number,
        "bidEndDate": string
    },
    bidList : {
        "bidAmount": number,
        "firstName": string,
        "lastName": string,
        "email": string,
        "phoneNumber": string
    }[]
}

export const numberFormat = (value: number) =>
        new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR'
        }).format(value);

const ShowBids = () => {

  const productInit = {
    "shortDesc":"",
    "detailsDesc":"",
    "category":"",
    "startingPrice": 0,
    "bidEndDate": ""
  };

  const [products, setProducts] = useState([]);

  const [productInfo, setProductInfo] = useState<IProductInfo["productInfo"]>(
     productInit
  );

  const [bidList, setBidList] = useState<IProductInfo["bidList"]>([]);

  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/e-auction/api/v1/seller/getAllProducts`);
        const data = await response.json();
        setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleClick = async () => {
      if(val === "")
      {
        setProductInfo(productInit);
        setBidList([]);
        setError("Please select valid product");
      }else{
        const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/e-auction/api/v1/seller/show-bids/${val}`);
        const data = await response.json();
        setProductInfo(data.productInfo);
        setBidList(data.buyerBidInfoList);
      }
  }

  const [val, setVal] = useState<string>();

  return (
    <Container>
    <Header/>
    <br/>
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="productList">
        <Form.Label column sm="2">Product Name</Form.Label>
        <Col sm="5">
          <Form.Select aria-label="Default select example" value={val} onChange={(e) => setVal(e.target.value)}>
              <option value="">Select</option>
              {
                  products.map( product => <option value={product}>{product}</option>)
              }
          </Form.Select>
        </Col>
        <Col sm="4">
          <Button variant="primary" onClick={handleClick}>Get</Button>
        </Col>
      </Form.Group>
      <span style={{ color : "red" }}>{error}</span>
      </Form>
      <ProductInfo productInfo={productInfo}/>
      <BidList bidList = {bidList}/>
    </Container>
  )
}

export default ShowBids