import {default as PageHeader} from '../../components/app-header';
import {default as bhagwatGita} from '../../files/bhagwatGita';
import './style.css';

export default function Page() {
    console.log(bhagwatGita);
    return <div>
        <PageHeader />
        <main className="md:container md:mx-auto mt-6">
            <div className="grid grid-cols-4 gap-3">
                {
                    Object.keys(bhagwatGita).map((key, i) =>  <a
                        href={`#`}
                        className="service-box group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                        target="_blank"
                        rel="noopener noreferrer"
                        key={key}
                      >
                        <p className={`m-0 text-sm opacity-50 mb-2`}>
                          {key+' अध्याय '+(i+1)}
                        </p>
                        <h2 className={`mb-3 text-2xl font-semibold`}>
                            {bhagwatGita[key].chapterNameHindi}
                          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                          </span>
                        </h2>
                        
                      </a>
                    )
                }
            </div>
        </main>
    </div> 
}