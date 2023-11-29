import React from 'react'


export default function Card({ data }) {
    return (
        <div className='bottom'>
            <div className="card">
                <div className='cardLeft'>
                    <div className='cardImage'>
                        <img src={data.img} />
                    </div>
                    <div>
                        <p className='text6'> {data.title} </p>
                        <p className='text7'> {data.shotTitle} </p>
                    </div>
                </div>
                <div className='dataWallet'>
                    <p className='text8'> {data.walletPrice} </p>
                    <p className='text9'> {data.addPrice} USD </p>
                </div>
            </div>
        </div>
    )
}
