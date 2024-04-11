import img from '@/app/assets/images/section2.webp'
import { pick } from 'lodash'
import Image from 'next/image'
import "./section2.styles.scss";

const Section2 = () => {
	return <section className="app-section-2">
		<div className="container">
			<div className="flex ai-center">
				<Image {...(pick(img, ['src', 'width', 'height']))} className="responsive-image" alt="Replace it" />
				<div className="fg">
					<p>
						מהרצאות וסדנאות עומק ועד ימי כיף ואירועים, העולם החווייתי הוא חלק בלתי נפרד מהחוסן הארגוני, ומהצורך המהותי
						לחבר את האנשים שלך למטרה משותפת.
						ההבנה הזו הביאה לפיתוח של Welfairy, המאפשרת לך לקבל הצעות מותאמות לצורכי הארגון ולאופי הפעילות שחיפשת.
						כל זה קורה בממשק חכם ומתקדם, החוסך לך זמן חיפוש ואיתור ספקים בעשרות מקומות שונים, וחושף אותך לספקים איכותיים, ערכים ובעלי מטרות חברתיות.
					</p>
				</div>
			</div>
		</div>
	</section>
}

export default Section2
