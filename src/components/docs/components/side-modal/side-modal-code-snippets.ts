import { exampleSnippet, tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

const sideModalImport = `import { Button } from "@/components/button";
import {
  SideModal,
  SideModalBody,
  SideModalClose,
  SideModalContent,
  SideModalDescription,
  SideModalFooter,
  SideModalHeader,
  SideModalTitle,
  SideModalTrigger,
} from "@/components/side-modal";`;

export const sideModalInstallationUiSnippet = tsxSnippet(`${sideModalImport}

export function Example() {
  return (
    <SideModal>
      <SideModalTrigger render={<Button variant="outline" />}>
        Open side modal
      </SideModalTrigger>
      <SideModalContent>
        <SideModalHeader>
          <SideModalTitle>Title</SideModalTitle>
          <SideModalDescription>Optional description.</SideModalDescription>
        </SideModalHeader>
        <SideModalBody>Panel content</SideModalBody>
        <SideModalFooter>
          <SideModalClose render={<Button variant="outline" />}>
            Cancel
          </SideModalClose>
          <SideModalClose render={<Button />}>Save</SideModalClose>
        </SideModalFooter>
      </SideModalContent>
    </SideModal>
  );
}`);

export const sideModalUsageSnippet = exampleSnippet(
  `<SideModal>
  <SideModalTrigger render={<Button variant="outline" />}>
    Open side modal
  </SideModalTrigger>
  <SideModalContent>
    <SideModalHeader>
      <SideModalTitle>Title</SideModalTitle>
      <SideModalDescription>Optional description.</SideModalDescription>
    </SideModalHeader>
    <SideModalBody>Panel content</SideModalBody>
    <SideModalFooter>
      <SideModalClose render={<Button variant="outline" />}>Cancel</SideModalClose>
      <SideModalClose render={<Button />}>Save</SideModalClose>
    </SideModalFooter>
  </SideModalContent>
</SideModal>`,
  { imports: [sideModalImport] }
);

export const sideModalControlledSnippet = tsxSnippet(`${sideModalImport}
import { useState } from "react";

export function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Open from page state
      </Button>
      <SideModal open={open} onOpenChange={setOpen}>
        <SideModalContent>
          <SideModalHeader>
            <SideModalTitle>Controlled panel</SideModalTitle>
          </SideModalHeader>
          <SideModalBody>No trigger is required.</SideModalBody>
          <SideModalFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Save</Button>
          </SideModalFooter>
        </SideModalContent>
      </SideModal>
    </>
  );
}`);

export const sideModalCreateUserSnippet = tsxSnippet(`import { useState } from "react";
${sideModalImport}
import { CreateNewUserForm } from "./create-new-user-form";

export function Example() {
  const [open, setOpen] = useState(false);

  return (
    <SideModal open={open} onOpenChange={setOpen}>
      <SideModalTrigger render={<Button variant="outline" />}>
        Create new user
      </SideModalTrigger>
      <SideModalContent>
        <SideModalHeader>
          <SideModalTitle>Create new user</SideModalTitle>
          <SideModalDescription>
            Add a new user to the system
          </SideModalDescription>
        </SideModalHeader>
        <SideModalBody>
          <CreateNewUserForm />
        </SideModalBody>
        <SideModalFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setOpen(false)}>Save</Button>
        </SideModalFooter>
      </SideModalContent>
    </SideModal>
  );
}`);

export const sideModalRealScreenSnippet = sideModalCreateUserSnippet;
