declare module '@splidejs/react-splide' {
	import { ComponentType, ReactNode } from 'react'

	export interface SplideProps {
		options?: any
		hasAutoplayProgress?: boolean
		hasSliderProgress?: boolean
		hasAutoplayControls?: boolean
		hasSliderControls?: boolean
		hasTrack?: boolean
		children?: ReactNode
	}

	export interface SplideSlideProps {
		children?: ReactNode
	}
	export interface SplideTrackProps {
		children?: ReactNode
	}

	export const Splide: ComponentType<SplideProps>
	export const SplideSlide: ComponentType<SplideSlideProps>
	export const SplideTrack: ComponentType<SplideTrackProps>
}
