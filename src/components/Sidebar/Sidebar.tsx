import styles from '@/components/Sidebar/Sidebar.module.css';
import { AddButton } from '../AddButton/AddButton';
import { FileMdIcon } from '@phosphor-icons/react';
import { useNavigate, useParams } from 'react-router-dom';
import { RecentDocCard } from '../RecentDocCard/RecentDocCard';
import { useDocuments } from '@/context/DocumentsContext';

export function Sidebar() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { documents, createDocument } = useDocuments();

  const sortedDocuments = [...documents]
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
    .slice(0, 5);

  function handleCreateNew() {
    const newId = createDocument();
    navigate(`/doc/${newId}`);
  }

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo} onClick={() => {navigate('/')}}>
        <FileMdIcon size={40} />
        <h1>EditorMarkdown</h1>
      </div>
      
      <AddButton onClick={handleCreateNew}/>

      <div>
        <span className={styles.subtitle}>Documentos recentes</span>
        <div className={styles.recentList}>
            {sortedDocuments.map(doc => (
                <RecentDocCard 
                    key={doc.id} 
                    title={doc.title}
                    onClick={() => navigate(`/doc/${doc.id}`)}
                    isActive={doc.id === id}
                />
            ))}
        </div>
      </div>
    </aside>
  );
}
