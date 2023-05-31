// PDF: https://www.rupanugabhajanashram.com/writings/books-pdfs/bhagavad-gita/chapter-1-sainya-darsana-observing-the-armies-on-the-battlefield/
import {default as Chapter1} from './chapter1';
import {default as Chapter2} from './chapter2';
import {default as Chapter3} from './chapter3';
import {default as Chapter4} from './chapter4';
import {default as Chapter5} from './chapter5';
import {default as Chapter6} from './chapter6';
import {default as Chapter7} from './chapter7';
import {default as Chapter8} from './chapter8';
import {default as Chapter9} from './chapter9';
import {default as Chapter10} from './chapter10';
import {default as Chapter11} from './chapter11';
import {default as Chapter12} from './chapter12';
import {default as Chapter13} from './chapter13';
import {default as Chapter14} from './chapter14';
import {default as Chapter15} from './chapter15';
import {default as Chapter16} from './chapter16';
import {default as Chapter17} from './chapter17';
import {default as Chapter18} from './chapter18';

type WordsMeaningType = {
    sanskrit: string, meaning: string
}

interface VerseInterface {
    slokaNumber: number,
    uvach: string,
    sanskritSloka: Array<string>,
    romanSloka: Array<string>,
    notClear?: boolean,
    wordsMeaning: Array<WordsMeaningType>,
    meaningInHindi: string,
    meaningInEnglish: string,
    meaningInGujrati: string,
    meaningInMarathi: string,
}

export interface ChapterInterface {
    chapterNameHindi: string,
    chapterNameEnglish: string,
    chapterDescription: string,
    totalSlokas: number,
    slokas: Array<VerseInterface>
}

export enum ChapterIndexType { 
    Chapter1 = 'chapter1',
    Chapter2 = 'chapter2',
    Chapter3 = 'chapter3',
    Chapter4 = 'chapter4',
    Chapter5 = 'chapter5',
    Chapter6 = 'chapter6',
    Chapter7 = 'chapter7',
    Chapter8 = 'chapter8',
    Chapter9 = 'chapter9',
    Chapter10 = 'chapter10',
    Chapter11 = 'chapter11',
    Chapter12 = 'chapter12',
    Chapter13 = 'chapter13',
    Chapter14 = 'chapter14',
    Chapter15 = 'chapter15',
    Chapter16 = 'chapter16',
    Chapter17 = 'chapter17',
    Chapter18 = 'chapter18',
};


const BhagwatGita: {[key in ChapterIndexType]: ChapterInterface} =  {

    ...Chapter1,
    ...Chapter2,
    ...Chapter3,
    ...Chapter4,
    ...Chapter5,
    ...Chapter6,
    ...Chapter7,
    ...Chapter8,
    ...Chapter9,
    ...Chapter10,
    ...Chapter11,
    ...Chapter12,
    ...Chapter13,
    ...Chapter14,
    ...Chapter15,
    ...Chapter16,
    ...Chapter17,
    ...Chapter18
};

export default BhagwatGita;