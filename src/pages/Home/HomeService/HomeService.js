import { faClock, faMoneyBillWave, faPerson } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import service1 from '../../../images/services/service1.jpeg';
import service2 from '../../../images/services/service2.jpeg';
import service3 from '../../../images/services/service3.jpg';


const HomeServices = () => {
    const services = [
        {
            id: 1,
            title: 'Hair Cutting & Styling',
            price: '$20',
            time: '1hour',
            barber: 'Female',
            img: service1
        },
        {
            id: 2,
            title: 'Face Treatment',
            price: '$45',
            time: '2.5hour',
            barber: 'Male',
            img: service2
        },
        {
            id: 3,
            title: 'Scalp Treatment',
            price: '$20',
            time: '3hour',
            barber: 'Male',
            img: service3
        }
    ]
    return (
        <div className='my-10'>
            <h2 className='text-4xl text-center'>Our <strong className='text-primary'>Services</strong></h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-10'>
                {
                    services.map(service => {
                        return (
                            <div className='border-4 p-2'>
                                <img className='w-80 h-60 mx-auto' src={service.img} alt='service' />
                                <h3 className='font-bold text-center text-xl my-2'>{service.title}</h3>
                                <div className='flex justify-evenly items-center'>
                                    <p><FontAwesomeIcon icon={faMoneyBillWave} />{service.price}</p>
                                    <p><FontAwesomeIcon icon={faClock}/>{service.time}</p>
                                    <p><FontAwesomeIcon icon={faPerson}/>{service.barber}</p>
                                </div>
                                <div className='text-center my-2'><button className='btn btn-xs bg-accent text-white'>Appointment</button></div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='text-center'>
                <button className='btn btn-xl btn-primary text-white'>Explore More+</button>
            </div>
        </div>
    );
};

export default HomeServices;