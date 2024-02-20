import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

function DocxViewer({fileUrl}) {
  const docs = [
    // { uri: require("./example-files/New-Microsoft-Word-Document.docx") }, // Remote file
    { uri: require("./example-files/example.pdf") }, // Local File
  ];

  return <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />;
}

export default DocxViewer