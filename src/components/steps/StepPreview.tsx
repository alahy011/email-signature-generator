import React, { useRef } from "react";
import Image from "next/image";
import { FormDataType } from "@/types/formData";


type Props = {
  formData: FormDataType;
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
};

export default function StepPreview({ formData }: Props) {
  const {
    name,
    title,
    email,
    phone,
    university,
    studentId,
    github,
    linkedin,
    photoUrl,
  } = formData;

  const previewRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    if (previewRef.current) {
      const html = previewRef.current.innerHTML;
      const blob = new Blob([html], { type: "text/html" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "email-signature.html";
      link.click();
    }
  };

  const handleCopy = async () => {
    if (previewRef.current) {
      const htmlContent = previewRef.current.innerHTML;

      await navigator.clipboard.write([
        new ClipboardItem({
          "text/html": new Blob([htmlContent], {type: "text/html"}),
        }),
      ]);
      alert("Signature copied to clipboard!");
    }
  };

  return (
    <div className="space-y-4">
      <div ref={previewRef} className="border border-gray-300 rounded-lg p-4 bg-white">
        <table style={{ fontFamily: "Arial, sans-serif", fontSize: "14px", color: "#333" }}>
          <tbody>
            <tr>
              {photoUrl && (
                <td style={{ verticalAlign: "top", paddingRight: "15px" }}>
                  <Image 
                    src={formData.photoUrl}
                    alt="preview"
                    width={80}
                    height={80}
                    className="rounded-full mt-4 object-cover border"
                  />
                </td>
              )}
              <td style={{ verticalAlign: "top" }}>
                <p style={{ margin: "0", fontSize: "16px", fontWeight: "bold" }}>{name}</p>
                <p style={{ margin: "0" }}>{title}</p>
                <p style={{ margin: "0" }}>
                  🎓 {university}<br />
                  <strong>Student ID:</strong> {studentId}
                </p>
                <p style={{ margin: "0" }}>
                  📧 <a href={`mailto:${email}`}>{email}</a><br />
                  📱 {phone}<br />
                  🌐 <a href={github} target="_blank">GitHub</a> |{" "}
                  <a href={linkedin} target="_blank">LinkedIn</a>
                </p>
              </td>
            </tr>
          </tbody>
        </table>

        <hr style={{ margin: "10px 0", borderTop: "1px solid #ccc" }} />

        <div style={{ fontSize: "12px", color: "#555" }}>
          <p style={{ margin: "0" }}>
            <strong>Disclaimer:</strong> This email may contain confidential or IT-related information. If you are not the
            intended recipient, please delete it and notify the sender. Do not copy, distribute, or rely on its contents.
            This message represents the views of the sender and may not reflect those of any affiliated institution.
            Personal data must be handled in accordance with the Australian Privacy Act 1988.
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={handleDownload}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
        >
          ⬇️ Download HTML
        </button>
        <button
          onClick={handleCopy}
          className="bg-gray-200 text-black px-4 py-2 rounded hover:bg-gray-300 text-sm"
        >
          📋 Copy to Clipboard
        </button>
      </div>
    </div>
  );
}
