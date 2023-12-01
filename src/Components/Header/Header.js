import './header.scss'
import './header.css'
import { useState } from 'react'
import {useContext } from 'react';
import ThemeContext from '../Context/ThemeContext';

const Header = () => {
    const theme = useContext(ThemeContext);
    const [profiles] = useState([
        {
            name: 'Dilshod Normurodov',
            img: 'https://dilshod1392.pythonanywhere.com/media/IMG_0503__WF53cNx.jpg'
        },

        {
            name: 'Cristiano Ronaldo',
            img: 'https://static01.nyt.com/images/2022/12/30/multimedia/30soccer-ronaldo-1-76fd/30soccer-ronaldo-1-76fd-mediumSquareAt3X.jpg'
        },

        {
            name: 'Iniesta',
            img: 'https://e0.365dm.com/11/11/800x600/Iniesta1_2676382.jpg?20111110094809'
        },
    ])
    
    return (
        <div className={`${theme.theme} header`}>
            <div id="navbar">
                <h4>WhatsApp</h4>
                <ul>
                    <li><button className='btn'><i class="fa-solid fa-magnifying-glass"></i></button></li>
                    <li><button className='btn' onClick={theme.toggleMode}><i class="fa-regular fa-moon"></i></button></li>
                </ul>
            </div>

            <div className='stories text-center'>
                <div className='row row-cols-3'>
                    
                        {profiles.map((profile) => {
                            return (
                                <div class="col">
                                    <img src={profile.img} alt="" />
                                    <p>{profile.name}</p>
                                 </div>
                            )
                        })}
                </div>
            </div>
        </div>
    )
}

export default Header;