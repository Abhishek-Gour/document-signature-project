import express from "express";
import multer from "multer";
import { PDFDocument } from "pdf-lib";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

// Upload document
router.post("/upload", upload.single("file"), async (req, res) => {
  res.json({ filePath: req.file.path });
});

// Add signature
router.post("/sign", async (req, res) => {
  const { filePath, signatureText } = req.body;
  const existingPdfBytes = fs.readFileSync(filePath);
  const pdfDoc = await PDFDocument.load(existingPdfBytes);

  const pages = pdfDoc.getPages();
  const firstPage = pages[0];
  firstPage.drawText(signatureText, { x: 50, y: 50, size: 20 });

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync("signed.pdf", pdfBytes);

  res.download("signed.pdf");
});

export default router;
