import { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { CheckCircleIcon, ListIcon } from '@phosphor-icons/react';
import { useDocuments } from '@/context/DocumentsContext';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { ToogleTheme } from '@/components/ToogleTheme/ToogleTheme';
import { Toolbar } from '@/components/Toolbar/Toolbar';
import styles from './styles.module.css';

export function Editor() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getDocumentById, updateDocumentContent, updateDocumentTitle } = useDocuments();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const document = getDocumentById(id || '');

  useEffect(() => {
    if (!document) {
      navigate('/');
    }
  }, [document, navigate]);

  if (!document) return null;

  function handleFormat(prefix: string, suffix: string = '') {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const oldText = document?.content || '';

    const before = oldText.substring(0, start);
    const selected = oldText.substring(start, end);
    const after = oldText.substring(end);

    const newText = `${before}${prefix}${selected}${suffix}${after}`;

    updateDocumentContent(document!.id, newText);

    setTimeout(() => {
      textarea.focus();
      if (selected.length > 0) {
        textarea.setSelectionRange(start, end + prefix.length + suffix.length);
      } else {
        textarea.setSelectionRange(start + prefix.length, start + prefix.length);
      }
    }, 0);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.ctrlKey || e.metaKey) {
      
      switch(e.key.toLowerCase()) {
        case 'b':
          e.preventDefault();
          handleFormat('**', '**');
          break;
        
        case 'i':
          e.preventDefault();
          handleFormat('*', '*');
          break;

        case 'k':
          e.preventDefault();
          handleFormat('[texto](', ')');
          break;
        
        case 'j':
            e.preventDefault();
            handleFormat('`', '`');
            break;

        case 'h':
          e.preventDefault();
          handleFormat('# ', '');
          break;

        case 'u':
          e.preventDefault();
          handleFormat('- ', '');
          break;
      }
    }
  }

  function handleOpenSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <div className={styles.container}>
        <div className={styles.editorContainer}>
          <header className={styles.header}>
            <div className={styles.titleContainer}>
              {isSidebarOpen ? <Sidebar onClick={handleOpenSidebar}/> : <ListIcon onClick={handleOpenSidebar} size={32} className={styles.sidebarIcon}/>}
              <input
                className={styles.titleInput}
                value={document.title}
                onChange={(e) => updateDocumentTitle(document.id, e.target.value)}
                placeholder="Documento sem título"
              />
            </div>
        
            <div className={styles.status}>
              <CheckCircleIcon size={20} color="#04D361" />
              <span>Salvo automaticamente</span>
              <ToogleTheme/>
            </div>
          </header>

          <main className={styles.splitView}>
            <section className={styles.inputArea}>
              <Toolbar onFormat={handleFormat}/>

              <textarea
                ref={textareaRef}
                onKeyDown={handleKeyDown}
                className={styles.textarea}
                value={document.content}
                onChange={(e) => updateDocumentContent(document.id, e.target.value)}
                placeholder="Comece a escrever seu markdown aqui..."
                autoFocus
              />
            </section>
            <section className={styles.previewArea}>
              <div className={styles.markdownBody}>
                <ReactMarkdown>
                  {document.content || '*Nada para pré-visualizar...*'}
                </ReactMarkdown>
              </div>
            </section>
          </main>
        </div>
    </div>
  );
}
