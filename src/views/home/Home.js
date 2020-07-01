import React, { useState, useEffect } from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import { requestStarshipData } from '../../store/ducks/starship'

// Components

import TableStarships from '../../components/tableStarships/index'

const Home = () => {

    // const starshipDataStore = useSelector(state => state);

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(requestStarshipData())
    }, [])

    // console.log(starshipDataStore.starships.results)
    


    return (
        <>
        <h1>Home</h1>
        <TableStarships />
        </>
    )
}

export default Home;