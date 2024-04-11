import { FC } from 'react'
import classNames from 'classnames'
import './icon-style.scss'

type IconSize = 8 | 10 | 12 | 14 | 18 | 20 | 22 | 24 | 28

type Props = {
	title: string
	name: string
	size?: IconSize
}

const Icon: FC<Props> = ({ name, title, size }) => {
	const classes = classNames({
		[`wicon-${name}`]: name,
		...(size && { [`size-${size}`]: size }),
	})
	return <i className={classes} aria-label={title} />
}

export default Icon
