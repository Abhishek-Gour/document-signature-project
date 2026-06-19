import React, { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

export default function SignaturePad({ onSave }) {
  const sigCanvas = useRef();

  const saveSignature = () => {
    const data = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
    onSave(data);
  };

  return (
    <div className="p-4 border rounded">
      <SignatureCanvas ref={sigCanvas} penColor="black" canvasProps={{width:500, height:200}} />
      <button onClick={saveSignature} className="bg-blue-500 text-white px-4 py-2 mt-2">Save</button>
    </div>
  );
}
