import { useEffect, useRef, useState, KeyboardEvent } from 'react'
import classNames from 'classnames'
import Image from 'next/image'
import Button from '@/app/shared/components/button'
import textLogo from '@/app/assets/svg/text-logo.svg'
import DropdownMenu from '@/app/shared/components/dropdown-menu/dropdown-menu'
import Icon from '@/app/shared/components/icon'
import './header.styles.scss'

export type LinkTarget = '_blank' | '_self' | '_parent' | '_top'
export type MenuOption = { title: string; href: string; target?: LinkTarget }
export type MenuType = {
	title: string
	href?: string
	target?: LinkTarget
	options: MenuOption[]
}
const navMenu: MenuType[] = [
	{
		title: 'בית',
		options: [
			{ title: 'עלינו', href: '#qwe' },
			{ title: 'איך זה עובד', href: '#qwe' },
			{ title: 'חיפוש ספקים', href: '#qwe' },
			{ title: 'יצירת קשר', href: '#qwe' },
		],
	},
	{
		title: 'מה חדש?',
		options: [
			{ title: 'רעיונות להאפי האוור', href: '#qwe' },
			{ title: 'תמיכה בעסקים מהעוטף', href: '#qwe' },
			{ title: 'חזרה לשגרה לאחר מילואים', href: '#qwe' },
		],
	},
	{
		title: 'הצעות לראש השנה',
		href: '#qwe',
		target: '_blank',
		options: [],
	},
	{
		title: 'מתנות  ומארזים לעובדים',
		options: [
			{ title: 'מתנות', href: '#qwe' },
			{ title: 'מארזים', href: '#qwe' },
		],
	},
	{
		title: 'פעילויות  כיף',
		options: [
			{ title: 'Happy hour', href: '#qwe' },
			{ title: 'ימי  כיף', href: '#qwe' },
			{ title: 'גיבוש', href: '#qwe' },
			{ title: 'ארועים', href: '#qwe' },
		],
	},
	{
		title: 'מופעים והרצאות',
		options: [
			{ title: 'מופעים', href: '#qwe' },
			{ title: 'הרצאות', href: '#qwe' },
			{ title: 'סטנדאפ', href: '#qwe' },
		],
	},
	{
		title: 'פיתוח  ארגוני',
		options: [
			{ title: 'סדנאות', href: '#qwe' },
			{ title: 'סדנאות ניהול', href: '#qwe' },
			{ title: 'יעוץ ארגוני', href: '#qwe' },
		],
	},
]

const HeaderComponent = () => {
	const [showBurger, setShowBurger] = useState<boolean>(false)
	const menuRef = useRef<HTMLDivElement>(null)
	const menuButtonRef = useRef<HTMLButtonElement>(null)
	const closeMenuButtonRef = useRef<HTMLButtonElement>(null)

	const handleClickOutside = (event: MouseEvent) => {
		if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
			setShowBurger(false)
		}
	}
	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside)

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

	const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
		if (event.key === 'Escape') {
			event.preventDefault()
			setShowBurger(false)
			menuButtonRef.current?.focus()
		}
	}

	useEffect(() => {
		showBurger && closeMenuButtonRef.current?.focus()
	}, [showBurger])

	return (
		<>
			<header className='app-main-mobile-header only-mobile'>
				<div className='container app-main-mobile-header-container'>
					<Button
						ref={menuButtonRef}
						size='sm'
						className='app-main-mobile-header-btn'
						onClick={() => setShowBurger(true)}>
						<Icon name='menu' title='menu' size={20} />
					</Button>
					<Image width={134} src={textLogo} alt='logo' className='app-main-header-logo' />
				</div>
			</header>
			<header className={classNames('app-main-header', { opened: showBurger })}>
				<div className='container app-main-header-container' onKeyDown={handleKeyDown}>
					<div className='app-main-header-sup'>
						<div className='flex column app-main-header-sup-logo'>
							<div className='flex end only-mobile'>
								<Button
									ref={closeMenuButtonRef}
									size='sm'
									round
									severity='gray'
									outlined
									className='app-main-header-close-btn'
									onClick={() => setShowBurger(false)}>
									<Icon name='close' title='close' size={10} />
								</Button>
							</div>
							<Image width={207} src={textLogo} alt='logo' className='app-main-header-logo' />
						</div>
						<div className='app-main-header-controls'>
							<Button severity='primary' size='md' className='mw200'>
								הרשמה חינם
							</Button>
							<Button outlined severity='primary' size='md' className='mw200'>
								התחברות
							</Button>
						</div>
					</div>
					<nav className='app-main-header-menu'>
						<ul className='app-main-header-menu-ul'>
							{navMenu.map((menu, index) => (
								<li key={index}>
									{menu.href ? (
										<a
											href={menu.href}
											className='btn md normal app-main-header-link'
											target={menu.target}>
											{menu.title}
										</a>
									) : (
										<DropdownMenu menu={menu}></DropdownMenu>
									)}
								</li>
							))}
						</ul>
					</nav>
				</div>
			</header>
			<div
				className='app-main-header-overlay'
				tabIndex={0}
				onClick={() => setShowBurger(false)}></div>
		</>
	)
}

export default HeaderComponent
