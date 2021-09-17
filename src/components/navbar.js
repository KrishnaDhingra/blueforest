import React, { useState, useContext } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { Logo, NavButtonText } from './basic-components.js'
import { NavButton, MyContext } from '../App.js'


export let Navbar = () => {
    const { feed, leaderboard } = useContext(MyContext)
    const [showFeed, setFeed] = feed
    const [showLeaderboard, setLeaderboard] = leaderboard
    return (
        <div className="navbar flex justify-between px-8 py-1 items-center">
            <Logo/>

            <div className="navbar-left flex gap-16 items-center justify-end">
                <NavButton text={'Feed'} onClick={() => setFeed(!showFeed)}/>
                <NavButton text={'Leaderboard'} onClick={() => console.log("Hello everyone")}/>

                <div className="online-circle h-16 w-16 bg-blue-300 rounded-3xl"></div>
            </div>

        </div>
    )
}