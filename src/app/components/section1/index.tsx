import Button from '@/app/shared/components/button'
import bannerImg from '@/app/assets/images/img-banner.webp'
import './section-banner-lg.styles.scss'
import Image from 'next/image'

const Section1 = () => {
	return (
		<section className='app-banner-lg'>
			<div className='container'>
				<div className='flex ai-center'>
					<div className='cell'>
						<div className='flex column gap-24'>
							<div className='app-banner-lg-content'>
								<h1>למצוא את החוויה שכולם בארגון ידברו עליה ביעילות, במהירות ובחדשנות שחיפשת</h1>
								<p>
									מרחב דיגיטלי חכם שמחבר מנהלי חוויה ופיתוח ארגוני עם מגוון ספקים עשיר מעולמות תוכן
									שונים
								</p>
							</div>
							<div>
								<Button severity='light' size='lg'>
									מזמינים אותך פנימה
								</Button>
							</div>
						</div>
					</div>
					<div className='cell cell-2'>
						<Image
							src={bannerImg.src}
							width={bannerImg.width}
							height={bannerImg.height}
							className='responsive-image'
							alt='Replace it'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Section1
