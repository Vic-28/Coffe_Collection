import './App.css';
import { useState } from 'react';
import { Coffee } from './Coffee';

function rating(coffee: Coffee) {
    if (coffee.rating !== null && coffee.rating !== undefined) {
        return (
            <div className='coffee-details-rating'>
                <p className='coffee-details-rating-media'>
                    <i className="bi bi-star-fill"></i> {coffee.rating}
                </p>
                <p className='coffee-details-rating-total'>({coffee.votes} votes)</p>
            </div>
        );
    } else {
        return (
            <div className='coffee-details-no-rating'>
                <i className="bi bi-star"></i> <p>No rating</p>
            </div>
        );
    }
}

function App() {
    const [showAvailable, setShowAvailable] = useState<boolean>(false);

    const Coffees: Coffee[] = [
        {
            id: 1,
            name: "Cappuccino",
            image: "https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/cappuccino.jpg",
            price: "$5.20",
            rating: 4.7,
            votes: 65,
            popular: true,
            available: true
        },
        {
            id: 2,
            name: "House Coffee",
            image: "https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/house-coffee.jpg",
            price: "$3.50",
            rating: 4.85,
            votes: 15,
            popular: true,
            available: true
        },
        {
            id: 3,
            name: "Espresso",
            image: "https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/espresso.jpg",
            price: "$2.50",
            rating: 4.9,
            votes: 55,
            popular: false,
            available: true
        },
        {
            id: 4,
            name: "Coffee Latte",
            image: "https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/coffee-latte.jpg",
            price: "$4.50",
            rating: 5.0,
            votes: 23,
            popular: false,
            available: true
        },
        {
            id: 5,
            name: "Chocolate Coffee",
            image: "https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/chocolate-coffee.jpg",
            price: "$4.00",
            rating: 4.65,
            votes: 122,
            popular: false,
            available: false
        },
        {
            id: 6,
            name: "Valentine Special",
            image: "https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/valentine-special.jpg",
            price: "$5.50",
            rating: null,
            votes: 0,
            popular: false,
            available: true
        }
    ];

    const filteredCoffees = showAvailable ? Coffees.filter(coffee => coffee.available) : Coffees;

    return (
        <main className='collection'>
            <section className='coll-header'>
                <h1 className='coll-header-title'>Our Collection</h1>
                <p className='coll-header-description'>
                    Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.
                </p>
                <section className='coll-header-options'>
                    <a
                        className={`coll-header-options-button ${!showAvailable ? 'active' : ''}`}
                        onClick={() => setShowAvailable(false)}>
                        All Products
                    </a>
                    <a
                        className={`coll-header-options-button ${showAvailable ? 'active' : ''}`}
                        onClick={() => setShowAvailable(true)}>
                        Available Now
                    </a>
                </section>
            </section>
            <section className='coll-products'>
                <section className='coll-products-coffees'>
                    {filteredCoffees.map(coffee => (
                        <div key={coffee.id} className='coffee-item'>
                            <img src={coffee.image} alt={coffee.name} className='coffee-image' />
                            <section className='coffee-details-header'>
                                <p className='coffee-details-header-name'>{coffee.name}</p>
                                <p className='coffee-details-header-price'>{coffee.price}</p>
                            </section>
                            <section className='coffee-item-details'>
                                {rating(coffee)}
                                {!coffee.available && (
                                    <div className="coffee-item-details-soldOut">Sold Out</div>
                                )}
                            </section>
                        </div>
                    ))}
                </section>
            </section>
        </main>
    );
}

export default App;
