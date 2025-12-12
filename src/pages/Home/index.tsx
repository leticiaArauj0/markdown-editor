import { useDocuments } from '@/context/DocumentsContext';
import { DocumentCard } from "@/components/DocumentCard/DocumentCard";
import { ToogleTheme } from "@/components/ToogleTheme/ToogleTheme";
import { AddButton } from "@/components/AddButton/AddButton";
import styles from './styles.module.css';
import { useState } from 'react';

export function Home() {
  const { documents, createDocument, deleteDocument, updateDocumentTitle } = useDocuments();
  const [newDocId, setNewDocId] = useState<string | null>(null);

  function handleCreate() {
    const createdId = createDocument();
    setNewDocId(createdId);
  }

  return(
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.toogle}>
          <ToogleTheme/>
        </div>
        <div className={styles.containerTop}>
          <h1>Meus Documentos</h1>
          
          <AddButton onClick={handleCreate}/>
        </div>

        <div className={styles.containerDocumentCards}>
          {documents.length > 0 ? (
            documents.map((doc) => (
              <DocumentCard 
                key={doc.id}
                id={doc.id} 
                title={doc.title} 
                updatedAt={new Date(doc.updatedAt).toLocaleDateString('pt-BR')} 
                onDelete={deleteDocument} 
                onRename={updateDocumentTitle} 
                startEditing={newDocId ? true : false}
              />
            ))
          ) : (
            <p className={styles.emptyState}>
              Nenhum documento encontrado. Crie o primeiro!
            </p>
          )}
        </div>
      </main>
    </div>
  )
}
