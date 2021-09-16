import React, { useState } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { Logo, NavButtonText } from './basic-components.js'

export let Navbar = () => {
    return (
        <div className="navbar flex justify-between px-8 py-1 items-center">
            <Logo/>

            <div className="navbar-left flex gap-16 items-center justify-end">
                <button className="bg-blue-100 rounded-3xl shadow-md px-12 py-2 border-none">
                    <NavButtonText text={'Feed'}/>
                </button>
                <button className="bg-blue-100 rounded-3xl shadow-md px-12 py-2 border-none">
                    <NavButtonText text={'Leaderboard'}/>
                </button>

                <div className="online-circle h-16 w-16 bg-blue-300 rounded-3xl"></div>
            </div>

        </div>
    )
}