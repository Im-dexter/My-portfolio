import WindowWrapper from "#hoc/WindowWrapper.jsx";
import WindowControls from "#components/WindowControls.jsx";
import { Download } from "lucide-react";
import { Document, Page, pdfjs } from 'react-pdf';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const Resume = () => {
  return (
  <>
 <div className="window-header flex items-center justify-between px-4 py-2 border-b">

  {/* LEFT */}
  <div className="flex items-center gap-3">
    <WindowControls target="resume" />
  </div>

  {/* CENTER */}
  <div className="absolute left-1/2 -translate-x-1/2">
    <h2 className="font-semibold">Resume.pdf</h2>
  </div>

  {/* RIGHT */}
  <div>
    <a
      href="/files/resume.pdf"
      download
      className="cursor-pointer"
      title="Download Resume"
    >
      <Download className="icon" />
    </a>
  </div>

</div>
  <Document file="files/resume.pdf">
        <Page 
        pageNumber={1}
        renderTextLayer
        renderAnnotationLayer 
        />
      </Document>
  </>
  );
};

const ResumeWindow=WindowWrapper(Resume,"resume");
export default ResumeWindow