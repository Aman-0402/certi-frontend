import { useState } from 'react'
import VerifyHero from '../components/verify/VerifyHero'
import VerificationResult from '../components/verify/VerificationResult'
import FindCertificateId from '../components/verify/FindCertificateId'
import { verifyCertificateId } from '../data/certificates'
import type { VerifiedCertificate } from '../data/certificates'

type Status = 'idle' | 'verified' | 'not-found'

export default function VerifyCertificate() {
  const [certId, setCertId] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [result, setResult] = useState<VerifiedCertificate | null>(null)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!certId.trim()) return

    const match = verifyCertificateId(certId)
    setResult(match)
    setStatus(match ? 'verified' : 'not-found')
  }

  function handleReset() {
    setStatus('idle')
    setResult(null)
    setCertId('')
  }

  return (
    <>
      <VerifyHero certId={certId} onChange={setCertId} onSubmit={handleSubmit} />
      {status !== 'idle' && <VerificationResult status={status} data={result} onReset={handleReset} />}
      <FindCertificateId />
    </>
  )
}
