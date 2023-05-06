import Image from 'next/image';
import {default as PageHeader} from '../components/app-header';

const data = [
  {
    title: 'अष्टावक्र गीता',
    description: 'अष्टावक्र गीता अद्वैत वेदान्त का ग्रन्थ है जो ऋषि अष्टावक्र और राजा जनक के संवाद के रूप में है। भगवद्गीता, उपनिषद और ब्रह्मसूत्र के सामान अष्टावक्र गीता अमूल्य ग्रन्थ है। इस ग्रन्थ में ज्ञान, वैराग्य, मुक्ति और समाधिस्थ योगी की दशा का सविस्तार वर्णन है।',
    link: 'https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app',
    img: '',
  },
  {
    title: 'भगवत गीता',
    description: 'महाभारत युद्ध आरम्भ होने के ठीक पहले भगवान श्रीकृष्ण ने अर्जुन को जो उपदेश दिया वह श्रीमद्भगवद्गीता के नाम से प्रसिद्ध है। जो भी मनुष्य भगवद गीता की अठारह बातों को अपनाकर अपने जीवन में उतारता है वह सभी दुखों से, वासनाओं से, क्रोध से, ईर्ष्या से, लोभ से, मोह से, लालच आदि के बंधनों से मुक्त हो जाता है।',
    link: 'https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app',
    img: '',
  },
  {
    title: 'केनोपनिषद',
    description: 'केनोपनिषद सामवेदिय शाखा के अन्तर्गत एक उपनिषद है। यह उपनिषद संस्कृत भाषा में लिखित है। इसमें "केन" (किसके द्वारा) का विवेचन होने से इसे "केनोपनिषद" कहा गया है। इसके चार खण्ड हैं।',
    link: 'https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app',
    img: '',
  },
  {
    title: 'कठ उपनिषद्',
    description: 'कठ उपनिषद् या कठोपनिषद कृष्ण यजुर्वेदीय शाखा के अन्तर्गत एक उपनिषद है। "कठ" नाम पाणिनि के अष्टाध्यायी में प्राप्त होता है। एक मुनिविशेष का भी नाम "कठ" था। यह वेद की कठ शाखा के प्रवर्तक थे।',
    link: 'https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app',
    img: '',
  },
  {
    title: 'छांदोग्य उपनिषद',
    description: 'छांदोग्य उपनिषद् सामवेदीय छान्दोग्य ब्राह्मण का औपनिषदिक भाग है जो प्राचीनतम दस उपनिषदों में नवम एवं सबसे बृहदाकार है। इसके आठ प्रपाठकों में प्रत्येक में अनेक खण्ड हैं। यह उपनिषद ब्रह्मज्ञान के लिये प्रसिद्ध है।',
    link: 'https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app',
    img: '',
  }
]

export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center justify-between text-center">

      <PageHeader />

      <div className="mb-32 grid text-center lg:mb-0 gap-x-5 lg:grid-cols-4 lg:text-left p-6">
        {
          data.map(item => (
            <a
              href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className="service-box group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
              key={item.title}
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                {item.title+' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                {item.description}
              </p>
            </a>
          ))
        }
      </div>
    </main>
  )
}
