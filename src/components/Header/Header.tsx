import classnames from "classnames";
import cl from './Header.module.scss';
import { Search } from "../Search";
import { HeaderProps } from "../../utils/models/header";

export const Header: React.FC<HeaderProps> = ({
    siteName,
    onSearchChange,
    theme,
}) => {
    return (
        <header className={classnames(cl['header'])}>
            <div className={classnames(cl['header-title'])}>
                {siteName}
            </div>
            <Search value="" onChange={onSearchChange} theme={theme} />
        </header>
    );
};
