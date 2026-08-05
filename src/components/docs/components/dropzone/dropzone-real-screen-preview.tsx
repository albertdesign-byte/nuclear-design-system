"use client";

import { useState } from "react";

import { Dropzone } from "@/components/dropzone";

export function DropzoneRealScreenPreview() {
  const [frontFile, setFrontFile] = useState<File | null>(
    () => new File(["preview"], "front.png", { type: "image/png" })
  );
  const [backFile, setBackFile] = useState<File | null>(null);

  return (
    <div className="flex w-full max-w-md flex-col gap-[var(--space-stack-md)]">
      <Dropzone
        label="Upload front of card"
        file={frontFile}
        onFileChange={setFrontFile}
        accept=".pdf,.jpeg,.jpg,.png"
      />
      <Dropzone
        label="Upload back of card"
        file={backFile}
        onFileChange={setBackFile}
        accept=".pdf,.jpeg,.jpg,.png"
        error={backFile ? undefined : "Use file in .pdf, .jpeg or .png"}
      />
    </div>
  );
}
