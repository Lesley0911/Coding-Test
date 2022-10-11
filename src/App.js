import { Link, Outlet, useParams } from 'react-router-dom';
import './i18n/i18n';
import './App.css';
import i18next from 'i18next';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {useMediaQuery} from 'react-responsive';

const App = () => {
  const [currentLang,setCurrentLang] = useState('en');
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const isResponsiveNav = useMediaQuery({query:'(max-width: 600px)'});
  const {t} = useTranslation();
  const {loginId} = useParams();

  const ChangeLang = () =>{
    if(currentLang == 'en'){
      i18next.changeLanguage('cn').then(()=>{
        setCurrentLang('cn');
      });
    }else{
      i18next.changeLanguage('en').then(()=>{
        setCurrentLang('en');
      });
    }
  }
  
  useEffect(()=>{
    setIsOpen(false);
  },[isResponsiveNav]);

  useEffect(()=>{
    if(loginId != null){
      setIsLogin(true);
    }else{
      setIsLogin(false);
    }
  },[loginId]);

  return(
    <>
      <div id="sidebar">
        <nav>
          <div className='list'>
            <div className='titleBlock'>
              <span className='title' style={{textAlign:'left'}}>Test</span>
            </div>
            <div onClick={()=>{setIsOpen(!isOpen)}} id='responsiveBtn' className='listBlock responsive'>
              ...
            </div>
            <div className={isOpen?'responsive':'block'}>
              <Link to={isLogin?'':'login'}><span className='listBlock'>{t(isLogin?'logout':'login')}</span></Link>
            </div>
            <div className={isOpen?'responsive':'block'}>
              <span onClick={ChangeLang} className='listBlock'>{t('lang')}<span>{t(currentLang)}</span></span>
            </div>
            </div>
        </nav>
      </div>
      <div id="detail"><Outlet/></div>
    </>
  );
}

export default App;
