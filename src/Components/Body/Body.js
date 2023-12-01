import './body.scss'
import './body.css'
import { useState } from 'react'
import {useContext } from 'react';
import ThemeContext from '../Context/ThemeContext';

const Body = () => {
    const theme = useContext(ThemeContext);
    console.log(theme);
    
    const [chats] = useState([
        {
            img: 'https://static.dw.com/image/64742971_804.jpg',
            name: 'Ilon Mask',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, accusamus aut. ...',
        },

        {
            img: 'https://storage.yandexcloud.net/incrussia-prod/wp-content/uploads/2021/10/GettyImages-511820410.jpg',
            name: 'Povel Durov',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, accusamus aut. ...',
        },

        {
            img: 'https://media.snl.no/media/27818/standard_compressed_Jobs.jpg',
            name: 'Stive Jobs',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, accusamus aut. ...',
        },

        {
            img: 'https://ted-conferences-speaker-photos-production.s3.amazonaws.com/yoa4pm3vyerco6hqbhjxly3bf41d',
            name: 'Bill Gates',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, accusamus aut. ...',
        },

        {
            img: 'https://cdn.britannica.com/19/101219-050-A07A26EF/Barack-Obama.jpg',
            name: 'Obama',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, accusamus aut. ...',
        },

        {
            img: 'https://i.ndtvimg.com/i/2017-03/rowan-atkinson_640x480_71490079191.jpg?im=Resize=(1230,900)',
            name: 'Mr Bean',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, accusamus aut. ...',
        },

        {
            img: 'https://dilshod1405.pythonanywhere.com/static/post/images/main-photo.png',
            name: 'Dilshod Normurodov',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, accusamus aut. ...',
        },
    ])
    return (
        <div className={`${theme.theme} body`}>
            <ul className={`${theme.theme} chats`}>
                {chats.map((chat) => {
                    return (
                        <li>
                            <img src={chat.img} alt="" />
                            <div className="member">
                                <h6 className={`${theme.theme}`}>{chat.name}</h6>
                                <p className={`${theme.theme}`}>{chat.text}</p>
                            </div>
                        </li>
                    )
                })}
                
            </ul>
        </div>
    )
}

export default Body;