import React, { useEffect, useState } from 'react'
import ProductCard from '../components/Product/ProductCard'
import BtnSort from '../components/comon/BtnSort'
import axios from 'axios'
import Pagination from '../components/comon/Pagination';

export default function ShopMain({ searchValue }) {
    console.log('===============re-render===============');
    console.log(searchValue);
    //data sample
    const [products, setProducts] = useState([])
    const [page, setPage] = useState(0)
    console.log("🚀 ~ file: ShopMain.js:12 ~ ShopMain ~ page:", page)

    const [numProduct, setNumProduct] = useState(0)
    const [brands, setBrands] = useState([])
    const [films, setFilms] = useState([])

    const [sort, setSort] = useState('ASC')
    const [brandFilter, setBrandFilter] = useState(new Set())
    const [filmFilter, setFilmFilter] = useState(new Set())

    const [totalPage, setTotalPage] = useState(0)
    console.log("🚀 ~ file: ShopMain.js:23 ~ ShopMain ~ totalPage:", totalPage)

    useEffect(() => {
        axios
            .get('http://localhost:8080/api/brands')
            .then(res => {
                setBrands(res.data)
            })
        axios
            .get('http://localhost:8080/api/films')
            .then(res => {
                setFilms(res.data)
            })
        axios
            .get('http://localhost:8080/api/products?page=0&size=6&direction=ASC')
            .then(res => {
                setProducts(res.data.content)
                setNumProduct(res.data.totalElements)
                setTotalPage(res.data.totalPages)
            })
    }, [])

    useEffect(() => {
        const query = getQueryString()
        console.log(query);
        if (query.indexOf('brands') !== -1 && query.indexOf('films') === -1) {
            console.log(1)
            axios
                .get('http://localhost:8080/api/products/brand?' + query.replaceAll('brands', 'ids'))
                .then(res => {
                    setProducts(res.data.content)
                    setNumProduct(res.data.totalElements)
                    setTotalPage(res.data.totalPages)
                })
        }
        if (query.indexOf('brands') === -1 && query.indexOf('films') !== -1) {
            console.log(2)
            axios
                .get('http://localhost:8080/api/products/film?' + query.replaceAll('films', 'ids'))
                .then(res => {
                    setProducts(res.data.content)
                    setNumProduct(res.data.totalElements)
                    setTotalPage(res.data.totalPages)
                })
        }
        axios
            .get('http://localhost:8080/api/products?' + query)
            .then(res => {
                setProducts(res.data.content)
                setNumProduct(res.data.totalElements)
                setTotalPage(res.data.totalPages)
            })

        const element = document.getElementById('shopmain');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }

    }, [sort, brandFilter, filmFilter, page])

    const getQueryString = () => {
        const params = new URLSearchParams()
        params.append('page', page)
        params.append('size', 6)
        params.append('sort', sort)
        if (brandFilter.size > 0) {
            brandFilter.forEach(brand => {
                params.append('brands', brand)
            })
        }
        if (filmFilter.size > 0) {
            filmFilter.forEach(film => {
                params.append('films', film)
            })
        }
        return params.toString()
    }
    const handlePage = (value) => setPage(value)
    const handleNextPage = (e) => setPage(pre => (pre + 1) < (totalPage - 1) ? pre + 1 : (totalPage - 1))
    const handlePrePage = (e) => setPage(pre => pre > 0 ? pre - 1 : 0)

    return (
        <div id='shopmain'>
            <div className='grid grid-cols-[30%_70%]'>
                <div className='pt-[43px] ml-[145px]'>
                    <div className='mb-5'>
                        <div className='inline-block w-[75px] text-[22px] font-semibold leading-[30px] tracking-[-0.55px] mr-2'>Filters</div>
                        <button type='reset' className='inline-block text-[#C4C4C4] text-[14px] leading-5 tracking-[-0.4px] underline' onClick={() => {
                            setBrandFilter([])
                            setFilmFilter([])
                            document.querySelectorAll('.brand').forEach(item => item.checked = false)
                            document.querySelectorAll('.film').forEach(item => item.checked = false)
                        }}>Clear filters</button>
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
                                        <input type='checkbox' className='brand w-5 h-5 accent-primary mr-3 cursor-pointer' name={brand.id} onClick={(e) => {
                                            setPage(0)
                                            setBrandFilter((preBrands) => {
                                                if (preBrands.has(e.target.name)) {
                                                    preBrands.delete(e.target.name)
                                                } else {
                                                    preBrands.add(e.target.name)
                                                }
                                                return new Set(preBrands)
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
                                        <input type='checkbox' className='film w-5 h-5 accent-primary mr-3 cursor-pointer' name={film.id} onClick={(e) => {
                                            setPage(0)
                                            setFilmFilter((preFilms) => {
                                                console.log(preFilms)
                                                if (preFilms.has(e.target.name)) {
                                                    preFilms.delete(e.target.name)
                                                } else {
                                                    preFilms.add(e.target.name)
                                                }
                                                return new Set(preFilms)
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
                        <BtnSort handleSort={(sortValue) => {
                            setSort(sortValue)
                        }}></BtnSort>
                        <div className='h-7 text-[14px] leading-5 tracking-[-0.4px] mb-[18px]'>Total: {numProduct} Products</div>
                    </div>
                    <div className='grid grid-cols-3 gap-5 mb-10'>
                        {
                            products.map((product, index) => {
                                return <ProductCard key={index} id={product.id} name={product.name} price={product.price} quantity={product.quantity} media={product.medias[0]} description={product.description} flim={product.flim} brand={product.brand} discounted='0' />
                            })
                        }
                    </div>
                    <div className='flex justify-center items-center'>
                        <Pagination
                            totalPage={totalPage}
                            currentPage={page}
                            handlePrePage={handlePrePage}
                            handleNextPage={handleNextPage}
                            handlePage={handlePage}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
