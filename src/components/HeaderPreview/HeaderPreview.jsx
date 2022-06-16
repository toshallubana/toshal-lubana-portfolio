import './HeaderPreview.scss';
import { useTypewriter } from 'react-simple-typewriter'

const HeaderPreview = () => {
    const { text } = useTypewriter({
        words :['FrontEnd Engineer','React.js Developer','Javascript Developer'],
        loop: false,
        typeSpeed: 100,
        deleteSpeed: 60,
        delaySpeed: 1500,
      });
    return (
        <section className='main-page__head'>
            <div className='main-page__head__title'>
                <h1 className='main-page__head__title__value h1-tag'>
                    Hi, I'm <br></br>
                    <em className="main-page__head__title__value__pink-text">
                        Toshal Lubana
                    </em>
                    <br></br>
                    {text}
                </h1>
                <p className='p-tag main-page__head__title__para'>
                    Font End Development
                </p>
                <a className='main-page__head__title__download pink-text'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="file-earmark-arrow-down_svg__bi file-earmark-arrow-down_svg__bi-file-earmark-arrow-down"><path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z"></path><path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"></path></svg>
                    <p className='main-page__head__title__download__para'>
                    Download Resume
                    </p>
                    
                </a>
            </div>
        </section>
    )
}
export default HeaderPreview;