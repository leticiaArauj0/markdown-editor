import type { MouseEventHandler } from "react";
import { PlusIcon } from "@phosphor-icons/react";
import styles from "./AddButton.module.css"

interface AddButtonProps {
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export function AddButton({onClick}: AddButtonProps) {
    return (
        <button className={styles.button} onClick={onClick}>
            <PlusIcon size={20} weight="bold"/>
            Novo Documento
        </button>
    )
}