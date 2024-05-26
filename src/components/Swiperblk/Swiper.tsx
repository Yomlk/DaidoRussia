<Swiper
        spaceBetween={30}
        effect={'fade'}
        
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Pagination]}
        className="mySwiper"
      >
        {Data.map((result,index)=>(
          <SwiperSlide key={index} className='row slide'>
            <div className='col-xxl-4 col-xl-4 col-lg-4'>
              <p className='text'>{result.title}</p>
              
              
            </div>
            <div className='col-xxl-8 col-xl-5 col-lg-5 kamaz'><img className='imyge' src={result.img} /></div>
          
          
          
        </SwiperSlide>
        ))}
        
      </Swiper>