import IconBlack from '../../images/icon-black.png';
import Linkedin from "../../images/linkedin-pink.svg";
import Github from "../../images/github-pink.svg";
import { NavLink,Link } from 'react-router-dom';
import './SideMenu.scss';

const SideMenu = () => {
    return (
        <article className='side-menu'>
            <section className='main-menu'>
                <Link 
                    to='/personal-portfolio'
                    className='main-menu__icon'>
                    <img 
                        src={IconBlack} 
                        className='main-menu__icon__img'
                        alt='icon-black'
                    >
                    </img>
                </Link>
                <section className='main-menu__links'>
                    <NavLink
                        to='/personal-portfolio'
                        className='main-menu__links__navlink'
                    >
                        Main
                    </NavLink>
                    <NavLink
                        to='/about'
                        className='main-menu__links__navlink'
                    >
                        About
                    </NavLink>
                    <NavLink
                        to='/portfolio'
                        className='main-menu__links__navlink'
                    >
                        Portfolio
                    </NavLink>
                    <NavLink
                        to='Contact'
                        className='main-menu__links__navlink'
                    >
                        Contact
                    </NavLink>
                </section>
                <section className='main-menu__profile'>
                    <a
                        href='https://github.com/toshallubana'
                        className='main-menu__profile__link' 
                        target='_blank' 
                        rel="noreferrer"
                    >
                        <img 
                            src={Github}
                            alt='GitHub'
                        >
                        </img>
                    </a >
                    <a 
                        href='https://www.linkedin.com/in/toshal-lubana-79419a181/'
                        className='main-menu__profile__link'
                        target='_blank' 
                        rel="noreferrer"
                    >
                        <img 
                            src={Linkedin}
                            alt='LinkdIn'
                        >
                        </img>
                    </a>
                </section>
                <section className="main-menu__email">
                    <span className="main-menu__email__txt">
                        &lt; / ekaterine.jpg@gmail.com &gt;
                    </span>
                </section>
            </section>
        </article>
    )
}
export default SideMenu;