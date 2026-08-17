import { Alert, AlertDescription, AlertIcon, AlertTitle } from "@/components/alert";
import { AlertCircleIcon } from "lucide-react";

export function AlertRealScreenPreview() {
  return (
    <Alert variant="error" className="max-w-md">
      <AlertIcon><AlertCircleIcon /></AlertIcon>
      <AlertTitle>Failed to upload study</AlertTitle>
      <AlertDescription>
        The DICOM files could not be uploaded. Check the connection and try again.
      </AlertDescription>
    </Alert>
  );
}
