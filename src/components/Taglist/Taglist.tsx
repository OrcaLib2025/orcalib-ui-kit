import React, { useState } from 'react';
import cl from './Taglist.module.scss';
import classnames from 'classnames';
import { Tooltip } from '../Tooltip';
import { TaglistProps } from '../../utils/models/tags';
import { Icon } from '../Icon';

export const Taglist: React.FC<TaglistProps> = ({
    tags,
    rotate,
    onRemove,
    maxTags,
    theme,
}) => {
    const effectiveMaxTags = rotate === 'vertical' && !maxTags ? 16 : maxTags;

    const [showAllTags, setShowAllTags] = useState(false);

    const visibleTags = showAllTags ? tags : effectiveMaxTags ? tags.slice(0, effectiveMaxTags) : tags;
    const hiddenTagsCount =
        effectiveMaxTags && tags.length > effectiveMaxTags
            ? tags.length - effectiveMaxTags
            : 0;

    return (
        <div className={classnames(cl["taglist"], cl[`taglist--${rotate}`])}>
            {visibleTags.map(({ key, tag }) => (
                <div key={key} className={cl["taglist__item"]}>
                    <Tooltip content={tag} size="sm" theme={theme}>
                        <span className={cl["taglist__text"]}>{tag}</span>
                    </Tooltip>
                    <Icon
                        icon='close-circle-fill'
                        size='sm'
                        onClick={() => onRemove(key)}
                        className={cl["taglist__remove"]}
                    />
                </div>
            ))}

            {hiddenTagsCount > 0 && !showAllTags && (
                <div
                    className={classnames(cl["taglist__item"], cl["taglist__item--hidden"])}
                    onClick={() => setShowAllTags(true)}
                    role="button"
                    tabIndex={0}
                >
                    <Tooltip content={`Показать ${hiddenTagsCount} скрытых тегов`} size="sm" theme={theme}>
                        <span className={cl["taglist__text"]}>+{hiddenTagsCount}</span>
                    </Tooltip>
                </div>
            )}

            {hiddenTagsCount > 0 && showAllTags && (
                <div
                    className={classnames(cl["taglist__item"], cl["taglist__item--hide"])}
                    onClick={() => setShowAllTags(false)}
                    role="button"
                    tabIndex={0}
                >
                    <span className={classnames(cl["taglist__text"], cl["taglist__visbile"])}>Скрыть</span>
                </div>
            )}
        </div>
    );
};