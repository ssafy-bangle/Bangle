import React, { useState } from 'react';
import Epub from 'epubjs';

function EpubViewer() {
  const [book, setBook] = useState(null);
  const [currentCfi, setCurrentCfi] = useState(null);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = async () => {
      const book = Epub(reader.result);
      await book.ready;
      setBook(book);
      setCurrentCfi(book.toc[0].href);
    };

    reader.readAsArrayBuffer(file);
  };

  const handleNavigation = (cfi) => {
    setCurrentCfi(cfi);
  };

  return (
    <div>
      <h1>EPUB Viewer</h1>
      <input type="file" accept=".epub" onChange={handleFileUpload} />
      {book && (
        <div>
          <div>
            <button onClick={() => handleNavigation(book.prevPage())}>Previous Page</button>
            <button onClick={() => handleNavigation(book.nextPage())}>Next Page</button>
          </div>
          <div>
            <button onClick={() => handleNavigation(book.prevChapter())}>Previous Chapter</button>
            <button onClick={() => handleNavigation(book.nextChapter())}>Next Chapter</button>
          </div>
        </div>
      )}
      {currentCfi && book && (
        <iframe
          title="epub-viewer"
          src={`viewer.html?bookPath=${encodeURIComponent(book.bookPath)}&cfi=${encodeURIComponent(currentCfi)}`}
        />
      )}
    </div>
  );
}

export default EpubViewer;
