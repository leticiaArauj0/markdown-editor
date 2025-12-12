import { PlusIcon } from "@phosphor-icons/react";
import { useDocuments } from '@/context/DocumentsContext';
import { DocumentCard } from "@/components/DocumentCard/DocumentCard";
import styles from './styles.module.css';

export function Home() {
  const { documents, createDocument, deleteDocument, updateDocumentTitle } = useDocuments();

  function handleCreate() {
    createDocument();
  }

  return(
    <div className={styles.container}>
      <main>
        <div className={styles.containerTop}>
          <h1>Meus Documentos</h1>
          
          <button className={styles.button} onClick={handleCreate}>
            <PlusIcon size={20} weight="bold"/>
            Novo Documento
          </button>
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
