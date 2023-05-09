"use client"; // this is a client component 👈🏽
import React, {useState} from 'react';
import './style.css'

const Collapse = ({children, title, show=false}: {children: React.ReactElement, title: string, show: boolean}) => {
    const [showContent, setShowContent] = useState<boolean>(show)
    const toggle = () => {
        setShowContent(!showContent);
    }
    return <div>
        <div className='collapsible-component' onClick={toggle}>
            <div className='animation' style={{ transform: showContent ? 'rotate(90deg)' : '' }}>{`>`}</div>
            <div className=''>{title}</div>
        </div> 
        <div style={{display: showContent ? 'block' : 'none', marginTop: '-10px', background: '#ffe7dd'}}>{children}</div>
    </div>
}

export default Collapse;