import { useReducedMotion } from 'framer-motion'
import chooseImg from '../assets/icons/Choose a Certification_converted.webp'
import purchaseImg from '../assets/icons/Purchase Voucher & Access Exam_converted.webp'
import assessImg from '../assets/icons/Take Secure Assessment_converted.webp'
import evaluateImg from '../assets/icons/Get Evaluated & Results_converted.webp'
import earnImg from '../assets/icons/Earn Your Digital Certificate_converted.webp'
import JourneyHero from '../components/howItWorks/JourneyHero'
import JourneyScroll from '../components/howItWorks/JourneyScroll'
import JourneyVertical from '../components/howItWorks/JourneyVertical'
import type { Step } from '../components/howItWorks/types'

const STEPS: Step[] = [
  {
    number: '01',
    title: 'Choose a Certification',
    desc: 'Explore a wide range of professional certifications and select the one that matches your goals.',
    image: chooseImg,
  },
  {
    number: '02',
    title: 'Purchase Voucher & Access Exam',
    desc: 'Buy a voucher securely and get instant access to your chosen certification exam.',
    image: purchaseImg,
  },
  {
    number: '03',
    title: 'Take Secure Assessment',
    desc: 'Attempt the exam in a secure, AI-proctored environment with real-time monitoring.',
    image: assessImg,
  },
  {
    number: '04',
    title: 'Get Evaluated & Results',
    desc: 'Your responses are auto-evaluated and results are generated instantly after completion.',
    image: evaluateImg,
  },
  {
    number: '05',
    title: 'Earn Your Digital Certificate',
    desc: 'Receive your verifiable digital certificate and share it globally with confidence.',
    image: earnImg,
  },
]

type Feature = { title: string; desc: string; icon: 'secure' | 'globe' | 'document' | 'clock' }

const FEATURES: Feature[] = [
  { title: 'Secure & Trusted', desc: 'AI-proctored exams ensure integrity and fairness.', icon: 'secure' },
  { title: 'Globally Verifiable', desc: 'Every certificate is publicly verifiable anywhere, anytime.', icon: 'globe' },
  { title: 'Tamper-Proof Certificates', desc: 'Blockchain-secured digital certificates you can trust.', icon: 'document' },
  { title: 'Instant & Convenient', desc: 'Take exams anytime, anywhere with a seamless experience.', icon: 'clock' },
]

function FeatureIcon({ icon }: { icon: Feature['icon'] }) {
  const common = { className: 'h-6 w-6 text-royal', viewBox: '0 0 24 24', fill: 'none' } as const

  if (icon === 'secure') {
    return (
      <svg {...common}>
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  if (icon === 'globe') {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3.5 12h17M12 3.5c2.5 2.3 4 5.3 4 8.5s-1.5 6.2-4 8.5c-2.5-2.3-4-5.3-4-8.5s1.5-6.2 4-8.5z" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    )
  }
  if (icon === 'document') {
    return (
      <svg {...common}>
        <rect x="5" y="3.5" width="14" height="17" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 8h8M8 11.5h8M8 15h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  }
  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function HowItWorks() {
  const reducedMotion = useReducedMotion()

  return (
    <>
      <JourneyHero />

      {reducedMotion ? (
        <JourneyVertical steps={STEPS} />
      ) : (
        <>
          <div className="hidden lg:block">
            <JourneyScroll steps={STEPS} />
          </div>
          <div className="lg:hidden">
            <JourneyVertical steps={STEPS} />
          </div>
        </>
      )}

      <section className="bg-[#F8FAFF] pb-20">
        <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16">
          <div className="flex flex-wrap items-stretch justify-center gap-y-8 rounded-2xl border border-navy/10 bg-white p-8">
            {FEATURES.map((f, i) => (
              <div key={f.title} className="flex flex-1 basis-56 items-start gap-3 px-4">
                {i > 0 && <span className="mr-1 hidden h-10 w-px self-center bg-navy/10 sm:block" aria-hidden />}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-royal/10 transition-transform duration-300 hover:scale-110 hover:rotate-6">
                  <FeatureIcon icon={f.icon} />
                </div>
                <div>
                  <p className="text-sm font-bold text-navy">{f.title}</p>
                  <p className="mt-1 text-sm text-navy/55">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
