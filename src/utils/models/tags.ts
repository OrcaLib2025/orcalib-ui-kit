export interface TaglistProps {
    tags: string[];
    rotate: 'horizontal' | 'vertical';
    onRemove: (tag: string) => void;
    maxTags?: number;
}
