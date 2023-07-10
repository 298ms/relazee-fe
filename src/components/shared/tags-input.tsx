import { useState } from 'react'

function TagsInput(){
    const [tags, setTags] = useState<string[]>([])

    function handleKeyDown(e: any){
        if(e.key !== 'Enter') return
        const value = e.target.value
        if(!value.trim()) return
        setTags([...tags, value])
        e.target.value = ''
    }

    function removeTag(index: any){
        setTags(tags.filter((el, i) => i !== index))
    }

    return (
        <div className="max-w-full flex flex-row flex-wrap rounded-md bg-transparent border px-4 py-2 gap-2">
            { tags.map((tag, index) => (
                <div className="bg-relazee-gray rounded-md px-2" key={index}>
                    <span className="text">{tag}</span>
                    <span className="ml-2 cursor-pointer" onClick={() => removeTag(index)}>&times;</span>
                </div>
            )) }
            <input onKeyDown={handleKeyDown} type="text" className="focus:outline-none w-full" placeholder="Type your skill and press enter to add" />
        </div>
    )
}

export default TagsInput