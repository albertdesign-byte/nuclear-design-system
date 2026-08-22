"use client";

import { useState } from "react";

import { Dropzone } from "@/components/dropzone";

const FILE_ACCEPT = ".pdf,.jpeg,.jpg,.png";
const FILE_MAX_SIZE = 10 * 1024 * 1024;

const uploadedDocument = new File(["preview"], "prescription.pdf", {
  type: "application/pdf",
});

export function DropzoneEmptyPreview() {
  const [file, setFile] = useState<File | null>(null);

  return (
    <Dropzone
      label="Upload prescription (PDF or image)"
      file={file}
      onFileChange={setFile}
      accept={FILE_ACCEPT}
      maxSize={FILE_MAX_SIZE}
    />
  );
}

export function DropzoneDraggingPreview() {
  return (
    <Dropzone
      label="Upload prescription (PDF or image)"
      accept={FILE_ACCEPT}
      maxSize={FILE_MAX_SIZE}
      dragging
    />
  );
}

export function DropzoneLoadingPreview() {
  return (
    <Dropzone
      label="Upload prescription (PDF or image)"
      accept={FILE_ACCEPT}
      maxSize={FILE_MAX_SIZE}
      loading
    />
  );
}

export function DropzoneSuccessPreview() {
  const [file, setFile] = useState<File | null>(uploadedDocument);

  return (
    <Dropzone
      label="Upload prescription"
      file={file}
      onFileChange={setFile}
      accept={FILE_ACCEPT}
      maxSize={FILE_MAX_SIZE}
    />
  );
}

export function DropzoneErrorPreview() {
  const [file, setFile] = useState<File | null>(null);

  return (
    <Dropzone
      label="Upload insurance card"
      file={file}
      onFileChange={setFile}
      accept={FILE_ACCEPT}
      maxSize={FILE_MAX_SIZE}
      error="Use file in .pdf, .jpeg or .png"
    />
  );
}

export function DropzoneConstraintsPreview() {
  const [file, setFile] = useState<File | null>(null);

  return (
    <Dropzone
      label="Upload front of card"
      file={file}
      onFileChange={setFile}
      accept={FILE_ACCEPT}
      maxSize={FILE_MAX_SIZE}
    />
  );
}
