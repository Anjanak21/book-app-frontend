
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
const Recommented=() => {
    //  const[books,setBooks]=useState([])
        
    //      useEffect(()=>{
    //         fetch('books.json')
    //         .then((res)=>res.json())
    //         .then((data)=>setBooks(data))
    //         .catch((error)=>console.error('error:',error))
    //      },[])
    const {data:books=[]}=useFetchAllBooksQuery();
  return (
    <div className='py-16'>
      <h2 className='text-3xl font-semibold mb-6'>Recommented for you</h2>
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
        books.length>0 && books.slice(8,18).map((book,index)=>(
            <SwiperSlide key={index}>
                            <BookCard book={book} />
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

export default Recommented
