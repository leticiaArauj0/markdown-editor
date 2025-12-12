import { 
  TextBIcon, 
  TextItalicIcon, 
  TextHIcon, 
  ListBulletsIcon, 
  CodeIcon, 
  LinkIcon 
} from '@phosphor-icons/react';
import styles from './Toolbar.module.css';

interface ToolbarProps {
  onFormat: (prefix: string, suffix?: string) => void;
}

export function Toolbar({ onFormat }: ToolbarProps) {

return (
    <div className={styles.toolbar}>
      <button 
        className={styles.toolButton} 
        onClick={() => onFormat('**', '**')}
        title="Negrito (Ctrl+B)"
      >
        <TextBIcon size={20} />
      </button>

      <button 
        className={styles.toolButton} 
        onClick={() => onFormat('*', '*')}
        title="Itálico (Ctrl+I)"
      >
        <TextItalicIcon size={20} />
      </button>

      <div className={styles.divider} />

      <button 
        className={styles.toolButton} 
        onClick={() => onFormat('# ', '')}
        title="Título (Ctrl+H)"
      >
        <TextHIcon size={20} />
      </button>

      <button 
        className={styles.toolButton} 
        onClick={() => onFormat('- ', '')}
        title="Lista (Ctrl+U)"
      >
        <ListBulletsIcon size={20} />
      </button>

      <div className={styles.divider} />

      <button 
        className={styles.toolButton} 
        onClick={() => onFormat('`', '`')}
        title="Código Inline (Ctrl+J)"
      >
        <CodeIcon size={20} />
      </button>
      
      <button 
        className={styles.toolButton} 
        onClick={() => onFormat('[texto](', ')')}
        title="Link (Ctrl+K)"
      >
        <LinkIcon size={20} />
      </button>
    </div>
  );
}
