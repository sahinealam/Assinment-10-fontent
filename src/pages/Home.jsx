import React, { useEffect, useState } from 'react';
import { data, Link } from 'react-router';
import Swiper from '../components/Swiper';


const Home = () => {
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        fetch('/animals.json')
            .then(res => res.json())
            .then(data => setAnimals(data)); 
    }, []);
    return (
        <>
            <Swiper animals={animals}></Swiper>
            <div className="space-y-12">
                <section className="text-center">
                    <h2 className="text-3xl font-bold text-green-700 mb-6">Top Rated animals</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {animals.slice(0, 3).map((animal) => (
                            <div
                                key={animal.animalId}
                                className="rounded-2xl p-4 shadow hover:shadow-lg transition bg-white"
                            >
                                <img
                                    src={animal.image}
                                    alt={animal.animalName}
                                    className="w-full h-[450px] object-cover rounded-lg"
                                />
                                <h3 className="text-xl font-semibold mt-3">{animal.animalName}</h3>
                                <p className="text-green-600 font-medium">${animal.price}</p>
                                <p className="text-yellow-500">{animal.rating}</p>
                                <Link
                                    to={`/animals/${animal.animalId}`}
                                    className="mt-3 inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                                >
                                    View Details
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>
                <div className='flex justify-center items-center mt-10'>
                    <Link to='/animals' className="btn bg-linear-to-r from-green-600 to-green-800 py-3 px-4 text-[16px] text-white">Show All</Link>
                </div>

            </div>
        </>
    );
};

export default Home;