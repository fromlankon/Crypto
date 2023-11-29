import React from 'react'

export default function Card2({ coin }) {

    const background = coin.changePercent24Hr;
    const backgroundColor = { backgroundColor: background > 0 ? "#1abc7b" : "#f13005" }
    const ToggleStar = () => {
        const [isStarFilled, setStarFilled] = useState(false);

        const toggleStar = () => {
            setStarFilled(!isStarFilled);
        };
    }

    return (
        <div className="card2">
            <div className='cardLeft'>
                <div className='star'>
                    <i className="fa-solid fa-star"></i>
                </div>
                <div className='cardImage'>
                    <img src="https://incrypto.merku.love/static/media/btc.b3d9fc323741d56a571e6a992ff44b8a.svg" />
                </div>
                <div className=''>
                    <p className='text6'> {coin.name} </p>
                    <p className='text7'> {parseFloat(coin.priceUsd).toFixed(2)} </p>
                </div>
            </div>
            <div className='percent' style={backgroundColor}> {parseFloat(coin.changePercent24Hr).toFixed(2)} % </div>
        </div>
    )
}
