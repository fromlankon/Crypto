import React from 'react'
import Card from './Card'
import { cryptoData } from '../../mockData'

export default function BlockFirst() {
    return (
        <div className='first'>
            <div className='top'>
                <img src="https://incrypto.merku.love/static/media/icon-wallet-light.1558aa7d9067ecc7222fcd09512cc043.svg" />
                <p className='text1'> Wallet Cryptocurrency </p>
            </div>
            <div className='blackBox'>
                <img className='mountain' src="https://incrypto.merku.love/static/media/mountains.480723aab737044962d47a4b8ea75afb.svg" />
                <img className='envelope' src="https://incrypto.merku.love/static/media/wallet.438f370c1c5a7e7244ae.webp" />
                <p className='text2'> Total Assets </p>
                <div className='currencyBlock'>
                    <p className='text3'> 4960.01 </p>
                    <div className='currency'> USD </div>
                </div>
                <div className='btc'>
                    <p className='text4'> 0.234156 </p>
                    <p className='text5'> BTC </p>
                </div>
            </div>
            <div className="bottom">
                <div className='border'>
                    {cryptoData.map((data) => {
                        return <Card key={data.id} data={data} />
                    })}
                </div>

            </div>
        </div>
    )
}
