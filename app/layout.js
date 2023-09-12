
import './globals.css'


export const metadata = {
  title: 'Homepage-Edie',
  description: 'Eddie-HomePage',
}


const Rootlayout = ({ children }) => {
  return (
    <html lang="en">
    <body>{ children }</body>
  </html>
  )
}

export default Rootlayout
