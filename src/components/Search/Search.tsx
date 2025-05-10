import React, { useRef } from 'react';
import cl from './Search.module.scss';
import classnames from 'classnames';
import { Icon } from '../Icon';
import { SearchProps } from '../../utils/models/search';
import { useTheme } from '../../context/ThemeContext';

export const Search: React.FC<SearchProps> = ({
    placeholder = 'Введите рецепт или ингредиент...',
    value,
    onChange,
    onSearch,
}) => {
    const { theme } = useTheme();
    const inputRef = useRef<HTMLInputElement>(null);

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && onSearch) {
            onSearch(value);
        }
    };

    const handleSearchClick = () => {
        if (onSearch) {
            onSearch(value);
        }
        inputRef.current?.focus();
    };

    const handleClear = () => {
        onChange('');
        if (onSearch) {
            onSearch('');
        }
    };

    return (
        <div className={classnames(cl['searcher-container'])}>
            <div 
                className={cl['search-icon']} 
                onClick={handleSearchClick}
                role="button"
                tabIndex={0}
                aria-label="Начать поиск"
            >
                <Icon
                    icon="search"
                    color={theme === 'dark' ? 'white' : 'black'}
                />
            </div>
            
            <input
                ref={inputRef}
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={placeholder}
                className={classnames(cl['search-input'], cl[`search-input-theme-${theme}`])}
                aria-label="Поле поиска рецептов"
            />
            
            {value && (
                <div 
                    className={cl['clear-icon']} 
                    onClick={handleClear}
                    role="button"
                    tabIndex={0}
                    aria-label="Очистить поле поиска"
                >
                    <Icon
                        icon="close"
                        color={theme === 'dark' ? 'white' : 'black'}
                        size="sm"
                    />
                </div>
            )}
        </div>
    );
};