import {default as PageHeader} from '../../../components/app-header';

export default function Page({ params }: {params: {id: string}}) {
    return <div>
    <PageHeader />
    <h3>Bhagwat Gita Chapter {params.id}</h3>
</div> 
}