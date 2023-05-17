import React from 'react';

const HomeForm = () => {
    return (
        <div className='lg:my-10  md:my-8 my-6 px-3'>
            <h2 className='lg:text-4xl md:text-3xl text-2xl text-center lg:my-10 md:my-8 my-6'>Let us handle your project <strong className='text-primary'>Professionally</strong></h2>
            <form className='text-center'>
                <input type="text" placeholder="Your Name" className="input w-full max-w-xl mb-2" />
                <input type="text" placeholder="Email Address" className="input w-full max-w-xl mb-2" />
                <input type="text" placeholder="Phone Number" className="input w-full max-w-xl mb-2" />
                <textarea className="textarea w-full max-w-xl mb-3" placeholder="Message"></textarea>
                <div>
                    <button className='btn-primary text-white btn-sm rounded'>Send Message</button>
                </div>
            </form>
        </div>
    );
};

export default HomeForm;