'use client'

import Head from 'next/head'
import HeaderComponent from './components/header.component/header.component'
import FooterComponent from './components/footer.component/footer.component'
import Section1 from './components/section1'
import Section2 from './components/section2'
import Section3 from './components/section3'
import Section4 from './components/section4'
import Section5 from './components/section5'
import Section6 from './components/section6'
import Section7 from './components/section7'
import Section8 from './components/section8'
import Section9 from './components/section9'

// import img from '@/app/assets/svg/text-logo.svg'
// import Image from 'next/image'
// import Slider from './shared/components/slider'
// const items = Array(10).fill(<Image className='responsive-image' src={img} alt='' />)

export default function Home() {
	return (
		<div className='app'>
			<HeaderComponent />
			<Head>
				<title>WelFairy - Home Page</title>
			</Head>
			<main className='app-main'>
				{/* <Slider items={items} perPage={6} perPageMobile={2} title='qwerty' /> */}

				<Section1 />

				<Section2 />
				<Section3 />
				<Section4 />
				<Section5 />
				<Section6 />
				<Section7 />
				<Section8 />
				<Section9 />
			</main>
			<FooterComponent />
		</div>
	)
}
