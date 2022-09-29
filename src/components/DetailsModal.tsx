import React, { useState } from "react";
import { Dialog } from '@headlessui/react';
import Button from "./Button";
import Details from "./Details";

interface IProps {
  name: string;
  brand: string;
  delivered: boolean;
  order_id: string;
  delivery_address: string;
  payment_method: string;
  image: string;
}

const DetailsModal = (props: IProps) => {

  let [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <Button
        variant="solid"
        onClick={() => setIsOpen(true)} 
      >
        Order details
      </Button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        as="div"
        className="relative z-10"
      >

        <div className="fixed inset-0 bg-black/30 bg-opacity-25" aria-hidden="true" />

        <div className="fixed inset-0 flex items-center justify-center">
          <Dialog.Panel className="w-full transform overflow-hidden bg-white rounded-t-xl absolute bottom-0 left-0 right-0">
            <div className="py-5 px-4 border-b-2 border-gray-300">
              <Dialog.Title
                className="text-lg font-semibold"
              >
                Order Details 
              </Dialog.Title>
            </div>
            <Dialog.Description 
              as="div"
              className="px-4 flex flex-col gap-1 py-5"
            >
              <Details
                {...props}
              />
            </Dialog.Description>
            <div className="px-4 pb-5 grid justify-items-stretch">
              <Button 
                variant="solid"
                onClick={() => setIsOpen(false)}
              >
                Done
              </Button>
            </div>
          </Dialog.Panel>
        </div>

      </Dialog> 
    </>
  )
}

export default DetailsModal;