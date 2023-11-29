import React, { useState, useEffect } from 'react'
import Card2 from './Card2'
import { getData } from '../../services/data'

export default function BlockSecond() {
    const [crypto, setCrypto] = useState([])
    const [sort, setSort] = useState("asc")
    const [displayCount, setDisplayCount] = useState(5);
    useEffect(() => {
        getData().then((res) => {
            let newArr = res.splice(0, displayCount)
            setCrypto(newArr)
        })
    }, [displayCount])

    const showMore = () => {
        setDisplayCount(displayCount + 5);
    };

    const sortByTitle = () => {
        const sortArr = [...crypto]
        if (sort === "asc") {
            sortArr.sort((a, b) => {
                return a.name.localeCompare(b.name)
            })
            setSort("desc")
        } else {
            sortArr.sort((a, b) => {
                return b.name.localeCompare(a.name)
            })
            setSort("asc")
        }
        setCrypto(sortArr)
    }

    const sortByPrice = () => {
        const sortArr = [...crypto]
        if (sort === "asc") {
            sortArr.sort((a, b) => {
                return a.priceUsd - b.priceUsd
            })
            setSort("desc")
        } else {
            sortArr.sort((a, b) => {
                return b.priceUsd - a.priceUsd
            })
            setSort("asc")
        }
        setCrypto(sortArr)
    }

    const sortByPercent = () => {
        const sortArr = [...crypto]
        if (sort === "asc") {
            sortArr.sort((a, b) => {
                return a.changePercent24Hr - b.changePercent24Hr
            })
            setSort("desc")
        } else {
            sortArr.sort((a, b) => {
                return b.changePercent24Hr - a.changePercent24Hr
            })
            setSort("asc")
        }
        setCrypto(sortArr)
    }

    return (
        <div className='blockSecond'>
            <div className='blockTop'>
                <div className='head'>
                    <div className='sort' onClick={sortByTitle}>
                        <div className='text10'> Name </div>
                        <i className="fa-solid fa-sort"></i>
                    </div>
                    <div className='headChildren'>
                        <div className='sort' onClick={sortByPrice}>
                            <div className='text10'> Price </div>
                            <i className="fa-solid fa-sort"></i>
                        </div>
                        <div className='sort' onClick={sortByPercent}>
                            <div className='text10'> Change 24h </div>
                            <i className="fa-solid fa-sort"></i>
                        </div>
                    </div>
                </div>
                <div className='blocks'>
                    {crypto.map((coin) => {
                        return <Card2 key={coin.id} coin={coin} />
                    })}
                </div>
                <div className='showMore' onClick={showMore} > Show More </div>
            </div>
            <div className='blockBottom'></div>
        </div>
    )
}
