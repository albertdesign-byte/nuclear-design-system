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
      <TableCaption>Pacientes registrados hoy</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>MRN</TableHead>
          <TableHead>Paciente</TableHead>
          <TableHead>Estado</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">MRN-28491</TableCell>
          <TableCell>Elena Morales</TableCell>
          <TableCell>Activo</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">MRN-19302</TableCell>
          <TableCell>Carlos Ruiz</TableCell>
          <TableCell>Pendiente</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">MRN-44108</TableCell>
          <TableCell>Ana Vega</TableCell>
          <TableCell>Alta</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
