import { FC, useEffect, useRef, useState } from 'react'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import Image from 'next/image'
import Icon from '../icon'
import '@splidejs/react-splide/css'
import '@splidejs/react-splide/css/core'
import './slider.scss'
import IsReady from '../ready'

type Props = {
	title: string,
	perPage: number,
	perPageMobile?: number,
	gap?: string,
	img?: {
		src: string,
		alt: string,
		width: number,
		height: number,
	}
	items: JSX.Element[]
}

const Slider: FC<Props> = ({ title, items, img, perPage, gap, perPageMobile }) => {
	const [space, setSpace] = useState(0);
	const [width, setWidth] = useState(0);

	const sizeHandle = () => {
		const windowWidth = window.innerWidth;
		const containerWidth = containerRef.current?.clientWidth || 0;
		const sizeSpace = (windowWidth - containerWidth) / 2;
		setSpace(sizeSpace);
		setWidth(windowWidth - sizeSpace);
	}
	useEffect(() => {
		window.addEventListener('resize', sizeHandle);
		return () => {
			window.removeEventListener('resize', sizeHandle);
		}
	}, []);

	const containerRef = useRef<HTMLDivElement>(null);


	return (
		<div className='slider'>
			<Splide
				hasTrack={false}
				options={{
					mediaQuery: 'max',
					breakpoints: {
						6000: {
							perPage: perPage ? perPage : 6,
						},
						768: {
							perPage: perPageMobile ? perPageMobile : 2,
						}
					},
					gap: gap ? gap : '1rem',
					autoWidth: false,
					with: width,
					rewind: false,
					autoplay: true,
					wheel: true,
					waitForTransition: false,
					pagination: false,
					direction: 'rtl',

				}}
				aria-label='My Favorite Images'>

				<div className="container" ref={containerRef}>
					<div className="flex between ai-center">
						<h2 className='app-heading'>{title}

							{img ? <img src={img.src} alt={img.alt} width={img.width} height={img.height} /> : null}
						</h2>
						<div className='splide__arrows'>
							<button className='splide__arrow splide__arrow--prev slider-custom-prev'>
								<Icon name='arrow-right' title='arrow-right' />
							</button>
							<button className='splide__arrow splide__arrow--next slider-custom-next'>
								<Icon name='arrow-left' title='arrow-left' />
							</button>
						</div>
					</div>
					<IsReady onReady={() => sizeHandle()}></IsReady>
				</div>
				<div className="splider-container" style={{
					paddingInlineStart: `${space}px`,
				}}>
					<SplideTrack>
						{items.map((elem, index) => (
							<SplideSlide key={index}>{elem}</SplideSlide>
						))}
					</SplideTrack>
				</div>
			</Splide>
		</div >
	)
}

export default Slider
