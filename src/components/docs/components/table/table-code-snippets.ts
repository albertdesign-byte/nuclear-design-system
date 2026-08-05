import { exampleSnippet, tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

const tableImport = `import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/table";`;

export const tableInstallationUiSnippet = tsxSnippet(`${tableImport}

export function Example() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>MRN</TableHead>
          <TableHead>Paciente</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>MRN-28491</TableCell>
          <TableCell>Elena Morales</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}`);

export const tableRealScreenSnippet = tsxSnippet(`${tableImport}

export function Example() {
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
      </TableBody>
    </Table>
  );
}`);

export const tableUsageSnippet = exampleSnippet(
  `<Table>
  <TableHeader>
    <TableRow>
      <TableHead>MRN</TableHead>
      <TableHead>Paciente</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>MRN-28491</TableCell>
      <TableCell>Elena Morales</TableCell>
    </TableRow>
  </TableBody>
</Table>`,
  { imports: [tableImport] }
);

export const tableCaptionSnippet = exampleSnippet(
  `<Table>
  <TableCaption>Pacientes registrados hoy</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>MRN</TableHead>
      <TableHead>Paciente</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>MRN-28491</TableCell>
      <TableCell>Elena Morales</TableCell>
    </TableRow>
  </TableBody>
</Table>`,
  { imports: [tableImport] }
);

const tableWithFooterImport = `import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/table";`;

export const tableFooterSnippet = exampleSnippet(
  `<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Concepto</TableHead>
      <TableHead>Monto</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Consulta</TableCell>
      <TableCell>$120</TableCell>
    </TableRow>
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell>Total</TableCell>
      <TableCell>$120</TableCell>
    </TableRow>
  </TableFooter>
</Table>`,
  { imports: [tableWithFooterImport] }
);
