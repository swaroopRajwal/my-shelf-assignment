import { ChevronLeftIcon } from '@heroicons/react/20/solid';
import NavBar from './components/NavBar';
import Product from './components/Product';
import { products } from './lib/dummy';


const App = () => {

  return (
    <div className={`min-h-screen relative flex flex-col justify-start items-center gap-10 pt-20 md:pt-20 px-3 ${process.env.NODE_ENV === "development" ? "debug-screens" : " "} inter`}>
      <NavBar/>
      <div className='w-full flex flex-col justify-start items-center'>
        {products.map((product, id) => (
          <Product
            key={id}
            {...product}
          />
        ))}
      </div>
    </div>
  )
}

export default App;