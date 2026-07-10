export type HelpArticle = { question: string; answer: string }

export type HelpTopic = {
  id: string
  title: string
  desc: string
  icon: 'certificate-play' | 'voucher' | 'laptop' | 'certificate'
  articles: HelpArticle[]
}

export const HELP_TOPICS: HelpTopic[] = [
  {
    id: 'certification-exam-access',
    title: 'Certification & Exam Access',
    desc: 'Get help with certification access, exam availability, and starting your assessment.',
    icon: 'certificate-play',
    articles: [
      {
        question: 'Starting an Exam',
        answer:
          'Once your certification access is active, open the certification from your dashboard and select Start Exam. Make sure you have a stable connection and a quiet environment before beginning.',
      },
      {
        question: 'Certification Access',
        answer:
          'Certification access is granted after a valid voucher is applied to your account or after direct enrollment. Access appears in your dashboard once it is activated.',
      },
      {
        question: 'Exam Requirements',
        answer:
          'Most exams require a desktop or laptop with a supported browser, a stable internet connection, and fullscreen mode enabled for the duration of the assessment.',
      },
    ],
  },
  {
    id: 'vouchers',
    title: 'Vouchers',
    desc: 'Find answers about voucher validation, voucher access, and certification exam entry.',
    icon: 'voucher',
    articles: [
      {
        question: 'Using a Voucher',
        answer:
          'Enter your voucher code on the certification page or during checkout. Once validated, the certification is added to your account and ready to start.',
      },
      {
        question: 'Invalid Voucher',
        answer:
          'An invalid voucher usually means the code was mistyped, already redeemed, or has expired. Double-check the code and contact your organization if the issue continues.',
      },
      {
        question: 'Voucher Access',
        answer:
          'Vouchers are typically distributed by your university, training institute, or employer as part of a certification partnership. Contact your organization administrator if you were expecting one.',
      },
    ],
  },
  {
    id: 'assessments',
    title: 'Assessments',
    desc: 'Get support for secure assessment requirements and exam-session issues.',
    icon: 'laptop',
    articles: [
      {
        question: 'Fullscreen Issues',
        answer:
          'Secure assessments require fullscreen mode to remain active throughout the exam. If you exit fullscreen, you may be prompted to re-enter it to continue.',
      },
      {
        question: 'Camera Requirements',
        answer:
          'When AI-assisted proctoring is enabled for an assessment, a working camera and adequate lighting are required. Grant camera permission when prompted by your browser.',
      },
      {
        question: 'Exam Session',
        answer:
          'Your exam timing, answers, and progress are saved automatically throughout the session. If your session is interrupted, contact support with your Certificate ID or exam reference.',
      },
    ],
  },
  {
    id: 'digital-certificates',
    title: 'Digital Certificates',
    desc: 'Find help with certificate access, Certificate IDs, and public credential verification.',
    icon: 'certificate',
    articles: [
      {
        question: 'View Certificate',
        answer:
          'Successful candidates can view and access their digital certificate from their dashboard once it has been generated for an eligible certification.',
      },
      {
        question: 'Certificate ID',
        answer:
          'Your Certificate ID is printed on your digital certificate and is used to publicly verify its authenticity through the Verify Certificate page.',
      },
      {
        question: 'Verify Certificate',
        answer:
          'Anyone can verify a CertiByt certificate by entering its Certificate ID on the public Verify Certificate page -- no sign in required.',
      },
    ],
  },
]
