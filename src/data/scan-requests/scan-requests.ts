import type { ScanRequest } from "./scan-requests.types";

export const scanRequests: ScanRequest[] = [
  {
    srid: "SRID-1001",
    patientName: "Elena Morales",
    dob: "02/20/1982",
    email: "elena.morales@example.com",
    phone: "917-379-1470",
    scanType: "Ultrasound Thyroid and Parathyroid Glands",
    stage: "Requested",
    bookingInfo: "",
    agent: "Jose Nevado",
  },
  {
    srid: "SRID-1002",
    patientName: "Carlos Ruiz",
    dob: "03/15/1975",
    email: "carlos.ruiz@example.com",
    phone: "646-555-0198",
    scanType: "MRI Brain with and without Contrast",
    stage: "Qualified",
    bookingInfo: "Pending insurance",
    agent: "Jose Nevado",
  },
  {
    srid: "SRID-1003",
    patientName: "Ana Vega",
    dob: "11/02/1990",
    email: "ana.vega@example.com",
    phone: "718-555-0142",
    scanType: "CT Chest with Contrast",
    stage: "Requested",
    bookingInfo: "",
    agent: "Jose Nevado",
  },
  {
    srid: "SRID-1004",
    patientName: "Luis Pérez",
    dob: "07/28/1968",
    email: "luis.perez@example.com",
    phone: "212-555-0176",
    scanType: "PET Scan Whole Body",
    stage: "Qualified",
    bookingInfo: "Scheduled 08/12/2026",
    agent: "Jose Nevado",
  },
  {
    srid: "SRID-1005",
    patientName: "Maria Garcia",
    dob: "05/04/1988",
    email: "maria.garcia@example.com",
    phone: "347-555-0105",
    scanType: "Mammography Bilateral",
    stage: "In Progress",
    bookingInfo: "Room B — 10:30 AM",
    agent: "Jose Nevado",
  },
  {
    srid: "SRID-1006",
    patientName: "Juan Torres",
    dob: "09/18/1972",
    email: "juan.torres@example.com",
    phone: "929-555-0106",
    scanType: "X-Ray Chest PA and Lateral",
    stage: "Requested",
    bookingInfo: "",
    agent: "Sofia Martinez",
  },
  {
    srid: "SRID-1007",
    patientName: "Lucia Mendez",
    dob: "01/25/1995",
    email: "lucia.mendez@example.com",
    phone: "646-555-0107",
    scanType: "DEXA Bone Density Scan",
    stage: "Completed",
    bookingInfo: "Report available",
    agent: "Sofia Martinez",
  },
  {
    srid: "SRID-1008",
    patientName: "Pedro Jimenez",
    dob: "12/09/1960",
    email: "pedro.jimenez@example.com",
    phone: "718-555-0108",
    scanType: "MRI Lumbar Spine without Contrast",
    stage: "Qualified",
    bookingInfo: "",
    agent: "Jose Nevado",
  },
  {
    srid: "SRID-1009",
    patientName: "Marta Lopez",
    dob: "06/30/1984",
    email: "marta.lopez@example.com",
    phone: "212-555-0109",
    scanType: "CT Abdomen and Pelvis with Contrast",
    stage: "Canceled",
    bookingInfo: "Patient rescheduled",
    agent: "Jose Nevado",
  },
  {
    srid: "SRID-1010",
    patientName: "Ricardo Sanz",
    dob: "04/11/1979",
    email: "ricardo.sanz@example.com",
    phone: "917-555-0110",
    scanType: "Ultrasound Abdominal Complete",
    stage: "Requested",
    bookingInfo: "",
    agent: "Sofia Martinez",
  },
  {
    srid: "SRID-1011",
    patientName: "Beatriz Cano",
    dob: "08/07/1993",
    email: "beatriz.cano@example.com",
    phone: "646-555-0111",
    scanType: "MRI Knee without Contrast",
    stage: "In Progress",
    bookingInfo: "Check-in complete",
    agent: "Sofia Martinez",
  },
  {
    srid: "SRID-1012",
    patientName: "Francisco Soler",
    dob: "10/22/1958",
    email: "francisco.soler@example.com",
    phone: "347-555-0112",
    scanType: "Nuclear Stress Test",
    stage: "Completed",
    bookingInfo: "Final report sent",
    agent: "Jose Nevado",
  },
  {
    srid: "SRID-1013",
    patientName: "Irene Ramos",
    dob: "03/03/1986",
    email: "irene.ramos@example.com",
    phone: "718-555-0113",
    scanType: "CT Head without Contrast",
    stage: "Qualified",
    bookingInfo: "Awaiting auth",
    agent: "Sofia Martinez",
  },
  {
    srid: "SRID-1014",
    patientName: "Sergio Blanco",
    dob: "07/14/1970",
    email: "sergio.blanco@example.com",
    phone: "929-555-0114",
    scanType: "Echocardiogram Complete",
    stage: "Requested",
    bookingInfo: "",
    agent: "Jose Nevado",
  },
];

export function getScanRequestBySrid(srid: string) {
  return scanRequests.find((request) => request.srid === srid);
}

function scanRequestSearchText(request: ScanRequest) {
  return [
    request.srid,
    request.patientName,
    request.dob,
    request.email,
    request.phone,
    request.scanType,
    request.stage,
    request.bookingInfo,
    request.agent,
  ]
    .join(" ")
    .toLowerCase();
}

export function searchScanRequests(query: string) {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) {
    return scanRequests;
  }

  return scanRequests.filter((request) =>
    scanRequestSearchText(request).includes(normalizedQuery)
  );
}

export function getScanRequestSearchItems() {
  return scanRequests.map((request) => ({
    label: `${request.srid} — ${request.patientName}`,
    value: request.srid,
    group: "Scan requests",
  }));
}

export function getActiveScansPreview() {
  return scanRequests.slice(0, 4).map(({ srid, patientName, agent, stage }) => ({
    srid,
    patient: patientName,
    agent,
    stage,
  }));
}

export function getGlobalSearchItems() {
  return [
    ...getScanRequestSearchItems(),
    { label: "My active scans", value: "scans", group: "Views" },
    { label: "My open tasks", value: "tasks", group: "Views" },
  ];
}
