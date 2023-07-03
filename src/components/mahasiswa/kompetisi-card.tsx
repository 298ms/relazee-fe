import { Link } from 'react-router-dom'

export default function KompetisiCard(props: any) {
    return (
        <Link reloadDocument to={`/kompetisi/${props.index}/info`} className="rounded-lg bg-white p-4 flex flex-col items-center gap-3 max-w-1/3">
            <img src={props.kompetisi.img} alt="" />
            <h4 className="font-medium text-sm text-gray-500 text-center">{props.kompetisi.name}</h4>
        </Link>
    )
}
