import AnimatedCursor from "react-animated-cursor"
import React from 'react';

export default function Cursor() {
    return (
        <AnimatedCursor
            innerSize={8}
            outerSize={40}
            color="#fff"
            innerScale={1}
            outerScale={1.5}
            outerAlpha={0.1}
            hasBlendMode={true}
            innerStyle={{
                backgroundColor: "#fff"
            }}
            outerStyle={{
                border: '3px solid #fff'
            }}
        />
    )
}