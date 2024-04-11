
import crown from '@/app/assets/svg/crown.svg'

import Image from 'next/image'
import "./section4.styles.scss";
import { pick } from 'lodash';

const Section4 = () => {
  const items = [
    {
      imgUrl: 'https://picsum.photos/400/400',
      title: 'מתנות ומארזים לעובדים',
      href: '#'
    },
    {
      imgUrl: 'https://picsum.photos/400/400?1',
      title: 'מתנות ומארזים לעובדים',
      href: '#'
    },
    {
      imgUrl: 'https://picsum.photos/400/400?2',
      title: 'מתנות ומארזים לעובדים',
      href: '#'
    },
    {
      imgUrl: 'https://picsum.photos/400/400?3',
      title: 'מתנות ומארזים לעובדים',
      href: '#'
    },
    {
      imgUrl: 'https://picsum.photos/400/400?4',
      title: 'מתנות ומארזים לעובדים',
      href: '#'
    }
  ]
  return (
    <section className="app-section-4">
      <div className="container">
        <h2 className='app-heading'>הקטגוריות הפופולריות של Welfairy

          <Image {...pick(crown, ['src', 'width', 'height'])} alt='replace it'></Image>
        </h2>
        <div className="grid">
          <div className="flex">
            {
              items.map((item, i) => {
                return (
                  <div className="cell" key={i}>
                    <div className="app-category-card">
                      <div className='picture'>
                        <img src={item.imgUrl} width={242} height={212} alt="replace it" />
                      </div>
                      <a href={item.href}>
                        {item.title}
                      </a>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section4