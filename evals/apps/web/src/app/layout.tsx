/*
 * @Author: zhouxingyu zhouxingyu@trs.com.cn
 * @Date: 2025-04-09 11:56:41
 * @LastEditors: zhouxingyu zhouxingyu@trs.com.cn
 * @LastEditTime: 2025-04-10 11:12:22
 * @FilePath: \Wukong-Code\evals\apps\web\src\app\layout.tsx
 * @Description:
 * Copyright (c) 2025 by zhouxingyu@trs.com.cn, All Rights Reserved.
 */
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import { ThemeProvider, ReactQueryProvider } from "@/components/providers"
import { Toaster } from "@/components/ui"
import { Header } from "@/components/layout/header"

import "./globals.css"

const fontSans = Geist({ variable: "--font-sans", subsets: ["latin"] })
const fontMono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Wukong Code Evals",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased pb-12`}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
					<ReactQueryProvider>
						<Header />
						{children}
					</ReactQueryProvider>
				</ThemeProvider>
				<Toaster />
			</body>
		</html>
	)
}
