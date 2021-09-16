import React, { useState } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { Text, BoldText, TimeText } from './basic-components'
import { feed_data } from './data.js'

export let Feed = () => {
    return (
        <div className="feed-container justify-between mx-16 ml-auto py-4 h-full">
            {feed_data.map(element => {
                return (
                    <div className="flex justify-between gap-5 mb-8">
                        <div className="flex flex-col justify-start">
                            <div className="flex flex-row gap-1">
                                <BoldText text={element.name}/>
                                <Text text={element.work}/>
                            </div>
                            <div className="divider rounded-md mt-3"></div>
                        </div>
                        <div className="flex justify-end">
                            <TimeText text={element.time}/>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}