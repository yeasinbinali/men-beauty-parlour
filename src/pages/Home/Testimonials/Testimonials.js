import React from 'react';
import person1 from '../../../images/people/person1.png';
import person2 from '../../../images/people/person2.jpeg';
import person3 from '../../../images/people/person3.jpeg';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1, 
            name: 'Shakib Al Hasan',
            area: 'Magura',
            description: 'A wonderful barber in all aspects, professional, bedside manner, caring and gentle! Awesome experience. Akash Alam is a very attentive and caring barber. Gave very thorough care and he’s very knowledgeable and intelligent.',
            image: person1
        },
        {
            id: 2, 
            name: 'Tahsan Khan',
            area: 'Comilla',
            description: 'A wonderful barber in all aspects, professional, bedside manner, caring and gentle! Awesome experience. Akash Alam is a very attentive and caring barber. Gave very thorough care and he’s very knowledgeable and intelligent.',
            image: person2
        },
        {
            id: 3, 
            name: 'Mashrafe Mortaza',
            area: 'Narail',
            description: 'A wonderful barber in all aspects, professional, bedside manner, caring and gentle! Awesome experience. Akash Alam is a very attentive and caring barber. Gave very thorough care and he’s very knowledgeable and intelligent.',
            image: person3
        }
    ]
    return (
        <div className='my-10'>
            <h2 className='text-4xl text-center mb-10'>Customer <strong className='text-primary'>Testimonials</strong></h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                {
                    testimonials.map(tesmonial => {
                        return(
                            <div className='bg-white p-5'>
                                <p className='text-justify'>❝{tesmonial.description}❞</p>
                                <div className='flex items-center my-6'>
                                    <img className='w-12 h-12 rounded-full' src={tesmonial.image} alt='' />
                                    <div className='ml-2'>
                                        <p className='text-accent font-bold'>{tesmonial.name}</p>
                                        <small>{tesmonial.area}</small>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Testimonials;