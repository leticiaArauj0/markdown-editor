import { useTheme } from '../../hooks/useThema';
import { SunIcon, MoonIcon } from '@phosphor-icons/react';
import styles from './Sidebar.module.css';

export function Sidebar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <aside className={styles.sidebar}>
      <button onClick={toggleTheme} className={styles.themeButton}>
        {theme === 'dark' ? 
          <><SunIcon size={24} /> Claro</> : 
          <><MoonIcon size={24} /> Escuro</>
        }
      </button>
    </aside>
  );
}
