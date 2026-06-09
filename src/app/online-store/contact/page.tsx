import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from './ContactForm'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </main>

      <Footer />
    </div>
  )
}
