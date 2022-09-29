import { ChevronLeftIcon } from "@heroicons/react/20/solid"
import Button from "./Button";

const NavBar = () => {
  return (
    <div className='fixed top-0 left-0 right-0 flex md:justify-center items-center gap-1 p-2 border-b-2 border-zinc-300'>
      <div className="md:hidden flex justify-start items-center gap-1">
        <ChevronLeftIcon className='h-10'/>
        <p className='text-xl'>My Orders(1)</p>
      </div>
      <div className="hidden md:flex justify-between w-full max-w-screen-lg items-center">
        <img src="/LOGO.svg" alt=" " />
        <div className="flex gap-2">
          <Button variant="text">Men</Button>
          <Button variant="text">Women</Button>
          <Button variant="text">About</Button>
          <Button variant="solid">Sign Up</Button>
        </div>
      </div>
    </div>
  )
}

export default NavBar;