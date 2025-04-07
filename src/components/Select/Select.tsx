import React, { useState } from 'react';
import cl from './Select.module.scss';
import classnames from 'classnames';
import { SelectProps } from '../../utils/models/select';
import { Icon } from '../Icon';

export const Select: React.FC<SelectProps> = ({
  options,
  value,
  placeholder = 'Выберите значение',
  size = 'sm',
  onChange,
  className,
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const selectedOption = options.find((option) => option.value === value);

  const handleToggle = () => {
    if (!disabled) setIsOpen(!isOpen);
  };

  const handleSelect = (optionValue: string) => {
    setIsOpen(false);
    setSearch('');
    if (onChange) onChange(optionValue);
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className={classnames(cl.selectWrapper, cl[`selectWrapper-${size}`], className, {
        [cl.open]: isOpen,
        [cl.disabled]: disabled,
      })}
      role="combobox"
      aria-expanded={isOpen}
      aria-haspopup="listbox"
    >
      <div className={cl.selectedValue} onClick={handleToggle}>
        {selectedOption ? selectedOption.label : placeholder}
        <Icon icon="selector-down" size="sm" className={cl.arrow} />
      </div>

      {isOpen && (
        <div className={cl.dropdown} onClick={(e) => e.stopPropagation()}>
          <input
            type="text"
            className={cl.searchInput}
            placeholder="Поиск..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <ul className={cl.options} role="listbox">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <li
                  key={option.value}
                  className={classnames(cl.option, {
                    [cl.active]: option.value === value,
                  })}
                  onClick={() => handleSelect(option.value)}
                  role="option"
                  aria-selected={option.value === value}
                >
                  {option.label}
                </li>
              ))
            ) : (
              <li className={cl.option}>Ничего не найдено</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};
