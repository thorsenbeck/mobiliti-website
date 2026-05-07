import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProjektHero from '@/components/projekt/ProjektHero'
import ProjektBaggrund from '@/components/projekt/ProjektBaggrund'
import ProjektFormaal from '@/components/projekt/ProjektFormaal'
import ProjektMetode from '@/components/projekt/ProjektMetode'
import ProjektMaaling from '@/components/projekt/ProjektMaaling'
import ProjektMilepaele from '@/components/projekt/ProjektMilepaele'
import ProjektForankring from '@/components/projekt/ProjektForankring'
import ProjektStatus from '@/components/projekt/ProjektStatus'

export const metadata = {
  title: 'Pilotprojekt — Mobiliti',
  description:
    'Mobilitis pilotprojekt: forebyggende hjemmetræning til ældre, rekonvalescenter og privatpersoner — afprøvning, dokumentation og videndeling i samarbejde med Helsefonden.',
}

export default function ProjektPage() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <ProjektHero />
      <ProjektBaggrund />
      <ProjektFormaal />
      <ProjektMetode />
      <ProjektMaaling />
      <ProjektMilepaele />
      <ProjektForankring />
      <ProjektStatus />
      <Footer />
    </main>
  )
}
