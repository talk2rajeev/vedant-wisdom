"use client";
import React, { useState, useEffect } from 'react';

import {default as PageHeader} from '../../../components/app-header';
import {default as bhagwatGita} from '../../../files/bhagwatGita';
import { default as Collapse } from '../../../components/collapse';
import './style.css';

export function getChapterText(lang: string) {
    if(lang === 'Hinid') {
      return `अध्याय`;
    } else if(lang === 'English'){
      return `Chapter`;
    } else {
      return `अध्याय`;
    }
  }

type slokaType = typeof bhagwatGita.chapter1.slokas[0];

type WordsMeaningType = {
    sanskrit: string;
    meaning: string;
}

function parseIdString(id: string) {
    // id: chapter1-verse1
    const arr = id.split('-');
    const verseStr = arr.find(a => a.includes('verse'));
    const verse = verseStr ? Number(verseStr.split('verse')[1]) : 1;

    const chapterStr = arr.find(a => a.includes('chapter'));
    const chapter = chapterStr ? Number(chapterStr.split('chapter')[1]) : 1;

    return {chapter, verse};
}

export default function Page({ params }: {params: {id: string}}) {
    const [selectedLanguage, setselectedLanguage] = useState<string>('Hindi');
    const [chapterNo, setChapterNo] = useState<string>('');
    const [curChapter, setCurChapter] = useState<string>('');
    const [curSloka, setCurSloka] = useState<slokaType>();



    const handleLanguageChange =  (language: string) => {
        setselectedLanguage(language);
        localStorage.setItem('lang', language);
    }

    useEffect(()=>{
        const lang = localStorage.getItem('lang');
        if(lang)
            setselectedLanguage(lang);
    }, []);

    useEffect(()=>{
        const {chapter, verse} = parseIdString(params.id);
        const chapterName: string = bhagwatGita[`chapter${chapter}`].chapterNameHindi;
        const sloka: slokaType = bhagwatGita[`chapter${chapter}`].slokas[(verse-1)];
        setChapterNo(`chapter${chapter}`);
        setCurChapter(chapterName);
        setCurSloka(sloka);

    }, []);

    const slokas = bhagwatGita[chapterNo];

    return <div>
    <PageHeader languageChange={handleLanguageChange}/>
    
    <div className="content-box" >
        <div className="resposive-box">
            <div className='bdr-rt'>
                <div className='p-3 chapter-title'>
                    <div className="uppercase tracking-wide">
                        <span className='text-sm text-xl text-orange-700 font-bold pb-2 mb-2'>{getChapterText(selectedLanguage)}:</span>
                        <span className='text-sm text-xl text-orange-700 font-thin ml-2'>{curChapter}</span>
                    </div>
                    <div className='pt-3'>
                        <div className='text-sm text-orange-700 font-bold mb-2'>slokas</div>
                        {
                            slokas?.slokas?.map(item => <span className='badge badge-link ' key={item.slokaNumber}>{item.slokaNumber}</span>)
                        }
                    </div>
                </div>
            </div>
            <div className="p-2">
                <div>
                    <p className='text-xl text-center font-normal text-orange-700 opacity-80'>verse: {curSloka?.slokaNumber} </p>
                </div>
                <div className='flex justify-center items-center'>
                    <div className='max-w-5/12 p-6 text-center bg-white overflow-hidden'>
                        <div className='text-orange-600 mb-3  font-semibold'>
                            {curSloka?.uvach}
                        </div>
                        <div className='text-xl font-light text-orange-700'>
                            { curSloka?.sanskritSloka?.map(slok => <div key={slok}>{slok}</div>)}
                        </div>
                    </div>
                </div>
                
                <div>
                    <div className='word-meaning-grid p-6 mt-6 mb-6'>
                        {
                            curSloka?.wordsMeaning?.map((item: WordsMeaningType)=> {
                                return <div key={item.meaning}>
                                        <div className='text-sm font-light font-semibold text-orange-700 opacity-80'>{item.sanskrit} - </div>
                                        <div className='text-sm font-light font-thin text-orange-700 opacity-80'>{item.meaning}</div>
                                    </div>
                            }) 
                        }
                    </div>
                </div>

                <div className='slok-meaning'>    
                    <Collapse show={true} title='Hindi Meaning'>
                        <p className="mt-2 text-orange-700 pl-8 pr-8 pt-3 pb-3">{curSloka?.meaningInHindi}</p>
                    </Collapse>
                </div>
                <div className='slok-meaning'>    
                    <Collapse show={false} title='English Meaning'>
                        <p className="mt-2 text-orange-700 pl-8 pr-8 pt-3 pb-3">{curSloka?.meaningInEnglish}</p>
                    </Collapse>
                </div>

            </div>
        </div>
        <div className='right-sidebar'>
                Right side bar
        </div>
    </div>
</div> 
}