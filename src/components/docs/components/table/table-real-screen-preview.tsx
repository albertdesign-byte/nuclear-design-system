import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/table";

export function TableRealScreenPreview() {
  return (
    <Table>
      <TableCaption>Patients registered today</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>MRN</TableHead>
          <TableHead>Patient</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">MRN-28491</TableCell>
          <TableCell>Elena Morales</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">MRN-19302</TableCell>
          <TableCell>Carlos Ruiz</TableCell>
          <TableCell>Pending</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">MRN-44108</TableCell>
          <TableCell>Ana Vega</TableCell>
          <TableCell>Discharged</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
