import { useState } from 'react'

function Filters({products}) {
    const [value, setValue] = useState('default')
    const getCategories = () => {
        const names = {}
        products.forEach(p=>{
            if(!names[p.category]){
                names[p.category]= p.category
            }
        })
        return Object.keys(names)
    }
    console.log(getCategories())

    return (
        <div>
            <input type="range" name="" id="" min={0} max={1500} onChange={(e) => console.log(e.target.value)} />
            <select name="" id="" defaultValue={value||'default'} onChange={(e)=> console.log(e.target.value)}>
                <option value='default' disabled>Select an option</option>
                {getCategories().map((c,idx)=>(
                    <option key={idx} value={c}>{c}</option>
                ))}

            </select>
        </div>
    )
}

export default Filters