import React, { useEffect, useState } from 'react'
import ProductCard from '../components/Product/ProductCard'
import BtnSort from '../components/comon/BtnSort'
import axios from 'axios'

export default function ShopMain() {
    //data sample
    const [products, setProducts] = useState([])
    const [page, setPage] = useState(0)
    const [numProduct, setNumProduct] = useState(0)
    const [brands, setBrands] = useState([])
    const [films, setFilms] = useState([])

    const [productFilter, setProductFilter] = useState([])


    const [sort, setSort] = useState()
    const [brandFilter, setBrandFilter] = useState([])
    const [filmFilter, setFilmFilter] = useState([])
    const [filters, setFilters] = useState([])

    console.log('==========re-render========');

    const [totalPage, setTotalPage] = useState(0)
    useEffect(() => {
        axios
            .get('http://localhost:8080/api/products', {
                params: {
                    page: page,
                    size: 6,
                    sort: 'ASC'
                }
            })
            .then(res => {
                setProducts(preProduct => [...preProduct, ...res.data.content])
                setTotalPage(res.data.totalPages)
                setNumProduct(res.data.totalElements)
            })
    }, [page])
    useEffect(() => {
        if (brandFilter || filmFilter) {
            let filterBrand = async () => {
                brandFilter.map(async id => {
                    let result = await axios('http://localhost:8080/api/products/film/' + id, {
                        params: {
                            page: page,
                            size: 6,
                            sort: 'ASC'
                        }
                    })
                    setProductFilter(prePro => mergeProducts(prePro, result.data.content, 'id'))
                    setNumProduct(productFilter.length)
                })
            }
            let filterFilm = async () => {
                filmFilter.map(async (id) => {
                    let result = await axios('http://localhost:8080/api/products/film/' + id, {
                        params: {
                            page: page,
                            size: 6,
                            sort: 'ASC'
                        }
                    })
                    setProductFilter(prePro => mergeProducts(prePro, result.data.content, 'id'))
                    setNumProduct(productFilter.length)
                })
            }
            filterBrand()
            filterFilm()
            setProductFilter(prePr => {
                return [...new Set(prePr)]
            })
        }
        if ((brandFilter.length === 0) && (filmFilter.length === 0)) {
            setProductFilter(() => [])
        }
    }, [page, filmFilter, brandFilter])

    console.log('Sumon product:', products);

    useEffect(() => {
        axios
            .get('http://localhost:8080/api/brands')
            .then(res => {
                setBrands(res.data)
                console.log(brands);
            })
        axios
            .get('http://localhost:8080/api/films')
            .then(res => {
                setFilms(res.data)
                console.log(films);
            })
    }, [])


    // setProductFilter(prePr => {
    //     return [...new Set(prePr)]
    // })

    // console.log('filter brand: ', brandFilter);
    // console.log('filter film: ', filmFilter);


    const mergeProducts = (productsA = [], productsB = [], id) => {
        const mergedProducts = [...productsB];

        for (const obj2 of productsA) {
            const value2 = obj2[id];
            const exists = mergedProducts.some(obj1 => obj1[id] === value2);

            if (!exists) {
                mergedProducts.push(obj2);
            }
        }

        return mergedProducts;
    }

    return (
        <div>
            <div className='grid grid-cols-[30%_70%]'>
                <div className='pt-[43px] ml-[145px]'>
                    <div className='mb-5'>
                        <div className='inline-block w-[75px] text-[22px] font-semibold leading-[30px] tracking-[-0.55px] mr-2'>Filters</div>
                        <button type='reset' className='inline-block text-[#C4C4C4] text-[14px] leading-5 tracking-[-0.4px] underline'>Clear filters</button>
                    </div>
                    <div className='text-[14px] font-bold leading-5 tracking-[-0.4px] mb-5'>
                        Brands
                    </div>
                    {/* List categories/Brand */}
                    <div className='mb-5'>
                        <ul className='flex flex-col gap-[10px]'>
                            {brands.map((brand, index) => {
                                return (
                                    <li key={index} className='flex gap-3 max-w-[190px] text-[13px] leading-[17px] tracking-[-0.4px] items-center'>
                                        <input type='checkbox' className='w-5 h-5 accent-primary mr-3 cursor-pointer' name={brand.id} onClick={(e) => {
                                            setPage(0)
                                            setBrandFilter((preBrands) => {
                                                if (preBrands.find(item => item === e.target.name))
                                                    return preBrands.filter(item => (item !== e.target.name))
                                                return [...preBrands, e.target.name]
                                            })
                                        }} />
                                        <span> {brand.name} </span>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className='text-[14px] font-bold leading-5 tracking-[-0.4px] mb-5'>
                        Films
                    </div>
                    {/* List categories/Brand */}
                    <div className='mb-5'>
                        <ul className='flex flex-col gap-[10px]'>
                            {films.map((film, index) => {
                                return (
                                    <li key={index} className='flex gap-3 max-w-[190px] text-[13px] leading-[17px] tracking-[-0.4px] items-center'>
                                        <input type='checkbox' className='w-5 h-5 accent-primary mr-3 cursor-pointer' name={film.id} onClick={(e) => {
                                            setPage(0)
                                            setFilmFilter((preFilms) => {
                                                if (preFilms.find(item => item === e.target.name))
                                                    return preFilms.filter(item => (item !== e.target.name))
                                                return [...preFilms, e.target.name]
                                            })
                                        }} />
                                        <span> {film.name} </span>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col mt-[46px] mr-[142px]'>
                    <div className='flex flex-col items-end'>
                        {/* sort  option*/}
                        <BtnSort></BtnSort>
                        {/* number of products */}
                        <div className='h-7 text-[14px] leading-5 tracking-[-0.4px] mb-[18px]'>Total: {numProduct} Products</div>
                    </div>
                    <div className='grid grid-cols-3 gap-5 mb-10'>
                        {

                            (brandFilter.length === 0) && (filmFilter.length === 0) ? products.map((product, index) => {
                                return <ProductCard key={index} id={product.id} name={product.name} price={product.price} quantity={product.quantity} media={product.medias[0]} description={product.description} flim={product.flim} brand={product.brand} discounted='0' />
                            }) : productFilter.map((product, index) => {
                                return <ProductCard key={index} id={product.id} name={product.name} price={product.price} quantity={product.quantity} media={product.medias[0]} description={product.description} flim={product.flim} brand={product.brand} discounted='0' />
                            })
                        }
                    </div>
                    <div className='flex justify-center items-center'>
                        {page + 1 === totalPage ? <button className='w-[298px] h-[50px] block items-center justify-center text-textprimary text-center font-semibold leading-[22px] tracking-[-0.4px] border-2' onClick={function () {
                            setPage(0)
                            setProducts([])
                        }}>Collapse products</button> : <button className='w-[298px] h-[50px] block items-center justify-center text-textprimary text-center font-semibold leading-[22px] tracking-[-0.4px] border-2' onClick={function () {
                            setPage((prePage) => prePage + 1)
                        }}>Load more products</button>}
                    </div>
                </div>
            </div>
        </div>
    )
}
