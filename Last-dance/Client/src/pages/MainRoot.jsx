import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router'

function MainRoot() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default MainRoot