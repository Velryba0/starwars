import React, { useState, useEffect } from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import { requestStarshipData } from '../../store/ducks/starship'

const Home = () => {

    const starshipDataStore = useSelector(state => state);

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(requestStarshipData())
    }, [])

    console.log(starshipDataStore)
    


    return (
        <>
        <h1>Home</h1>
        </>
    )
}

export default Home;