import { FileTextIcon } from "@phosphor-icons/react";
import styles from "./RecentDocCard.module.css"

interface RecentDocCardProps {
    title: string
    isActive?: boolean
    onClick: React.MouseEventHandler<HTMLDivElement>
}

export function RecentDocCard({title, isActive, onClick}: RecentDocCardProps) {
    return (
        <div className={`${styles.card} ${isActive ? styles.active : null}`} onClick={onClick}>
            <FileTextIcon size={24}/>
            <span>{title}</span>
        </div>
    )
}