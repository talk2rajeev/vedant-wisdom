"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { default as Img } from './Img';
import {default as PageHeader} from '../../components/app-header';
import {default as bhagwatGita} from '../../files/bhagwatGita';
import './style.css';

function getChapterText(lang: string, i: number) {
    if(lang === 'Hinid') {
      return `अध्याय ${i+1}`;
    } else if(lang === 'English'){
      return `Chapter ${i+1}`;
    } else {
      return `अध्याय ${i+1}`;
    }
  }

const Page = () => {
    const [selectedLanguage, setselectedLanguage] = useState<string>('Hindi');

    const handleLanguageChange =  (language: string) => {
      console.log('Home > selected lang: ', language);
      setselectedLanguage(language);
      localStorage.setItem('lang', language);
    }
    const baseurl = 'http://localhost:3000/bhagwat-gita/';
    return <div>
        <PageHeader languageChange={handleLanguageChange} />
        
            <div>
            <Img />
            </div>
        <main className="md:container md:mx-auto mt-6">
            <div className="grid grid-cols-4 gap-3">
                {
                    Object.keys(bhagwatGita).map((key, i) =>  <a
                        href={`${baseurl}chapter${i+1}-verse1`}
                        className="service-box group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                        rel="noopener noreferrer"
                        key={key}
                      >
                        <p className={`m-0 text-sm opacity-70 mb-2`}>
                        {getChapterText(selectedLanguage, i)}
                        <span className="inline-block font-bold text-lg ml-3 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                          </span>
                        </p>
                        <h2 className={`mb-3 text-slate-600 text-lg font-semibold`}>
                            {selectedLanguage === 'Hindi' ? bhagwatGita[key].chapterNameHindi : bhagwatGita[key].chapterNameEnglish}
                        </h2>
                        
                      </a>
                    )
                }
            </div>
        </main>
    </div> 
}

export default Page;