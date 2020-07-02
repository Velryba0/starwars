import React, { useState, useEffect } from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import { requestStarshipData } from '../../store/ducks/starship'
import { requestStarshipDataPages } from '../../store/ducks/starshipsPages'

// Components

import TableStarships from '../../components/tableStarships/index'
import PaginationTable  from '../../common/pagination/index'

//Styles

import './home.style.scss'

const Home = () => {

    const [count, setCount] = useState(1);
    const [loading, setLoading] = useState(true)

    const dataStarships = useSelector(state => state );
    const dataStarshipsPages = useSelector(state => state);

    

    const dispatch = useDispatch();

    let countPag = Math.ceil(dataStarships.starships.count / 10)

    useEffect(() => {
        setLoading(true)
        if(count == 1) {
            dispatch(requestStarshipData())
        } else {
            dispatch(requestStarshipDataPages(count))
        }

        setTimeout(() => {
            setLoading(false)
        }, 500);
    }, [count]);

    console.log(dataStarshipsPages)
    // console.log(dataPages)

    const TableData = () => {
        if(dataStarships.starships.results && !loading) {
            return <TableStarships dataNaves={dataStarships.starships.results}/>      
        } else {
            return <div>Loading...</div>
        }
      
    }
    const TableDataPages = () => {
        if(dataStarships.starshipPages.results && !loading) {
            return <TableStarships dataNaves={dataStarshipsPages.starshipPages.results}/>      
        } else {
            return <div>Loading...</div>
        }
      
    }

    console.log("COUNT", countPag)
    


    return (
        <>
        <h1>Home</h1>
        <div className="table-starwars-content">
            { count === 1 ? <TableData/> : <TableDataPages/>} 
            <PaginationTable
            pages={countPag ? countPag : 1}
            page={count}
            setCount={setCount}/>
        </div>
        </>
    )
}

export default Home;