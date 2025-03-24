export interface ChecklistItem {
    id: string;
    label: string;
    checked: boolean | undefined;
}

export interface ChecklistProps {
    items: ChecklistItem[];
    onChange?: (selectedItems: ChecklistItem[]) => void;
    className?: string;
    itemClassName?: string;
    checkboxClassName?: string;
    labelClassName?: string;
    theme: 'light' | 'dark';
}