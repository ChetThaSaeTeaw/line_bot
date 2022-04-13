import React , { useState } from 'react';
import './Navbar.css';
import Cookies from 'js-cookie'
import { useTranslation } from 'react-i18next'

function Navbar({ languages }) {

    const [ subMenu , setSubMenu ] = useState(false);

    function setLanguage () {
        if (Cookies.get('i18next') === 'en') {
            Cookies.set('i18next' , 'th');
        } else {
            Cookies.set('i18next', 'en')
        }
    
        window.location.pathname = '/'
    }


    const currentLanguageCode = Cookies.get('i18next') || 'th'
    const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
    const { t } = useTranslation()

    function toggleSubMenu () {
        setSubMenu(!subMenu);
    }

  return (
    <div className='navbar_container'>
        <div className='nav_logo'>
            <img src="https://i.pinimg.com/originals/0c/67/5a/0c675a8e1061478d2b7b21b330093444.gif" alt="Logo" />
        </div>
        <div>
            <ul>
                <li><a href='#'>{t('navbar-home')}</a></li>
                <li><a href='#'>{t('navbar-about')}</a></li>
                <li><a href='#'>{t('navbar-service')}</a></li>
                <li><a href='#'>{t('navbar-contract')}</a></li>
            </ul>
            <i className="fa-solid fa-globe"></i>
          { Cookies.get('i18next') === 'th' ? 
            <select onChange={setLanguage}>
                <option>{t("language-th")}</option>
                <option>{t('language-en')}</option>
            </select> 
            : <select onChange={setLanguage}>
                <option>{t('language-en')}</option>
                <option>{t("language-th")}</option>
              </select> }
        </div>
        { !subMenu ? <i onClick={toggleSubMenu} className="fa-solid fa-align-justify"></i> 
        : <i  onClick={toggleSubMenu}  className="fa-solid fa-xmark"></i> }
        <div className='submenu'>
            <ul>
                <li><a href='#'>{t('navbar-home')}</a></li>
                <li><a href='#'>{t('navbar-about')}</a></li>
                <li><a href='#'>{t('navbar-service')}</a></li>
                <li><a href='#'>{t('navbar-contract')}</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar;