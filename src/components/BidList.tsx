import { Table } from 'react-bootstrap'
import { IProductInfo as props, numberFormat} from '../pages/ShowBids';

interface IProps {
    bidList : props["bidList"]
}

const BidList : React.FC<IProps> = ({bidList}) => {
  return (
    <>
     <Table striped bordered hover>
        <thead>
            <tr>
                <th>Bid Amount</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
            </tr>
        </thead>
            <tbody>
            { bidList.length === 0 ? (<tr><td colSpan={4}>No Bids found</td></tr>) : bidList.map(bid => {
                return (
                <tr key={bid.email}>
                <td>{numberFormat(bid.bidAmount)}</td>
                <td>{bid.firstName} {bid.lastName}</td>
                <td>{bid.email}</td>
                <td>{bid.phoneNumber}</td>
                </tr>
                )   
            })}
            </tbody>
        </Table>
    </>
  )
}

export default BidList
