import React, { useState } from 'react';
import cl from './Select.module.scss';
import classnames from 'classnames'
import { SelectProps } from '../../utils/models/select';
import { Icon } from '../Icon';

export const Select: React.FC<SelectProps> = ({
  options,
  value,
  placeholder = "Выберите значение",
  size = 'sm',
  onChange,
  className,
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = options.find((option) => option.value === value);

  const handleToggle = () => {
    if (!disabled) setIsOpen(!isOpen);
  };

  const handleSelect = (optionValue: string) => {
    setIsOpen(false);
    if (onChange) onChange(optionValue);
  };

  return (
    <div
      className={classnames(cl['selectWrapper'], cl[`selectWrapper-${size}`], className, {
        [cl.open]: isOpen,
        [cl.disabled]: disabled,
      })}
      onClick={handleToggle}
      role="combobox"
      aria-expanded={isOpen}
      aria-haspopup="listbox"
    >
      <div className={classnames(cl.selectedValue)}>
        {selectedOption ? selectedOption.label : placeholder}
        <Icon icon='selector-down' size="sm" className={classnames(cl['arrow'])} />
      </div>
      {isOpen && (
        <ul className={classnames(cl.options)}
          role="listbox">
          {options.map((option) => (
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
          ))}
        </ul>
      )}
    </div>
  );
};