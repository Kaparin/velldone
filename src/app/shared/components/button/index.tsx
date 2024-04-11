import { ButtonHTMLAttributes, forwardRef } from 'react'
import classnames from 'classnames'
import './styles.scss'

export type ButtonSize = 'lg' | 'md' | 'sm' | 'xs'
export type ButtonSeverity = 'primary' | 'light' | 'gray' | 'danger' | 'success' | 'warning'
type Props = {
	severity?: ButtonSeverity
	outlined?: boolean
	size?: ButtonSize
	round?: boolean
	rounded?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = forwardRef<HTMLButtonElement, Props>(
	({ children, severity, outlined, size, round, className, type, rounded, ...rest }, ref) => {
		const buttonClass = classnames({
			btn: true,
			round: round,
			rounded: rounded,
			outlined: outlined,
			...(size && { [size]: size }),
			...(severity && { [severity]: severity }),
		})
		return (
			<button
				ref={ref}
				type={type ? type : 'button'}
				className={`${buttonClass} ${className || ''}`}
				{...rest}>
				{children}
			</button>
		)
	}
)

Button.displayName = 'Button'

export default Button
