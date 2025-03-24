import React, { useState } from 'react';
import cl from './Checklist.module.scss';
import { ChecklistItem, ChecklistProps } from '@models/checklist';

export const Checklist: React.FC<ChecklistProps> = ({
    items,
    onChange,
    className,
    itemClassName,
    checkboxClassName,
    labelClassName,
}) => {
    const [checklistItems, setChecklistItems] = useState<ChecklistItem[]>(items);

    const handleCheckboxChange = (id: string) => {
        const updatedItems = checklistItems.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item
        );
        setChecklistItems(updatedItems);

        if (onChange) {
            const selectedItems = updatedItems.filter((item) => item.checked);
            onChange(selectedItems);
        }
    };

    return (
        <div className={`${cl.checklistContainer} ${className || ''}`}>
            {checklistItems.map((item) => (
                <div key={item.id} className={`${cl.checklistItem} ${itemClassName || ''}`}>
                    <input
                        type="checkbox"
                        id={item.id}
                        checked={item.checked || false}
                        onChange={() => handleCheckboxChange(item.id)}
                        className={`${cl.checkbox} ${checkboxClassName || ''}`}
                    />
                    <label htmlFor={item.id} className={`${cl.label} ${labelClassName || ''}`}>
                        {item.label}
                    </label>
                </div>
            ))}
        </div>
    );
};