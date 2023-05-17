import React from "react";
import purpose1 from '../../../images/purposes/purpose1.jpg';
import purpose2 from '../../../images/purposes/purpose2.jpg';
import purpose3 from '../../../images/purposes/purpose3.jpg';


const Purposes = () => {
  const purposes = [
    {
      id: 1,
      title: "Only the best",
      description:
        "The salon is highly specialized in offering comprehensive hair care ranging from hair color, haircut, bridal, treatments, up-dos, and foiling.",
      image: purpose1,
    },
    {
      id: 2,
      title: "Online appointment",
      description:
        "With an online booking system, clients can see entire weeks of a salons' availability at a time and choose the option that works best for them.",
      image: purpose2,
    },
    {
      id: 3,
      title: "Relax while you wax",
      description:
        "You can create a relaxed environment by using oil diffusers and by burning incense in our salon. Relaxing scents such as patchouli and lavender.",
      image: purpose3,
    },
  ];

  return (
    <div className='px-3 lg:my-10 md:my-8 my-6'>
      <h2 className="lg:text-4xl md:text-3xl text-2xl text-center">
        Our <strong className="text-primary">Purposes</strong>
      </h2>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-10'>
        {purposes.map((purpose) => {
          return (
            <div key={purpose.id} className='bg-white p-8'>
              <img className='w-20 rounded-full mx-auto' src={purpose.image} alt="" />
              <h4 className='my-3 font-bold text-center'>{purpose.title}</h4>
              <p className='text-justify'>{purpose.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Purposes;
