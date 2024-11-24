interface CustomImageProps {
  readonly src: string
  readonly alt: string
  readonly className?: string
}

export function CustomImage({
  src,
  alt,
  className
}: CustomImageProps): JSX.Element {
  return <img src={src} alt={alt} className={className} />
}
