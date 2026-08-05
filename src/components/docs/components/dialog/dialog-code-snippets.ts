import { exampleSnippet, tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

const dialogImport = `import { Button } from "@/components/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/dialog";`;

export const dialogInstallationUiSnippet = tsxSnippet(`${dialogImport}

export function Example() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        Abrir diálogo
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Título</DialogTitle>
          <DialogDescription>Descripción del diálogo.</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}`);

export const dialogRealScreenSnippet = tsxSnippet(`${dialogImport}

export function Example() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        Cancelar cita
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>¿Cancelar cita?</DialogTitle>
          <DialogDescription>
            La cita del 18 de julio a las 10:30 se marcará como cancelada.
            Esta acción no se puede deshacer.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline">Mantener cita</Button>
          <Button intent="danger">Confirmar cancelación</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}`);

export const dialogUsageSnippet = exampleSnippet(
  `<Dialog>
  <DialogTrigger render={<Button variant="outline" />}>
    Abrir diálogo
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Título</DialogTitle>
      <DialogDescription>Descripción del diálogo.</DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>`,
  { imports: [dialogImport] }
);

export const dialogFooterSnippet = exampleSnippet(
  `<Dialog>
  <DialogTrigger render={<Button variant="outline" />}>
    Cancelar cita
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>¿Cancelar cita?</DialogTitle>
      <DialogDescription>
        La cita se marcará como cancelada.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button variant="outline">Mantener cita</Button>
      <Button intent="danger">Confirmar cancelación</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
  { imports: [dialogImport] }
);

export const dialogWithoutCloseSnippet = exampleSnippet(
  `<Dialog>
  <DialogTrigger render={<Button variant="outline" />}>
    Abrir diálogo
  </DialogTrigger>
  <DialogContent showCloseButton={false}>
    <DialogHeader>
      <DialogTitle>Sin botón de cierre</DialogTitle>
      <DialogDescription>
        Usa acciones del footer para cerrar.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter showCloseButton>
      <Button variant="outline">Cerrar</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
  { imports: [dialogImport] }
);
