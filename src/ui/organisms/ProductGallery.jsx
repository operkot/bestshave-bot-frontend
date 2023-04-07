import styled from 'styled-components'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import { Box } from 'ui/atoms'

const SWIPER_OPTIONS = {
  modules: [Pagination],
  loop: true,
  pagination: {
    el: '.product-gallery-pagination',
    clickable: true,
  },
}

const ProductGalleryPagination = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  padding: 10px;

  .swiper-pagination-bullet {
    display: block;
    width: 10px;
    height: 2px;
    margin: 0 2px;
    background-color: #fff;
    opacity: 0.4;
  }

  .swiper-pagination-bullet-active {
    opacity: 1;
  }
`

const ProductGalleryImg = ({ src }) => (
  <Box position="relative" pt="100%">
    <Box
      position="absolute"
      top={0}
      left={0}
      w="100%"
      h="100%"
      zIndex={2}
      backgroundImage="linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.15) 100%)"
      pointerEvents="none"
    />
    <Box
      as="img"
      src={src}
      alt=""
      position="absolute"
      top={0}
      left={0}
      w="100%"
      h="100%"
      objectFit="cover"
      objectPosition="center"
    />
  </Box>
)

const ProductGallerySwiper = ({ images }) => (
  <Swiper {...SWIPER_OPTIONS}>
    {images.map((img, idx) => (
      <SwiperSlide key={idx}>
        <ProductGalleryImg src={img} />
      </SwiperSlide>
    ))}
    <ProductGalleryPagination className="product-gallery-pagination" />
  </Swiper>
)

export const ProductGallery = ({ images }) => {
  return (
    <Box overflow="hidden">
      {images.length > 1 ? (
        <ProductGallerySwiper images={images} />
      ) : (
        <ProductGalleryImg src={images[0]} />
      )}
    </Box>
  )
}
