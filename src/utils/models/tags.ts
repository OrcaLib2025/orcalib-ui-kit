export interface Tags {
    key: number;
    tag: string;
}

export interface TaglistProps {
    tags: Tags[];
    rotate: 'horizontal' | 'vertical';
    onRemove: (tag: number) => void;
    maxTags?: number;
    theme: 'light' | 'dark';
}
