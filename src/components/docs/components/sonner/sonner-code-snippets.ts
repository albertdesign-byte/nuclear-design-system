import { exampleSnippet, tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

const sonnerImport = 'import { Toaster } from "@/components/sonner";';
const toastImport = 'import { toast } from "sonner";';
const buttonImport = 'import { Button } from "@/components/button";';

export const sonnerInstallationUiSnippet = tsxSnippet(`${sonnerImport}

export function Example() {
  return <Toaster richColors closeButton position="top-right" />;
}`);

export const sonnerRealScreenSnippet = tsxSnippet(`${toastImport}
${buttonImport}

export function Example() {
  return (
    <Button
      onClick={() =>
        toast.success("Record saved", {
          description: "Patient changes synced successfully.",
        })
      }
    >
      Save record
    </Button>
  );
}`);

export const sonnerUsageSnippet = exampleSnippet(
  `<Button onClick={() => toast("Event created")}>
  Show toast
</Button>`,
  { imports: [toastImport, buttonImport] }
);

export const sonnerSuccessSnippet = exampleSnippet(
  `toast.success("Record saved", {
  description: "Patient changes synced successfully.",
});`,
  { imports: [toastImport] }
);

export const sonnerProviderSnippet = tsxSnippet(`${sonnerImport}

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Toaster richColors closeButton position="top-right" />
    </>
  );
}`);

export const sonnerLoadingSnippet = exampleSnippet(
  `const toastId = toast.loading("Saving record…");
// later:
toast.success("Record saved", { id: toastId });`,
  { imports: [toastImport] }
);
