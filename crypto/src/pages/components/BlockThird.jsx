import React from 'react'
import Card3 from './Card3'
import { thirdBlock } from '../../mockData'

export default function BlockThird() {
    return (
        <div className='blockThird'>
            <div className='top'>
                <img src="https://incrypto.merku.love/static/media/icon-cup-light.00a7d9c80caca58fbee9a2ec37d0619d.svg" />
                <p className='text1'> Leaderboard </p>
            </div>
            <div className="thirdBlock">
                {thirdBlock.map((data) => {
                    return <Card3 key={data.id} data={data} />
                })}
            </div>
            <div></div>
        </div>
    )
}
