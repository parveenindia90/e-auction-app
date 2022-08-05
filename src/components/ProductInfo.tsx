import { Col , Form, Row } from 'react-bootstrap'; 
import { IProductInfo as props, numberFormat} from '../pages/ShowBids';
import Moment from 'moment'

interface IProps {
    productInfo : props["productInfo"]
}

const ProductInfo: React.FC<IProps> = ({productInfo}) => {

    return (
        <Form>
        <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">Short Description</Form.Label>
            <Col sm="5">
            <Form.Control value={productInfo.shortDesc} disabled/>
            </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">Detailed Description</Form.Label>
            <Col sm="5">
            <Form.Control value={productInfo.detailsDesc} disabled/>
            </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">Category</Form.Label>
            <Col sm="5">
            <Form.Control value={productInfo.category} disabled/>
            </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">Starting Price</Form.Label>
            <Col sm="5">
            <Form.Control value={numberFormat(productInfo.startingPrice)} disabled/>
            </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">Bid End Date</Form.Label>
            <Col sm="5">
            <Form.Control value={productInfo.bidEndDate !== "" ? Moment(productInfo.bidEndDate).format("DD-MM-YYYY"):""} disabled/>
            </Col>
        </Form.Group>
     </Form>
    )
}

export default ProductInfo