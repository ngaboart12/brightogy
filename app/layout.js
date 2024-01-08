import { Inter,Outfit,Rubik,Poppins,Open_Sans } from 'next/font/google'
import './globals.css'
import { Toaster } from "react-hot-toast"

const inter = Inter({ subsets: ['latin'] })
const outfit = Outfit({ subsets: ['latin'] })
const open = Outfit({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'] ,weight:['100','200','300','400','500','600','700','800','900']})

export const metadata = {
  title: 'Brightforth',
  description: 'BrightForth ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={open.className}>
      <Toaster position='top-right'/>

        {children}
        </body>
    </html>
  )
}
