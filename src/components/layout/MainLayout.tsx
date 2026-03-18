import Navbar from './Navbar'
import Footer from './Footer'

interface Props {
    children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-[76px]">
        {children}
      </main>
      <Footer />
    </div>
  )
}