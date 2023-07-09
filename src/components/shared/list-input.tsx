import { useState } from "react"

export default function ListInput() {
    const [list, setList] = useState<string[]>([])

    function removeItem(index: any){
        setList(list.filter((el, i) => i !== index))
    }

    return (
        <div>
            { list.map((item, index) => (
                <div className="bg-relazee-gray rounded-md px-2" key={index}>
                    <span className="text">{item}</span>
                    <span className="ml-2" onClick={() => removeItem(index)}>&times;</span>
                </div>
            )) }
            <button>+ Tambah</button>
        </div>
    )
}
