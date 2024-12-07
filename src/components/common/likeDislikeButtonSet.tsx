import { ThumbsUpIcon, ThumbsDownIcon } from 'lucide-react'
import { Button } from './button'

interface LikeDislikeButtonSetProps {
  readonly onLike: () => void
  readonly onDislike: () => void
  readonly isLiked: boolean
  readonly isDisliked: boolean
}

export function LikeDislikeButtonSet({
  onLike,
  onDislike,
  isLiked,
  isDisliked
}: LikeDislikeButtonSetProps): JSX.Element {
  return (
    <div className='flex items-center gap-2'>
      <Button
        icon={<ThumbsUpIcon />}
        onClick={onLike}
        customStyle={`px-4 py-2 bg-white border ${isLiked && !isDisliked ? 'text-blue-500' : ''} hover:text-blue-500`}
      />
      <Button
        icon={<ThumbsDownIcon />}
        onClick={onDislike}
        customStyle={`px-4 py-2 bg-white border ${isDisliked && !isLiked ? 'text-blue-500' : ''} hover:text-blue-500`}
      />
    </div>
  )
}
