// eslint-disable-next-line @typescript-eslint/no-unused-vars
const iconNames = [
    "add-image",
    "add-list",
    "add-photo",
    "add-uder",
    "arrow-chevron-down",
    "arrow-chevron-left",
    "arrow-chevron-right",
    "arrow-chevron-up",
    "arrow-reverse",
    "arrow-to-down-bold",
    "arrow-to-left-bold",
    "arrow-to-right-bold",
    "arrow-to-top-bold",
    "attachment",
    "check-circle-fill",
    "check-circle-outline",
    "check",
    "close-bold",
    "close-circle-fill",
    "close-circle",
    "close",
    "copy",
    "desktop",
    "dish-plate",
    "dots",
    "edit",
    "email-success",
    "email",
    "eye-closed-filled",
    "eye-closed",
    "eye-open-filled",
    "eye-open",
    "food-bread-svgrepo-com",
    "food-cheese-svgrepo-com",
    "food-dinner-fork-spoon-knife-svgrepo-com",
    "food-dish-hand-serve",
    "food-dish",
    "food-fried-egg",
    "food-hamburger",
    "food-hot-dog",
    "food-knife-and-fork",
    "food-meat-beef-stake-svgrepo-com",
    "food-meat-chicken-svgrepo-com",
    "food-pizza-slice-svgrepo-com",
    "food-taco-svgrepo-com",
    "food-wine-and-glass",
    "food",
    "history",
    "home",
    "image",
    "info-filled",
    "info",
    "key",
    "libro-icon",
    "lock",
    "logout",
    "notification-new",
    "notification",
    "phone",
    "pin",
    "plus",
    "search",
    "selector-down",
    "selector-up",
    "settings",
    "share",
    "sort-asc",
    "sort-desc",
    "spinner-cringe-base",
    "spinner-for-normies",
    "tablet",
    "trash-filled",
    "trash",
    "unlink",
    "upload-picture",
    "user-check",
    "user-follow",
    "user",
    "warning-circle-filled",
    "warning-circle",
    "warning-hex-filled",
    "warning-hex",
    "warning-triangle-filled",
    "warning-triangle"
] as const;

export type IconName = typeof iconNames[number];

export interface IconProps {
    icon: IconName;
    size?: 'sm' | 'md' | 'lg';
    color?: string;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
}