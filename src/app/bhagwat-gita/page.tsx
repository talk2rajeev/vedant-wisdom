"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { default as Img } from './Img';
import {default as PageHeader} from '../../components/app-header';
import {default as bhagwatGita} from '../../files/bhagwatGita';
import {ChapterIndexType, ChapterInterface} from '../../files/bhagwatGita';

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

  const getChapterIndex = (chapterNo: string) => {
    if(chapterNo === 'chapter1') return ChapterIndexType.Chapter1;
    if(chapterNo === 'chapter2') return ChapterIndexType.Chapter2;
    if(chapterNo === 'chapter3') return ChapterIndexType.Chapter3;
    if(chapterNo === 'chapter4') return ChapterIndexType.Chapter4;
    if(chapterNo === 'chapter5') return ChapterIndexType.Chapter5;
    if(chapterNo === 'chapter6') return ChapterIndexType.Chapter6;
    if(chapterNo === 'chapter7') return ChapterIndexType.Chapter7;
    if(chapterNo === 'chapter8') return ChapterIndexType.Chapter8;
    if(chapterNo === 'chapter9') return ChapterIndexType.Chapter9;
    if(chapterNo === 'chapter10') return ChapterIndexType.Chapter10;
    if(chapterNo === 'chapter11') return ChapterIndexType.Chapter11;
    if(chapterNo === 'chapter12') return ChapterIndexType.Chapter12;
    if(chapterNo === 'chapter13') return ChapterIndexType.Chapter13;
    if(chapterNo === 'chapter14') return ChapterIndexType.Chapter14;
    if(chapterNo === 'chapter15') return ChapterIndexType.Chapter15;
    if(chapterNo === 'chapter16') return ChapterIndexType.Chapter16;
    if(chapterNo === 'chapter17') return ChapterIndexType.Chapter17;
    if(chapterNo === 'chapter18') return ChapterIndexType.Chapter18;
    
    return ChapterIndexType.Chapter1;
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
        <main className="md:container md:mx-auto mt-6 content">
            <div className="grid grid-cols-4 gap-3">
                {
                    Object.keys(bhagwatGita).map((key, i) =>  <a
                        href={`${baseurl}chapter${i+1}-verse1`}
                        className="service-box group border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
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
                            {selectedLanguage === 'Hindi' ? bhagwatGita[getChapterIndex(key)].chapterNameHindi : bhagwatGita[getChapterIndex(key)].chapterNameEnglish}
                        </h2>
                        
                      </a>
                    )
                }
            </div>
        </main>
    </div> 
}

export default Page;