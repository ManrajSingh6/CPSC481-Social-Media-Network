import { CustomImage } from "./util/customImage"
import { Heading } from "./util/heading"
import { DirectMessage } from "../utils/types"

interface props {
    dm: DirectMessage
}

export default function messageCard( { dm } : props ): JSX.Element{
    return(
        <div className='flex flex-row rounded-lg border bg-white p-2 mb-2 cursor-pointer'>
            <div className='mr-4'>
                <CustomImage
                    src={dm.pictureURL}
                    alt="Friend-Profile-Picture"
                    className='w-8'
                />
            </div>
            <div className=' flex-1'>
                <div className='flex items-center justify-between'>
                    <Heading headingText={dm.name} headingSize='medium'/>
                    <p className='text-gray-600'>{dm.time}</p>
                    
                </div>
                <div className=' w-max self-start text-gray-600'>
                    <p className=''>{dm.message}</p>
                </div>
            </div>
        </div>
    )
}