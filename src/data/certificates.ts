export type VerifiedCertificate = {
  id: string
  holder: string
  certificationName: string
  issueDate: string
  status: 'Active'
}

/**
 * Mock verification database. No backend exists yet -- once one does,
 * this lookup becomes a real API call to the certificate-verification
 * endpoint, keyed the same way (Certificate ID -> record).
 */
export const MOCK_CERTIFICATES: Record<string, VerifiedCertificate> = {
  'CB-DS-2025-5A7F9C': {
    id: 'CB-DS-2025-5A7F9C',
    holder: 'Aman Kumar',
    certificationName: 'Advanced Data Science',
    issueDate: '25 May 2025',
    status: 'Active',
  },
}

export function verifyCertificateId(rawId: string): VerifiedCertificate | null {
  const id = rawId.trim().toUpperCase()
  return MOCK_CERTIFICATES[id] ?? null
}
