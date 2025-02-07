import React, { useEffect, useState } from 'react'
import BookCard from '../Books/BookCard'
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useFetchAllBooksQuery } from '../../redux/feature/books/booksApi';
// import { useFetchAllBooksQuery } from '../../redux/feature/books/booksApi';
const categories=['choose a genre','business',"Fiction","Horror","Adventure"]

function Topsellers() {
    // const[books,setBooks]=useState([])
    const[selectedCategory,setselectedCatogory]=useState("choose a genre")
    //  useEffect(()=>{
    //     fetch('books.json')
    //     .then((res)=>res.json())
    //     .then((data)=>setBooks(data))
    //     .catch((error)=>console.error('error:',error))
    //  },[])
    const {data:books=[]}=useFetchAllBooksQuery()
    console.log(books);
    
     const filteredBooks=selectedCategory==="choose a genre" ? books:books.filter(book=>book.category===selectedCategory.toLowerCase())
    //  console.log(filteredBooks);
     
  return (


    <div className='py-10'>
      <h2 className='text-3xl font-semibold mb-6'>Topsellers</h2>
      <div className='mb-6 flex items-center'>
        <select 
        onChange={(e)=>setselectedCatogory(e.target.value)}
        name="category" id="category" className='border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none'>
            {
                categories.map((category,index)=>(
                    <option key={index} value={category}>{category}</option>
                ))
            }
        </select>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true} 
        pagination={{
          clickable: true,
        }}
       
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 50,
          },

        }}
        modules={[Pagination,Navigation]}
        className="mySwiper"
      >
        {
        filteredBooks.length>0 && filteredBooks.map((book,index)=>(
            <SwiperSlide key={index}>
                            <BookCard key={index} book={book} />
            </SwiperSlide>

        ))
      }
        
        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
      
    </div>
  )
}

export default Topsellers
