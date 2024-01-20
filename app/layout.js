import { Inter,Outfit,Rubik,Poppins,Roboto_Condensed } from 'next/font/google'
import localfont from "next/font/local"
import './globals.css'
import { Toaster } from "react-hot-toast"

const inter = Inter({ subsets: ['latin'] })
const outfit = Outfit({ subsets: ['latin'] })
const robbot = Roboto_Condensed({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'] ,weight:['100','200','300','400','500','600','700','800','900']})

export const metadata = {
  title: 'Brightforth',
  description: 'BrightForth ',
}
const heltavica = localfont({
  src: [{
    path: "../public/fonts/Helvetica.ttf",
   
  }],
  variable: "--heltavica"
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${robbot.className}`}>
      <Toaster position='top-right'/>

        {children}
        </body>
    </html>
  )
}
