export interface ISOStandard {
  id: string;
  code: string; // e.g. "ISO 9001:2015"
  name: string; // e.g. "Quality Management Systems"
  category: 'Quality' | 'Environment & Energy' | 'Safety & Health' | 'Information Security' | 'Food & Medical';
  shortDesc: string;
  fullDesc: string;
  keyBenefits: string[];
  targetIndustries: string[];
  typicalDurationMonths: number;
  iconName: string;
}

export interface CertificationStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  description: string;
  keyTasks: string[];
  badgeText: string;
}

export interface VerifiedCertificate {
  certificateId: string; // e.g. "NEX-9001-2025-0104"
  clientName: string;
  standard: string;
  scope: string;
  issueDate: string;
  expiryDate: string;
  status: 'Active' | 'Under Audit' | 'Suspended';
  country: string;
  accreditationBody: string;
}

export interface QuoteRequestData {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  selectedStandards: string[];
  employeeCount: string;
  industry: string;
  locationsCount: number;
  additionalNotes?: string;
}

export interface GapCheckQuestion {
  id: string;
  category: string;
  question: string;
  weight: number;
}
