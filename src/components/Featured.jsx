import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

const Featured = () => {
    const sliders = [
        {
            url: 'http://foodphoto.vn/wp-content/uploads/2018/06/chup-anh-PIZZA-1.jpg'
        },
        {
            url: 'https://images7.alphacoders.com/434/thumb-1920-434468.jpg'
        },
        {
            url: 'https://i.pinimg.com/originals/8e/27/3b/8e273b2c67985aed30159fa55fbbdd63.jpg',
        },

    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlider = () => {
        const isFirstSlider = currentIndex === 0
        const newIndex = isFirstSlider ? sliders.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const nextSlider = () => {
        const isLastSlider = currentIndex === sliders.length - 1
        const newIndex = isLastSlider ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const moveToNextSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }
    return (
        <div className='max-w-[1720px] h-[400px] w-full py-4 px-4 relative group'>
            <div className='w-full h-full rounded-2xl bg-center bg-cover duration-300'
                style={{ backgroundImage: `url(${sliders[currentIndex].url})` }}
            >
            </div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlider} />
            </div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlider} />
            </div>
            <div className='flex top-4 justify-center py-2'>
                {
                    sliders.map((sliderItem, slideIndex) => (
                        <div
                            key={slideIndex}
                            onClick={() => moveToNextSlide(slideIndex)}
                            className='text-2xl cursor-pointer'
                        >
                            <RxDotFilled />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Featured
