import React from 'react'

export default function Pagination({
  totalPage,
  currentPage,
  handlePage,
  handlePrePage,
  handleNextPage }) {

  return (
    <div className='flex items-center justify-center gap-1'>
      <button
        className='btn-pre border-[2px] px-2 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed'
        onClick={handlePrePage}
        disabled={currentPage === 0}
      >
        Previous
      </button>
      {
        totalPage <= 2 ? Array(totalPage).fill().map((item, index) => {
          return <button
            className={index === currentPage ? 'border-[2px] px-2 rounded-lg text-[#fff] bg-primary' : 'border-[2px] px-2 rounded-lg'}
            key={index}
            onClick={() => handlePage(index)}
          >
            {index + 1}
          </button>
        })
          : <div>
            {currentPage === 0 ? '' : <button className='btn-pre border-[2px] px-2 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed'>
              ...
            </button>}
            {
              Array(totalPage-currentPage >= 3 ? 3 : totalPage-currentPage).fill(currentPage).map((item, index) => {
                console.log("🚀 ~ file: Pagination.js:35 ~ Array ~ currentPage:", currentPage)
                return <button
                  className={item+index === currentPage ? 'border-[2px] px-2 rounded-lg text-[#fff] bg-primary' : 'border-[2px] px-2 rounded-lg'}
                  // className='border-[2px] px-2 rounded-lg'
                  key={index}
                  onClick={()=> handlePage(index+currentPage)}
                >
                  {index+currentPage+1}
                </button>
              })
            }
            {currentPage === totalPage - 1? '' :<button className='btn-pre border-[2px] px-2 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed'>
              ...
            </button>}
          </div>
      }
      <button
        className='btn-next border-[2px] px-2 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed'
        onClick={handleNextPage}
        disabled={currentPage === totalPage - 1}
      >
        Next
      </button>
    </div>
  )
}
