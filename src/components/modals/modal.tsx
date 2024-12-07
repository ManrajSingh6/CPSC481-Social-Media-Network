import { Button } from '../common/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '../ui/dialog'

export interface IndividualButtonProps {
  readonly label: string
  readonly onClick: () => void
  readonly icon?: JSX.Element
  readonly customStyle?: string
  readonly disabled?: boolean
}

interface ModalProps {
  readonly isOpen: boolean
  readonly header?: string
  readonly subHeader?: string
  readonly content?: JSX.Element
  readonly onClose: () => void
  readonly showCloseButton?: boolean
  readonly width?: string
  readonly minWidth?: string
  readonly bottomButtons?: readonly IndividualButtonProps[]
}

export function Modal({
  isOpen,
  header,
  subHeader,
  content,
  onClose,
  showCloseButton = true,
  width = 'w-[90%] md:max-w-lg',
  minWidth,
  bottomButtons
}: ModalProps): JSX.Element {
  const enhancedBottomButtons = [
    ...(bottomButtons ?? []),
    ...(showCloseButton ? [{ label: 'Close', onClick: onClose }] : [])
  ]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={`${width} ${minWidth}`}>
        <DialogHeader>
          <DialogTitle className='text-header text-left'>{header}</DialogTitle>
          <DialogDescription className='text-accentText text-left'>
            {subHeader}
          </DialogDescription>
        </DialogHeader>
        {content && <div className='mb-2 mt-2'>{content}</div>}
        {enhancedBottomButtons?.length > 0 && (
          <div className='flex items-center justify-end gap-2'>
            {enhancedBottomButtons.map((button, idx) => {
              return (
                <Button
                  key={`button-${idx}`}
                  text={button.label}
                  onClick={button.onClick}
                  icon={button.icon}
                  disabled={button.disabled}
                  customStyle={
                    button.customStyle ??
                    'w-fit px-4 py-2 bg-primaryBlue text-white hover:bg-subtleHover'
                  }
                />
              )
            })}
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
