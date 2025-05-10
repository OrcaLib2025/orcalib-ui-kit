export interface SearchProps {
    value: string;
    onChange: (value: string) => void;
    onSearch?: (query: string) => void;
    placeholder?: string;
}