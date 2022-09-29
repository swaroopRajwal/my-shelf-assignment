interface IProps {
  order_id: string;
  delivery_address: string;
  payment_method: string;
}

const Details = (props: IProps) => {
  return (
    <>
      <p className="font-semibold">Order ID {props.order_id}</p>
      <p className="font-semibold">Delivery address</p>
      <p>{props.delivery_address}</p>
      <p className="font-semibold">Payment method</p>
      <p>{props.payment_method}</p>
    </>
  )
}

export default Details;