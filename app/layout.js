
'use client'
import './styles/globals.css'
import { RecoilRoot } from 'recoil'

export default function RootLayout({ children }) {
  return (
	<RecoilRoot>
		<html lang="en">
			<body>{children}</body>
		</html>
	</RecoilRoot>
  )
}
