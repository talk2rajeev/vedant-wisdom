"use client";
import React, { useState, useEffect } from 'react';

import {default as PageHeader} from '../../../components/app-header';
import {default as bhagwatGita} from '../../../files/bhagwatGita';
import { default as Collapse } from '../../../components/collapse';
import {ChapterIndexType, ChapterInterface} from '../../../files/bhagwatGita';
import './style.css';

export function getChapterText(lang: string) {
    if(lang === 'Hindi') {
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

const base_url = 'http://localhost:3000/bhagwat-gita/';

const getChapterIndex = (chapterNo: number) => {
    if(chapterNo === 1) return ChapterIndexType.Chapter1;
    if(chapterNo === 2) return ChapterIndexType.Chapter2;
    if(chapterNo === 3) return ChapterIndexType.Chapter3;
    if(chapterNo === 4) return ChapterIndexType.Chapter4;
    if(chapterNo === 5) return ChapterIndexType.Chapter5;
    if(chapterNo === 6) return ChapterIndexType.Chapter6;
    if(chapterNo === 7) return ChapterIndexType.Chapter7;
    if(chapterNo === 8) return ChapterIndexType.Chapter8;
    if(chapterNo === 9) return ChapterIndexType.Chapter9;
    if(chapterNo === 10) return ChapterIndexType.Chapter10;
    if(chapterNo === 11) return ChapterIndexType.Chapter11;
    if(chapterNo === 12) return ChapterIndexType.Chapter12;
    if(chapterNo === 13) return ChapterIndexType.Chapter13;
    if(chapterNo === 14) return ChapterIndexType.Chapter14;
    if(chapterNo === 15) return ChapterIndexType.Chapter15;
    if(chapterNo === 16) return ChapterIndexType.Chapter16;
    if(chapterNo === 17) return ChapterIndexType.Chapter17;
    if(chapterNo === 18) return ChapterIndexType.Chapter18;
    
    return ChapterIndexType.Chapter1;
}

export default function Page({ params }: {params: {id: string}}) {
    const [selectedLanguage, setselectedLanguage] = useState<string>('Hindi');
    const [curChapter, setCurChapter] = useState<string>('');
    const [curSloka, setCurSloka] = useState<slokaType>();

    const [curChapterNumber, setCurChapterNumber] = useState<number>(1);
    const [curVerseNumber, setCurVerseNumber] = useState<number>(1);





    const handleLanguageChange =  (language: string) => {
        setselectedLanguage(language);
        localStorage.setItem('lang', language);
    }

    useEffect(()=>{
        const lang = localStorage.getItem('lang');
        if(lang)
            setselectedLanguage(lang);
    }, []);

    

    const navigateToUrl = (navType: 'Next' | 'Prev') => {
        let curVerseIndex = curVerseNumber;
        const chapter = getChapterIndex(curChapterNumber);

        if(navType === 'Next') {
            const totalSlokas = bhagwatGita[chapter].totalSlokas;
            if(curVerseNumber < totalSlokas) {
                curVerseIndex = curVerseIndex+1;
                setCurVerseNumber(curVerseIndex);
                const sloka: slokaType = bhagwatGita[chapter].slokas[(curVerseIndex-1)];
                setCurSloka(sloka);
            }
        } else {
            if(curVerseIndex > 1) {
                curVerseIndex= curVerseIndex -1;
                setCurVerseNumber(curVerseIndex);
                const sloka: slokaType = bhagwatGita[chapter].slokas[(curVerseIndex-1)];
                setCurSloka(sloka);
            }
        }
    }

    const navigateToVerse = (verseNo: number) => {
        const chapter = getChapterIndex(curChapterNumber);
        setCurVerseNumber(verseNo);
        const sloka: slokaType = bhagwatGita[chapter].slokas[(verseNo-1)];
        setCurSloka(sloka);
    }

    useEffect(()=>{
        const path = `/bhagwat-gita/chapter${curChapterNumber}-verse${curVerseNumber}`;
        window.history.pushState(null, "", path);
    }, [curVerseNumber]);    

    useEffect(()=>{
        const {chapter, verse} = parseIdString(params.id);
        setCurChapterNumber(chapter);
        setCurVerseNumber(verse);
        const chapterNum = getChapterIndex(curChapterNumber);
        const chapterName: string = bhagwatGita[chapterNum].chapterNameHindi;
        const sloka: slokaType = bhagwatGita[chapterNum].slokas[(verse-1)];
        setCurChapter(chapterName);
        setCurSloka(sloka);
    }, []);


    const slokas = bhagwatGita[getChapterIndex(curChapterNumber)];

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
                            slokas?.slokas?.map(item => <span onClick={()=>navigateToVerse(item.slokaNumber)} className={`badge badge-link ${curVerseNumber === item.slokaNumber ? 'selected' : ''}`} key={item.slokaNumber}>{item.slokaNumber}</span>)
                        }
                    </div>
                </div>
            </div>
            <div className="p-2">
                <div>
                    <p className='text-xl text-center font-normal text-orange-700 opacity-80'>verse: {curSloka?.slokaNumber} </p>
                </div>
                <div className='flex justify-center items-center'>
                    <div className='max-w-5/12 p-6 text-center bg-white overflow-hidden' style={{position: 'relative'}}>
                        <div className='text-orange-600 mb-3  font-semibold'>
                            {curSloka?.uvach}
                        </div>
                        <div className='text-xl font-light text-orange-700'>
                            { curSloka?.sanskritSloka?.map(slok => <div key={slok}>{slok}</div>)}
                        </div>
                        <span onClick={()=>navigateToUrl('Prev')} className="left-arr inline-block font-bold text-lg ml-3 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">&lt;-</span>
                        <span onClick={()=>navigateToUrl('Next')} className="right-arr inline-block font-bold text-lg ml-3 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span>
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