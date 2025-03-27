import React from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';
import classnames from 'classnames';
import cl from './ThemeSwitcher.module.scss';
import { ThemeSwitcherProps } from '../../utils/models/themeswitcher';

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  toggleTheme,
  theme,
}) => {
  return (
    <div
      className={classnames(cl['theme-switcher'], cl[theme])}
      onClick={toggleTheme}
      role="switch"
      aria-checked={theme === 'dark'}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          toggleTheme();
        }
      }}
    >
      <div className={cl['switch-slider']}>
        {theme === 'light' ? <BsSun size={20} /> : <BsMoon size={20} />}
      </div>
    </div>
  );
};