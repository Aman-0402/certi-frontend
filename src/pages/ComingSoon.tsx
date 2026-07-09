import { Link } from 'wouter'

export default function ComingSoon({ title }: { title: string }) {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-[1600px] flex-col items-center justify-center px-6 py-24 text-center sm:px-10 lg:px-16">
      <span className="rounded-full border border-royal/20 bg-royal/5 px-4 py-1.5 text-xs font-semibold text-royal">
        Coming Soon
      </span>
      <h1 className="mt-6 text-3xl font-bold text-navy sm:text-4xl">{title}</h1>
      <p className="mt-4 max-w-md text-navy/60">
        This page is still being built. Check back soon, or head back to the homepage in the
        meantime.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-lg bg-royal px-6 py-3 text-sm font-semibold text-white shadow-glow transition-colors hover:bg-royal-600"
      >
        Back to Home
      </Link>
    </section>
  )
}
