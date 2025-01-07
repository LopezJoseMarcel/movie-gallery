import { ButtonProps } from "@/interfaces/Button"

interface NormalButtonProps {
    params: ButtonProps
}

export default function ButtonNormal({params}: NormalButtonProps) {
    return (
        <div>
            <button type={params.type} className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 mt-2">
                {params.label}
            </button>
        </div>
    )
}