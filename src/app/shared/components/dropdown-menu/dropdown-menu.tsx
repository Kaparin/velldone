import { FC, useEffect, useRef, useState, KeyboardEvent } from 'react'
import { MenuOption, MenuType } from '@/app/components/header.component/header.component'
import Button from '../button'
import Icon from '../icon'
import './dropdown-menu.styles.scss'

type Props = {
	menu: MenuType
}

const DropdownMenu: FC<Props> = ({ menu: { title, options } }) => {
	const [isShow, setIsShow] = useState<boolean>(false)
	const menuRef = useRef<HTMLDivElement>(null)
	const listboxRef = useRef<HTMLUListElement>(null)
	const buttonRef = useRef<HTMLButtonElement>(null)

	const handleClickOutside = (event: MouseEvent) => {
		if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
			setIsShow(false)
		}
	}

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside)

		// Create on focus out event to close the current dropdown
		const focusOutEvent = (event: FocusEvent) => {
			if (!menuRef.current?.contains(event.relatedTarget as Node)) {
				setIsShow(false)
			}
		}
		document.addEventListener('focusout', focusOutEvent)
		return () => {
			document.removeEventListener('focusout', focusOutEvent)
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

	const handleKeyDown = (event: KeyboardEvent<HTMLUListElement>) => {
		const { key } = event

		switch (key) {
			case 'Escape':
				event.preventDefault()
				setIsShow(false)
				buttonRef.current?.focus()
				break
			default:
				break
		}
	}

	useEffect(() => {
		if (isShow) {
			;(listboxRef.current?.firstChild as HTMLElement)?.querySelector('a')?.focus()
		}
	}, [isShow])

	return (
		<div className='app-dropdown' ref={menuRef}>
			<Button
				ref={buttonRef}
				aria-haspopup='listbox'
				aria-labelledby='exp_elem'
				className='app-dropdown-button'
				onClick={() => setIsShow((prev) => !prev)}>
				{title}
				<Icon name={`chevron-${isShow ? 'up' : 'down'}`} title='chevron' size={10} />
			</Button>

			{isShow && options.length && (
				<div className='app-dropdown-content'>
					<ul ref={listboxRef} onKeyDown={handleKeyDown}>
						{options.map((opt) => (
							<li key={opt.title} id={`option_${opt.title}`}>
								<a href={opt.href} target={opt.target}>
									{opt.title}
								</a>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}

export default DropdownMenu
