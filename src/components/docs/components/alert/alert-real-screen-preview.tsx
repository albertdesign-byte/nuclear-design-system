import { Alert, AlertDescription, AlertTitle } from "@/components/alert";
import { AlertTriangleIcon } from "lucide-react";

export function AlertRealScreenPreview() {
  return (
    <Alert variant="destructive" className="max-w-md">
      <AlertTriangleIcon />
      <AlertTitle>Potassium critically high — 6.8 mEq/L</AlertTitle>
      <AlertDescription>
        Result exceeds critical threshold. Notify attending physician
        immediately and repeat stat draw to confirm.
      </AlertDescription>
    </Alert>
  );
}
