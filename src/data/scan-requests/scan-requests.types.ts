export type ScanRequest = {
  srid: string;
  patientName: string;
  dob: string;
  email: string;
  phone: string;
  scanType: string;
  stage: string;
  bookingInfo: string;
  agent: string;
};

export type ScanRequestSearchItem = {
  label: string;
  value: string;
  group?: string;
};
