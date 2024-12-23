function Filters({products, setFilters}) {
    const getCategories = () => {
        const names = {}
        products.forEach(p=>{
            if(!names[p.category]){
                names[p.category]= p.category
            }
        })
        return Object.keys(names)
    }

    return (
        <div>
            <input type="range" name="" id="" min={0} max={1500} onChange={(e) => setFilters(prevFilters=> ({...prevFilters, maxPrice:e.target.value}) )} />
            <select name="" id="" onChange={(e)=> setFilters(prevFilters=> ({...prevFilters, category:e.target.value}))}>
                <option value='all'>All categories</option>
                {getCategories().map((c,idx)=>(
                    <option key={idx} value={c}>{c}</option>
                ))}

            </select>
        </div>
    )
}

export default Filters