import microphone from '@/app/assets/svg/microphone.svg'
import earths from '@/app/assets/svg/earth-star.svg'
import surprise from '@/app/assets/svg/surprise.svg'
import drink from '@/app/assets/svg/drink.svg'
import { pick } from 'lodash'
import Image from 'next/image'
import "./section3.styles.scss";

const Section3 = () => {
	const items = [
		{
			img: pick(microphone, ['src', 'width', 'height']),
			text: `הרצאות מרגשות,
			ימי עיון וסדנאות
			במגוון נושאים`
		},
		{
			img: pick(earths, ['src', 'width', 'height']),
			text: `מבחר ימי כייף,
			מופעים מרגשים
			ואירועי חברה`
		},
		{
			img: pick(surprise, ['src', 'width', 'height']),
			text: `מאות מתנות
			ומארזים מפנקים
			לחגים ואירועים`
		},
		{
			img: pick(drink, ['src', 'width', 'height']),
			text: `עשרות השראות
			ורעיונות ייחודיים
			לפעילויות ומתנות`
		}
	]
	return <section className="app-section-3">

		<div className="container">
			<h2>Welfairy מרכזת עבורך כל מה שצריך <br />
				כדי ליצור אימפקט בארגון שלך </h2>
			<div className="flex center">
				{
					items.map((item, i) => {
						return <div className="cell" key={i}>
							<div className="app-section-3-ibox">
								<Image {...item.img} alt={item.text}></Image>
							</div>
							<h3>{item.text}</h3>
						</div>
					})
				}

			</div>
		</div>
	</section>
}

export default Section3
