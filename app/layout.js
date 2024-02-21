import { Inter,Outfit,Rubik,Poppins,Roboto_Condensed,Kumbh_Sans } from 'next/font/google'
import localfont from "next/font/local"
import './globals.css'
import { Toaster } from "react-hot-toast"

const inter = Inter({ subsets: ['latin'] })
const outfit = Outfit({ subsets: ['latin'] })
const sans =  Kumbh_Sans({ subsets: ['latin'] });



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
      <body className={`${outfit.className}`}>
      <Toaster position='top-right'/>

        {children}
        </body>
    </html>
  )
}
