import { exampleSnippet, tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

const formImports = `import { FieldDescription } from "@/components/field-description";
import { FieldError } from "@/components/field-error";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import { formFieldGroupClassName } from "@/lib/form-field";`;

export const formFieldGuidelinesSnippet = tsxSnippet(`${formImports}

export function Example() {
  return (
    <div className={formFieldGroupClassName}>
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="name@clinic.org" />
      <FieldDescription>Use your work email for account verification.</FieldDescription>
    </div>
  );
}`);

export const formFieldInputSnippet = exampleSnippet(
  `<div className={formFieldGroupClassName}>
  <Label htmlFor="patient-name">Patient name</Label>
  <Input id="patient-name" placeholder="Enter full legal name" />
</div>`,
  {
    imports: [
      formImports,
    ],
  }
);

export const formFieldSelectSnippet = exampleSnippet(
  `<div className={formFieldGroupClassName}>
  <Label htmlFor="status">Patient status</Label>
  <Select defaultValue="active">
    <SelectTrigger id="status">
      <SelectValue placeholder="Select status" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="active">Active</SelectItem>
    </SelectContent>
  </Select>
</div>`,
  {
    imports: [
      formImports,
      `import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select";`,
    ],
  }
);

export const formFieldCheckboxSnippet = exampleSnippet(
  `<div className={formOptionRowClassName}>
  <Checkbox id="share-results" className="mt-0.5" />
  <Label htmlFor="share-results">Share results with my provider</Label>
</div>`,
  {
    imports: [
      `import { Checkbox } from "@/components/checkbox";`,
      `import { Label } from "@/components/label";`,
      `import { formOptionRowClassName } from "@/lib/form-field";`,
    ],
  }
);

export const formFieldRadioSnippet = exampleSnippet(
  `<div className={formFieldGroupClassName}>
  <Label id="visit-type">Visit type</Label>
  <RadioGroup defaultValue="in-person" aria-labelledby="visit-type">
    <div className={formOptionRowClassName}>
      <RadioGroupItem value="in-person" id="visit-in-person" />
      <Label htmlFor="visit-in-person">In-person</Label>
    </div>
  </RadioGroup>
</div>`,
  {
    imports: [
      `import { Label } from "@/components/label";`,
      `import { RadioGroup, RadioGroupItem } from "@/components/radio-group";`,
      `import { formFieldGroupClassName, formOptionRowClassName } from "@/lib/form-field";`,
    ],
  }
);

export const formFieldValidationSnippet = exampleSnippet(
  `<div className={formFieldGroupClassName}>
  <Label htmlFor="email" invalid>Email</Label>
  <Input id="email" aria-invalid aria-describedby="email-error" />
  <FieldError id="email-error">Enter a valid email address.</FieldError>
</div>`,
  {
    imports: [formImports],
  }
);
