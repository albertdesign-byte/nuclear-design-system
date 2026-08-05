import { exampleSnippet, tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

const alertDialogImport = `import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/alert-dialog";
import { Button } from "@/components/button";`;

export const alertDialogInstallationUiSnippet = tsxSnippet(`${alertDialogImport}

export function Example() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="outline" />}>
        Delete record
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}`);

export const alertDialogRealScreenSnippet = tsxSnippet(`${alertDialogImport}

export function Example() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button intent="danger" variant="outline" />}>
        Delete record
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete clinical record?</AlertDialogTitle>
          <AlertDialogDescription>
            This permanently removes the progress note from María González's
            chart. This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction intent="danger">Delete record</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}`);

export const alertDialogUsageSnippet = exampleSnippet(
  `<AlertDialog>
  <AlertDialogTrigger render={<Button variant="outline" />}>
    Delete record
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Delete clinical record?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction intent="danger">Delete record</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`,
  { imports: [alertDialogImport] }
);
