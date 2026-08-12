import { ISOStandard, CertificationStep, VerifiedCertificate } from '../types';

export const ISO_STANDARDS: ISOStandard[] = [
  {
    id: 'iso-9001',
    code: 'ISO 9001:2015',
    name: 'Quality Management Systems (QMS)',
    category: 'Quality',
    shortDesc: 'The gold standard for operational consistency, customer satisfaction, and continuous process optimization.',
    fullDesc: 'ISO 9001 is the world’s most recognized quality management standard. It helps organizations of all sizes and sectors improve performance, meet customer expectations, and demonstrate commitment to quality.',
    keyBenefits: [
      'Enhance client trust and tender qualification eligibility in Bahrain & GCC',
      'Streamline internal operational workflows and eliminate process redundancies',
      'Improve product/service quality through systematic corrective actions',
      'Foster leadership accountability and data-driven decision making'
    ],
    targetIndustries: ['Manufacturing', 'Construction & Engineering', 'Financial Services', 'Trading & Logistics', 'Healthcare'],
    typicalDurationMonths: 3,
    iconName: 'ShieldCheck'
  },
  {
    id: 'iso-14001',
    code: 'ISO 14001:2015',
    name: 'Environmental Management Systems (EMS)',
    category: 'Environment & Energy',
    shortDesc: 'Demonstrate environmental responsibility, minimize waste, and meet stringent regulatory requirements.',
    fullDesc: 'ISO 14001 provides a structured framework to identify, control, and reduce environmental impact, ensuring compliance with local laws and international sustainability benchmarks.',
    keyBenefits: [
      'Reduce utility costs through energy, water, and material efficiency',
      'Ensure 100% compliance with Bahrain Supreme Council for Environment regulations',
      'Enhance corporate ESG reputation with investors and stakeholders',
      'Minimize risk of environmental penalties and legal liabilities'
    ],
    targetIndustries: ['Oil & Gas', 'Manufacturing', 'Facilities Management', 'Chemicals & Energy', 'Construction'],
    typicalDurationMonths: 3,
    iconName: 'Leaf'
  },
  {
    id: 'iso-45001',
    code: 'ISO 45001:2018',
    name: 'Occupational Health & Safety (OH&S)',
    category: 'Safety & Health',
    shortDesc: 'Protect your workforce, mitigate workplace risks, and foster a proactive safety-first culture.',
    fullDesc: 'ISO 45001 specifies requirements for an occupational health and safety management system to prevent work-related injuries, ill health, and provide safe work environments.',
    keyBenefits: [
      'Dramatically reduce workplace accidents and lost-time injuries',
      'Lower worker compensation insurance premiums',
      'Build worker trust and boost workforce morale',
      'Align with Ministry of Labour health and safety compliance rules in Bahrain'
    ],
    targetIndustries: ['Construction', 'Oil & Gas', 'Heavy Industries', 'Logistics & Warehousing', 'Hospitality'],
    typicalDurationMonths: 3,
    iconName: 'HeartPulse'
  },
  {
    id: 'iso-27001',
    code: 'ISO/IEC 27001:2022',
    name: 'Information Security Management (ISMS)',
    category: 'Information Security',
    shortDesc: 'Safeguard intellectual property, client data, and critical IT assets against cyber threats.',
    fullDesc: 'ISO 27001 is the global standard for managing information security risks. It provides a robust matrix of technical, physical, and organizational controls.',
    keyBenefits: [
      'Protect confidential financial, client, and proprietary data from breaches',
      'Comply with Central Bank of Bahrain (CBB) cybersecurity guidelines',
      'Win high-value enterprise contracts requiring proven data protection',
      'Establish robust incident response and disaster recovery protocols'
    ],
    targetIndustries: ['Banking & Fintech', 'IT & Cloud Providers', 'Telecommunications', 'E-Commerce', 'Government'],
    typicalDurationMonths: 4,
    iconName: 'Lock'
  },
  {
    id: 'iso-22000',
    code: 'ISO 22000:2018',
    name: 'Food Safety Management Systems (FSMS)',
    category: 'Food & Medical',
    shortDesc: 'Ensure food safety across the entire supply chain, from farm and factory to table.',
    fullDesc: 'ISO 22000 integrates HACCP principles with quality management to identify and mitigate biological, chemical, and physical hazards in food production.',
    keyBenefits: [
      'Ensure strict compliance with Ministry of Health food safety standards',
      'Prevent product recalls and foodborne illness outbreaks',
      'Expand distribution into premier supermarkets, hotels, and export markets',
      'Gain consumer confidence in hygienic food manufacturing and handling'
    ],
    targetIndustries: ['Food Processing', 'Hotels & Catering', 'Restaurants', 'Cold Chain & Logistics', 'Agriculture'],
    typicalDurationMonths: 3,
    iconName: 'Utensils'
  },
  {
    id: 'iso-13485',
    code: 'ISO 13485:2016',
    name: 'Medical Devices Quality Management',
    category: 'Food & Medical',
    shortDesc: 'Comply with stringent regulatory standards for medical device design, manufacturing, and supply.',
    fullDesc: 'ISO 13485 specifies requirements for a QMS where an organization needs to demonstrate its ability to provide medical devices and related services that consistently meet customer and applicable regulatory requirements.',
    keyBenefits: [
      'Facilitate regulatory approvals (NHRA Bahrain, CE mark, FDA compliance)',
      'Manage risk throughout product design, sterilization, and distribution',
      'Enhance traceability and post-market surveillance systems',
      'Build confidence among healthcare institutions and distributors'
    ],
    targetIndustries: ['Medical Device Manufacturing', 'Surgical Equipment Supply', 'Pharma Logistics', 'Diagnostic Labs'],
    typicalDurationMonths: 4,
    iconName: 'Activity'
  },
  {
    id: 'iso-50001',
    code: 'ISO 50001:2018',
    name: 'Energy Management Systems (EnMS)',
    category: 'Environment & Energy',
    shortDesc: 'Optimize energy efficiency, lower consumption costs, and reduce operational carbon footprint.',
    fullDesc: 'ISO 50001 establishes an energy management framework to measure, analyze, and continuously optimize energy consumption in commercial and industrial operations.',
    keyBenefits: [
      'Cut energy expenditure by up to 15-25% through smart monitoring',
      'Demonstrate corporate commitment to Bahrain Economic Vision 2030 green goals',
      'Systematically identify energy loss and high-consumption assets',
      'Improve baseline efficiency and operational margins'
    ],
    targetIndustries: ['Aluminum & Heavy Industry', 'Commercial Real Estate', 'Data Centers', 'Manufacturing Plants'],
    typicalDurationMonths: 3,
    iconName: 'Zap'
  },
  {
    id: 'iso-22301',
    code: 'ISO 22301:2019',
    name: 'Business Continuity Management Systems (BCMS)',
    category: 'Quality',
    shortDesc: 'Ensure operational resilience, crisis preparedness, and uninterrupted business operations.',
    fullDesc: 'ISO 22301 prepares organizations to withstand, respond to, and recover from disruptive incidents such as power outages, IT failures, supply chain disruptions, or natural disasters.',
    keyBenefits: [
      'Maintain continuous business operations during crises and emergencies',
      'Minimize financial impact and service downtime',
      'Protect brand reputation and customer trust during major incidents',
      'Satisfy regulatory requirements for critical infrastructure resilience'
    ],
    targetIndustries: ['Banking & Insurance', 'Utilities & Telecoms', 'Government Entities', 'Port & Aviation Operations'],
    typicalDurationMonths: 3,
    iconName: 'RefreshCw'
  }
];

export const CERTIFICATION_PROCESS_STEPS: CertificationStep[] = [
  {
    stepNumber: 1,
    title: 'Application and Contract Review',
    subtitle: 'Scope Definition & Agreement Formulation',
    description: 'Receiving applications from organizations seeking ISO certification. Reviewing the application for completeness and accuracy. Establishing an official contract or agreement detailing the certification process and timelines.',
    keyTasks: [
      'Application intake & scope verification',
      'Standard selection & initial documentation check',
      'Formal proposal & clear timeline contract agreement',
      'Audit schedule planning and lead auditor assignment'
    ],
    badgeText: 'Stage 1 Intake'
  },
  {
    stepNumber: 2,
    title: 'Pre-audit Assessment & Gap Analysis',
    subtitle: 'Diagnostic Assessment & Compliance Evaluation',
    description: 'Conducting a preliminary assessment and gap analysis to evaluate the organization\'s readiness and scope for the ISO certification process. Identifying areas of non-conformities that need to be corrected before external certification audits.',
    keyTasks: [
      'On-site or remote preliminary readiness diagnostic',
      'Comprehensive gap analysis against ISO clause criteria',
      'Detailed findings report highlighting compliance gaps',
      'Action plan advisory to address non-conformities before stage 2'
    ],
    badgeText: 'Stage 2 Diagnostic'
  },
  {
    stepNumber: 3,
    title: 'Issuing the ISO Certificate',
    subtitle: 'External Audit & Final Accreditation Certification',
    description: 'After successful completion of the external audit, issuing an ISO certificate to the organization, specifying the scope of certification, certification standard, and accreditation details.',
    keyTasks: [
      'Execution of formal Stage 2 external certification audit',
      'Audit committee review & approval recommendation',
      'Issuance of official accredited ISO Certificate',
      'Registration in international verification portal & surveillance planning'
    ],
    badgeText: 'Stage 3 Certification'
  }
];

export const MOCK_CERTIFICATES: VerifiedCertificate[] = [
  {
    certificateId: 'NEX-9001-2025-0104',
    clientName: 'Manama Logistics & Forwarding Co. WLL',
    standard: 'ISO 9001:2015',
    scope: 'Provision of Freight Forwarding, Warehousing, and Customs Clearance Services in Bahrain',
    issueDate: '2025-01-15',
    expiryDate: '2028-01-14',
    status: 'Active',
    country: 'Bahrain',
    accreditationBody: 'International Accreditation Forum (IAF)'
  },
  {
    certificateId: 'NEX-27001-2025-0088',
    clientName: 'Gulf FinTech Solutions BSC',
    standard: 'ISO/IEC 27001:2022',
    scope: 'Development, Hosting, and Management of Banking Application Infrastructure and Cloud Financial APIs',
    issueDate: '2025-02-10',
    expiryDate: '2028-02-09',
    status: 'Active',
    country: 'Bahrain',
    accreditationBody: 'International Accreditation Forum (IAF)'
  },
  {
    certificateId: 'NEX-45001-2024-0320',
    clientName: 'Bahrain Industrial Construction WLL',
    standard: 'ISO 45001:2018',
    scope: 'Civil Contracting, Commercial MEP Infrastructure Construction, and Heavy Steel Fabrication',
    issueDate: '2024-08-22',
    expiryDate: '2027-08-21',
    status: 'Active',
    country: 'Bahrain',
    accreditationBody: 'International Accreditation Forum (IAF)'
  },
  {
    certificateId: 'NEX-14001-2024-0211',
    clientName: 'Al-Diplomat Eco-Facilities Management',
    standard: 'ISO 14001:2015',
    scope: 'Facility Management, Waste Handling, and Energy Auditing Services for Commercial Real Estate',
    issueDate: '2024-06-01',
    expiryDate: '2027-05-31',
    status: 'Active',
    country: 'Bahrain',
    accreditationBody: 'International Accreditation Forum (IAF)'
  },
  {
    certificateId: 'NEX-22000-2025-0042',
    clientName: 'Central Manama Catering Services WLL',
    standard: 'ISO 22000:2018',
    scope: 'Preparation, Packaging, and Cold-Chain Delivery of Industrial & Airline Catering Operations',
    issueDate: '2025-03-01',
    expiryDate: '2028-02-28',
    status: 'Active',
    country: 'Bahrain',
    accreditationBody: 'International Accreditation Forum (IAF)'
  }
];
