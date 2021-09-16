import React, { useState } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

export let OnlineBar = () => {
    return (
        <div className="flex flex-col gap-5 items-center justify-start py-4 h-full w-16 rounded-full bg-blue-100 ml-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(element => {
                return (
                    <div className="online-circle online-bar-circle relative bg-blue-300 border border-green-500">
                        <div className="h-3 w-3 rounded-full bg-green-500 absolute bottom-0 right-0"></div>
                    </div>
                )
            })}
        </div>
    )
}