'use client'
import { AppContextProvider } from './components/Context'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
import { Provider } from 'react-redux'
import store from './store'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'News Hunt',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/fav.png' sizes='any'/>
      </head>
      <body className={inter.className}>
        <Provider store={store}>
          <AppContextProvider>
            <Toaster />
            <Navbar />
            {children}
            <Footer />
          </AppContextProvider>
        </Provider>
      </body>
    </html>
  )
}
