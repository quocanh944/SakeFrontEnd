import ProductCard from './ProductCard'

export default function ProductList({products = []}) {
    // api products is requiment
    return (
        <div className='grid grid-cols-4 px-[141px] gap-[19px] mb-[134px]'>
            {products.map((product,index) => {
                return <ProductCard key={index} id={product.id} name={product.name} price={product.price} quantity={product.quantity} media={product.medias[0]} description={product.description} flim={product.flim} brand={product.brand} discounted='0' />
            })}
        </div>
    )
}
