"use client"
import React, { useState } from 'react';
import {default as PageHeader} from '../components/app-header';

const data = [
  {
    title_hindi: 'अष्टावक्र गीता',
    title_english: 'Astavakra Gita',
    description_hindi: 'अष्टावक्र गीता अद्वैत वेदान्त का ग्रन्थ है जो ऋषि अष्टावक्र और राजा जनक के संवाद के रूप में है। भगवद्गीता, उपनिषद और ब्रह्मसूत्र के सामान अष्टावक्र गीता अमूल्य ग्रन्थ है। इस ग्रन्थ में ज्ञान, वैराग्य, मुक्ति और समाधिस्थ योगी की दशा का सविस्तार वर्णन है।',
    description_english: 'Ashtavakra Gita is a text of Advaita Vedanta which is in the form of a dialogue between sage Ashtavakra and King Janaka. Ashtavakra Gita is an invaluable book like Bhagavad Gita, Upanishads and Brahmasutra. In this book there is a detailed description of knowledge, dispassion, liberation and the state of a samadhistha yogi.',
    link: 'https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app',
    img: '',
  },
  {
    title_hindi: 'भगवत गीता',
    title_english: 'Bhagwat Gita',
    description_hindi: 'महाभारत युद्ध आरम्भ होने के ठीक पहले भगवान श्रीकृष्ण ने अर्जुन को जो उपदेश दिया वह श्रीमद्भगवद्गीता के नाम से प्रसिद्ध है। जो भी मनुष्य भगवद गीता की अठारह बातों को अपनाकर अपने जीवन में उतारता है वह सभी दुखों से, वासनाओं से, क्रोध से, ईर्ष्या से, लोभ से, मोह से, लालच आदि के बंधनों से मुक्त हो जाता है।',
    description_english: 'The sermon given by Lord Krishna to Arjuna just before the start of the Mahabharata war is famous as Shrimad Bhagwad Gita. Any person who adopts the eighteen sayings of Bhagavad Gita in his life becomes free from all sorrows, lusts, anger, jealousy, greed, attachment, greed etc.',
    link: 'http://localhost:3000/bhagwat-gita',
    img: '',
  },
  {
    title_hindi: 'केनोपनिषद',
    title_english: 'Kenopnishad',
    description_hindi: 'केनोपनिषद सामवेदिय शाखा के अन्तर्गत एक उपनिषद है। यह उपनिषद संस्कृत भाषा में लिखित है। इसमें "केन" (किसके द्वारा) का विवेचन होने से इसे "केनोपनिषद" कहा गया है। इसके चार खण्ड हैं।',
    description_english: 'Kenopanishad is an Upanishad under the Samavedi branch. This Upanishad is written in Sanskrit language. Due to the interpretation of "Ken" (by whom) in it, it has been called "Kenopanishad". It has four sections.',
    link: 'https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app',
    img: '',
  },
  {
    title_hindi: 'कठ उपनिषद्',
    title_english: 'Kathopnishad',
    description_hindi: 'कठ उपनिषद् या कठोपनिषद कृष्ण यजुर्वेदीय शाखा के अन्तर्गत एक उपनिषद है। "कठ" नाम पाणिनि के अष्टाध्यायी में प्राप्त होता है। एक मुनिविशेष का भी नाम "कठ" था। यह वेद की कठ शाखा के प्रवर्तक थे।',
    description_english: 'Kath Upanishad or Kathopanishad is an Upanishad under the Krishna Yajurvedic branch. The name "Katha" is found in Panini"s Ashtadhyayi. The name of a sage was also "Kath". He was the originator of the Kath branch of the Vedas.',
    link: 'https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app',
    img: '',
  },
  {
    title_hindi: 'छांदोग्य उपनिषद',
    title_english: 'Chandogya Upnishad',
    description_hindi: 'छांदोग्य उपनिषद् सामवेदीय छान्दोग्य ब्राह्मण का औपनिषदिक भाग है जो प्राचीनतम दस उपनिषदों में नवम एवं सबसे बृहदाकार है। इसके आठ प्रपाठकों में प्रत्येक में अनेक खण्ड हैं। यह उपनिषद ब्रह्मज्ञान के लिये प्रसिद्ध है।',
    description_english: 'Chhandogya Upanishad is the Upanishadic part of the Samavedic Chhandogya Brahman, which is the ninth and the most extensive of the ten oldest Upanishads. Each of its eight Prapathakas has several sections. This Upanishad is famous for the knowledge of Brahman.',
    link: 'https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app',
    img: '',
  }
];

function getTitleText(item: {title_hindi: string, title_english: string, description_hindi: string, description_english: string, link: string, img: string}, lang: string) {
  if(lang === 'Hinid') {
    return item.title_hindi;
  } else if(lang === 'English'){
    return item.title_english;
  } else {
    return item.title_hindi;
  }
}

function getDescriptionText(item: {title_hindi: string, title_english: string, description_hindi: string, description_english: string, link: string, img: string}, lang: string) {
  if(lang === 'Hinid') {
    return item.description_hindi;
  } else if(lang === 'English'){
    return item.description_english;
  } else {
    return item.description_hindi;
  }
}

export default function Home() {

  const [selectedLanguage, setselectedLanguage] = useState<string>('Hindi');


  const handleLanguageChange =  (language: string) => {
    debugger;
    console.log('Home > selected lang: ', language);
    setselectedLanguage(language);
    localStorage.setItem('lang', language);
  }

  return (
    <main className="min-h-screen flex-col items-center justify-between text-center">

      <PageHeader languageChange={handleLanguageChange} />

      <div className="mb-32 grid text-center lg:mb-0 gap-x-5 lg:grid-cols-4 lg:text-left p-6">
        {
          data.map(item => (
            <a
              href={item.link}
              className="service-box group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              rel="noopener noreferrer"
              key={item.title_hindi}
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                {getTitleText(item, selectedLanguage)}{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 text-sm opacity-50`}>
                {getDescriptionText(item, selectedLanguage)}
              </p>
            </a>
          ))
        }
      </div>
      {selectedLanguage}
    </main>
  )
}
