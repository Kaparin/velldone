import React, { forwardRef, HTMLAttributes } from 'react'


export type Props = {
    imgUrl: string
    title: string
    href: string
} & HTMLAttributes<HTMLDivElement>



const PurpleCard = forwardRef<HTMLDivElement, Props>(({ imgUrl, title, href, ...rest }, ref) => {
    return (
        <div className="cell"  {...rest} ref={ref}>
            <div className="app-category-card">
                <div className='picture'>
                    <img src={imgUrl} width={242} height={212} alt="replace it" />
                </div>
                <a href={href}>
                    {title}
                </a>
            </div>
        </div>
    )
})

PurpleCard.displayName = 'PurpleCard'


export default PurpleCard

