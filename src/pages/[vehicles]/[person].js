import {useRouter} from 'next/router';
export default function Person(){
    const router=useRouter();
    console.log(router.query);
    return <h3>this is {router.query.person} {router.query.vehicles}</h3>
}