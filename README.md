# 📄 Document Signature Web App

A secure, full-stack web application built with the **MERN stack (MongoDB, Express.js, React.js, Node.js)** and **Tailwind CSS**.  
This app enables users to **upload documents, place digital signatures, share signing links, and generate legally traceable signed PDFs** — similar to platforms like **DocuSign** and **Adobe Sign**.

---

## 🚀 Features
- 🔐 **Secure Authentication** (JWT-based login & role management)
- 📤 **Document Upload** (PDF, DOCX, Images)
- ✍️ **Digital Signature Placement** (drag-and-drop signature fields)
- 🔗 **Shareable Signing Links** (unique, time-limited URLs)
- 📑 **Legally Traceable Signed PDFs** (with audit trail)
- 👥 **Multi-user Support** (signer identity verification)
- 📊 **Dashboard** (track document status, ownership, and signature history)
- 🎨 **Responsive UI** with Tailwind CSS

---

## 🛠️ Tech Stack
| Layer        | Technology |
|--------------|------------|
| Frontend     | React.js, Tailwind CSS |
| Backend      | Node.js, Express.js |
| Database     | MongoDB (Mongoose ORM) |
| Authentication | JWT, bcrypt |
| File Storage | GridFS / AWS S3 (configurable) |
| PDF Handling | pdf-lib / pdfkit |
| Deployment   | Vercel / Heroku / Render |

---

## 📂 Project Structure


document-signature-app/
│── backend/              # Express.js API
│   ├── models/           # MongoDB schemas
│   ├── routes/           # API routes
│   ├── controllers/      # Business logic
│   └── utils/            # Helpers (auth, file handling)
│
│── frontend/             # React.js + Tailwind CSS
│   ├── components/       # Reusable UI components
│   ├── pages/            # App pages (Dashboard, Upload, Sign)
│   ├── hooks/            # Custom React hooks
│   └── services/         # API calls
│
│── README.md             # Documentation
│── package.json          # Dependencies


## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/document-signature-app.git
cd document-signature-app