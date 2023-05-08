"use client";
import React, { useState, useEffect } from 'react';
import {default as PageHeader} from '../../../components/app-header';
import {default as bhagwatGita} from '../../../files/bhagwatGita';

type slokaType = typeof bhagwatGita.chapter1.slokas[1];

function parseIdString(id: string) {
    // id: chapter1-verse1
    const arr = id.split('-');
    const verseStr = arr.find(a => a.includes('verse'));
    const verse = verseStr ? Number(verseStr?.substr(-1)) : 1;

    const chapterStr = arr.find(a => a.includes('chapter'));
    const chapter = chapterStr ? Number(chapterStr?.substr(-1)) : 1;

    return {chapter, verse};
}

export default function Page({ params }: {params: {id: string}}) {
    const [selectedLanguage, setselectedLanguage] = useState<string>('Hindi');
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

        
        setCurChapter(chapterName);
        setCurSloka(sloka);

        console.log(chapterName, sloka);
    }, []);

    return <div>
    <PageHeader languageChange={handleLanguageChange}/>
    
    <div className="">
        <div className="xl:flex">
            <div className="xl:w-60">
                <div className='p-3'>
                    <div className="uppercase tracking-wide text-sm text-xl text-orange-700 font-bold">{curChapter}</div>
                </div>
            </div>
            <div className="p-2">
                <div className='flex justify-center items-center'>
                    <div className='w-5/12 p-6 text-center bg-white rounded-xl shadow-md overflow-hidden'>
                        <p className='text-xl font-light text-orange-700'>
                        { curSloka?.sanskritSloka?.map(slok => <div key={slok}>{slok}</div>)}
                        </p>
                    </div>
                </div>
                <p className="mt-2 text-slate-500">{curSloka?.meaningInEnglish}</p>
            </div>
        </div>
    </div>
</div> 
}