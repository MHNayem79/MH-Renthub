import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const AvailableCars = () => {
    const [availableCars, setAvailableCars] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allCars')
            .then(res => res.json())
            .then(data => {
                setAvailableCars(data)
            })
    }, [])
    return (
        <section className="py-16 text-black bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="text-5xl font-semibold mb-6">Available Cars</h2>
                <p className="text-2xl text-gray-600 mb-12">Check out the latest cars added to our platform.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
                    {availableCars.map((car) => (
                        <div key={car.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
                            <img src={car.image} alt={car.model} className="w-full h-52 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{car.model}</h3>
                                <p className="text-gray-700 text-lg font-medium">{car.price}</p>

                                <div className="flex justify-between items-center mt-4">
                                    <span className={`px-3 py-1 text-sm font-semibold rounded-full ${car.available ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                        {car.available ? "Available" : "Unavailable"}
                                    </span>
                                    <span className="text-sm text-gray-500">Bookings: {car.booking_count}</span>
                                </div>

                                <p className="text-sm text-gray-500 mt-2">{car.datePosted}</p>
                                <NavLink to={`/carDetails/${car._id}`} className='btn btn-primary mt-4'>Book Now</NavLink>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AvailableCars;