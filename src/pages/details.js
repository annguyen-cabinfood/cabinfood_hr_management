import Link from 'next/link'
const people=[
    {v:'car', name:'ABC'},
    {v:'bike', name:'xxx'},
    {v:'plane', name:'ddd'}
]
export default function Details(){
    return  <div>
        {people.map(e=>(
            <div>
            <Link as={`/${e.v}/${e.name}`} href="/[vehicle]/[person]"><a>Navigate to {e.name}'s {e.v}' car</a></Link>
            </div>
        ))}
    
    </div>
}