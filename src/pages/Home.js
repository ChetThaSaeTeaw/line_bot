import React , { useEffect } from 'react';
import './Home.css';
import { useTranslation } from 'react-i18next'
import Cookies from 'js-cookie'
import Navbar from '../components/Navbar/Navbar';
import { content01 , content02 } from "../utils/Lists/Content";
import Content01 from '../components/content01/Content01';
import Content02 from '../components/content02/Content02';
import messagerIcon from '../utils/Picture/messager.png';
import lineIcon from '../utils/Picture/line_icon.png';
import twitterIcon from '../utils/Picture/twitter_icon.png';
import chatBot from '../utils/Picture/chatBot_icon.png';


function Home() {

    const languages = [
        {
            code : 'th',
            name : 'Thai',
            country_code : 'th'
        },{
            code : 'en',
            name : 'English',
            country_code : 'en'
        }
    ];

    const currentLanguageCode = Cookies.get('i18next') || 'th'
    const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
    const { t } = useTranslation()

    useEffect(() => {
        document.body.dir = currentLanguage.dir || 'ltr'
        document.title = t('title')
        console.log(currentLanguageCode)
      }, [currentLanguage]);

      
  return (
    <div className='home_container'>
        <Navbar languages={languages} />
        <div className='carousel_container'>
            <div></div>
        </div>
        <Content01 data={content01} />
        <div className='platform_container'>
            <h1>OneDee AI ที่เชื่อมต่อแพลตฟอร์มต่างๆ ได้มากกว่า</h1>
            <div className='platform_boxes'>
                <div>
                    <img src={messagerIcon} alt="messager_icon" />
                    <p>Facebook Messenger</p>
                </div>
                <div>
                    <img src={lineIcon} alt="line_icon" />
                    <p>Line</p>
                </div>
                <div>
                    <img src={twitterIcon} alt="twitter_icon" />
                    <p>Twitter</p>
                </div>
                <div>
                    <img src={chatBot} alt="chatbot_icon" />
                    <p>Chat Bot</p>
                </div>
            </div>
        </div>
        <Content02 data={content02} />
    </div>
  )
}

export default Home;