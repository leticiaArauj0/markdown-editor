import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface Document {
  id: string;
  title: string;
  content: string;
  updatedAt: string;
}

interface DocumentsContextType {
  documents: Document[];
  createDocument: () => void;
  updateDocumentTitle: (id: string, newTitle: string) => void;
  updateDocumentContent: (id: string, newContent: string) => void;
  deleteDocument: (id: string) => void;
  getDocumentById: (id: string) => Document | undefined;
}

const DocumentsContext = createContext({} as DocumentsContextType);

const STORAGE_KEY = '@markdown-editor:documents-1.0.0';

export function DocumentsProvider({ children }: { children: ReactNode }) {
  const [documents, setDocuments] = useState<Document[]>(() => {
    const storedDocuments = localStorage.getItem(STORAGE_KEY);
    
    if (storedDocuments) {
      return JSON.parse(storedDocuments);
    }
    
    return [
      { 
        id: uuidv4(), 
        title: 'Bem-vindo ao Editor', 
        content: '# Olá!\n\nEste é o seu novo editor markdown.', 
        updatedAt: new Date().toISOString() 
      }
    ];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(documents));
  }, [documents]);

  function createDocument() {
    const newDoc: Document = {
      id: uuidv4(),
      title: 'Documento sem título',
      content: '',
      updatedAt: new Date().toISOString(),
    };

    setDocuments((state) => [newDoc, ...state]); 
  }

  function updateDocumentTitle(id: string, newTitle: string) {
    setDocuments((state) =>
      state.map((doc) =>
        doc.id === id ? { ...doc, title: newTitle, updatedAt: new Date().toISOString() } : doc
      )
    );
  }
  
  function updateDocumentContent(id: string, newContent: string) {
    setDocuments((state) =>
      state.map((doc) =>
        doc.id === id ? { ...doc, content: newContent, updatedAt: new Date().toISOString() } : doc
      )
    );
  }

  function deleteDocument(id: string) {
    setDocuments((state) => state.filter((doc) => doc.id !== id));
  }

  function getDocumentById(id: string) {
    return documents.find((doc) => doc.id === id);
  }

  return (
    <DocumentsContext.Provider
      value={{
        documents,
        createDocument,
        updateDocumentTitle,
        updateDocumentContent,
        deleteDocument,
        getDocumentById
      }}
    >
      {children}
    </DocumentsContext.Provider>
  );
}

export function useDocuments() {
  return useContext(DocumentsContext);
}
