import React from 'react'

export default function Card3({data}) {
    return (
        <div className="card3">
            <div>
                <p className='text11'> {data.rank} </p>
                <p className='text12'> {data.title} </p>
            </div>
            <div>
                <p className='text13'> Wallet Increase: </p>
                <p className='percent'> {data.walletIncrase} % </p>
            </div>
        </div>
    )
}
