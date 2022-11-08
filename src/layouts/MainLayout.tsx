import React from 'react'
import { Outlet } from "react-router-dom"
import MainFooter from './MainFooter'
import MainHeader from './MainHeader'
function MainLayout() {
    return (
        <>
            <MainHeader />
            <div style={{ height: 5, backgroundColor: "black" }}></div>
            <Outlet />
            <MainFooter />
        </>

    )
}

export default MainLayout