import { useState } from "react";
import { CustomDropdownProps } from "../../utils/models/dropdown";
import classnames from 'classnames';
import cl from './Dropdown.module.scss';

export const Dropdown: React.FC<CustomDropdownProps> = ({ title, options, theme }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={classnames(cl["menu"], cl[`menu-${theme}`])}>

            <div className={classnames(cl["item"])}>
                <div 
                    className={classnames(cl["link"])} 
                    onClick={toggleDropdown}
                >
                    <span>{title}</span>
                    <span className={classnames(cl["dropdown-arrow"])}>{isOpen ? '▲' : '▼'}</span>
                </div>

                <div 
                    className={classnames(cl["submenu"], { [cl["active"]]: isOpen })}
                >
                    {options.map((option, index) => (
                        <div 
                            key={index} 
                            className={classnames(cl["submenu-item"])}
                            onClick={() => option.onClick()}
                        >
                            <a href="#" className={classnames(cl["submenu-link"])}>
                                {option.text}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};