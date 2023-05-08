import { default as LanguageSelector } from '../languageSelector';
import './header.css';

export default function PageHeader({languageChange}: {languageChange: (lang: string) => void}) {
   
    return <div className='app-header grid bg-orange-600 grid grid-cols-3 pl-2 pr-2'>
        <div></div>
        <h3 className='text-center '>Vedant Wisdom</h3>
        <div className='language-selector-wrapper'>
            <LanguageSelector onLanguageChange={languageChange}/>
        </div>
    </div> 
}