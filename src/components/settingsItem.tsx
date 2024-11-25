import { ChevronRightIcon } from "lucide-react"
import * as Icons from "lucide-react"

interface SettingsItemProps {
    iconUrl: string
    title: string
    color?: string
}

export default function SettingsItem( {iconUrl, title, color = 'black'} : SettingsItemProps) : JSX.Element{
    const LucideIcon = Icons[iconUrl as keyof typeof Icons] as React.ElementType;
    if (!LucideIcon) {
        return <p>Invalid icon type: {iconUrl}</p>;
    }
    return (
        <div className="flex flex-row w-full items-center p-2 border-b cursor-pointer">
            <LucideIcon size={28} color={color} className='mr-2'/>
            <p className={`ml-2 text-${color}-500 ${color == 'black'? '' : 'font-bold'}`}>{title}</p>
            {color == 'black' &&
                <ChevronRightIcon className="ml-auto" />
            }
        </div>
    )
}