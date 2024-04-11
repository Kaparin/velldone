import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './styles/globals.scss'
import '../app/assets/icons/style.css'

const font = Rubik({ subsets: ['latin', 'hebrew'] })

export const metadata: Metadata = {
	title: 'Welfairy',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='he' dir="rtl">
			<body className={font.className}>{children}</body>
		</html>
	)
}
