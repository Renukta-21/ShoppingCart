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
        console.log(Object.keys(names))
        
    }
    getCategories()
    return (
        <div>
            <input type="range" name="" id="" min={0} max={1500} onChange={(e) => console.log(e.target.value)} />
            <select name="" id="" value={value || 'default'} onChange={(e)=> console.log(e.target.value)}>
                <option value="default">Select an option</option>
                <option value="beauty">Beauty</option>
            </select>
        </div>
    )
}

export default Filters