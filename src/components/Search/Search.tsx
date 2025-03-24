import React from 'react';
import cl from './Search.module.scss';
import classnames from 'classnames';
import { Icon } from '../Icon';
import { SearchProps } from '@models/search';

export const Search: React.FC<SearchProps> = ({
    placeholder = 'Введите рецепт или ингредиент...',
    value,
    onChange,
    theme,
}) => {
    return (
        <div className={classnames(cl['searcher-container'])}>
            <Icon icon="search" />
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className={classnames(cl['search-input'], cl[`search-input-theme-${theme}`])}
            />
        </div>
    );
};