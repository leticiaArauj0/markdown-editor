import { useTheme } from "@/hooks/useTheme";
import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import styles from "./ToogleTheme.module.css";

export function ToogleTheme() {
    const { theme, toggleTheme } = useTheme();

    return(
        <button onClick={toggleTheme} className={styles.themeButton}>
            {theme === 'dark' ? 
            <><SunIcon size={24} /> Claro</> : 
            <><MoonIcon size={24} /> Escuro</>
            }
        </button>
    )
}