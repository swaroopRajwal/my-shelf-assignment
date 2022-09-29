import { useState } from "react";
import Button from "./Button";
import Details from "./Details";
import DetailsModal from "./DetailsModal";

interface IProps {
  name: string;
  brand: string;
  delivered: boolean;
  order_id: string;
  delivery_address: string;
  payment_method: string;
  image: string;
}

const Delivered = () => (
  <p 
  className="bg-green-200 text-green-700 py-1 px-2 rounded-full text-xs font-semibold">
    DELIVERED
  </p>
)

const Ordered = () => (
  <p 
  className="bg-indigo-200 text-indigo-600 py-1 px-2 rounded-full text-xs font-semibold">
    Ordered
  </p>
)

const Product = (props: IProps) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-2 rounded-md border-2 border-zinc-200 shadow-lg flex gap-1 justify-start w-full max-w-screen-lg">
      <div className="w-1/3 max-w-[138px]">
        <img
          src={props.image} 
          alt=" " 
          className="object-cover object-center"
        />
      </div>

      <div className="md:flex justify-between w-full">
        <div className="flex flex-col gap-1 sm:gap-3">
          <p className="font-semibold sm:text-lg">{props.name}</p>
          <p className="uppercase text-xs sm:text-sm">{props.brand}</p>
          <div className="flex">
            {props.delivered ? <Delivered/> : <Ordered/>}
          </div>
          <div className="md:hidden">
            <DetailsModal {...props}/>
          </div>
          {isOpen && <div
            className="flex flex-col"
          >
            <Details {...props}/>
          </div>}
        </div>
        <div className="hidden md:block">
          <Button
            variant="outline"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "View Less" : "View More"}
          </Button>
        </div>
      </div>

    </div>
  )
}

export default Product;