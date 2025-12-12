import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileTextIcon, PencilSimpleIcon, TrashIcon } from '@phosphor-icons/react';
import styles from './DocumentCard.module.css';

interface DocumentCardProps {
  id: string;
  title: string;
  updatedAt: string;
  onRename: (id: string, newTitle: string) => void;
  onDelete: (id: string) => void;
  startEditing?: boolean;
}

export function DocumentCard({ id, title, updatedAt, onRename, onDelete, startEditing = false }: DocumentCardProps) {
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(startEditing);
  const [tempTitle, setTempTitle] = useState(title);
  
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  function handleCardClick() {
    if (!isEditing) {
      navigate(`/doc/${id}`);
    }
  }

  function handleRenameStart(e: React.MouseEvent) {
    e.stopPropagation();
    setIsEditing(true);
  }

  function handleSave() {
    if (tempTitle.trim()) {
      onRename(id, tempTitle);
    } else {
      setTempTitle(title);
    }
    setIsEditing(false);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      setTempTitle(title);
      setIsEditing(false);
    }
  }

  function handleDelete(e: React.MouseEvent) {
    e.stopPropagation();
    if(confirm('Tem certeza que deseja excluir?')) {
        onDelete(id);
    }
  }

  return (
    <div className={styles.card} onClick={handleCardClick}>
      <div className={styles.containerIcon}>
        <FileTextIcon size={32} className={styles.icon} weight="duotone" />
      </div>

      {isEditing ? (
        <input
          ref={inputRef}
          className={styles.titleInput}
          value={tempTitle}
          onChange={(e) => setTempTitle(e.target.value)}
          onBlur={handleSave}
          onKeyDown={handleKeyDown}
          onClick={(e) => e.stopPropagation()}
        />
      ) : (
        <span className={styles.title} title={title}>{title}</span>
      )}

      <span className={styles.date}>
        Editado em {updatedAt}
      </span>
      
      <div className={styles.actions}>
        <button
          className={styles.actionButton}
          onClick={handleRenameStart}
          title="Renomear"
        >
          <PencilSimpleIcon size={20} />
        </button>
        <button
          className={styles.actionButton}
          onClick={handleDelete}
          title="Excluir"
        >
          <TrashIcon size={20} />
        </button>
      </div>
    </div>
  );
}
