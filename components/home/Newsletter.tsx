import NewsletterSignup from '@/components/shared/NewsletterSignup'

export default function Newsletter() {
  return (
    <section id="newsletter" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gold-500 text-xs font-bold tracking-widest uppercase mb-3">Stay Connected</p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-500">
          Get Atlanta&apos;s Most Inspiring Local Stories
        </h2>
        <div className="w-12 h-1 bg-gold-400 mt-4 mx-auto" />
        <p className="mt-5 text-gray-500 leading-relaxed">
          One great story. One inspiring business. Every Tuesday in your inbox.
          Join thousands of Metro Atlantans who start their week with Local Spotlight ATL.
        </p>
        <div className="mt-8">
          <NewsletterSignup />
        </div>
      </div>
    </section>
  )
}
