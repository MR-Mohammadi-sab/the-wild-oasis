import Logo from "./_components/Logo"
import Navbar from "./_components/Navbar"
import "@/app/_styles/globals.css"

export const metadata = {
  title: {
    template:"%s The Wild Oasis",
    default:"Welcome / The Wild Oasis"
  },
    description:
    "Luxurious room hotel, located in the heart of the Afghanistan Dolomites, surrounded by beautiful mountains and dark forests",
}

export default function RootLayout({ children }) {
  return (
  <html lang="en">
      <body>
        <header>
          <Logo />
          <Navbar />
        </header>
        <main>
          {children}
        </main>
      </body>
  </html>
  )
}
