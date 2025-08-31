import { jsx as _jsx } from "react/jsx-runtime";
import { SharedButton } from '../../../../shared/components/SharedButton';
const ResourceButton = ({ button, appearance = {}, config = {} }) => {
    const { text, disabled = false, show = true, onClick } = button;
    if (!show)
        return null;
    return (_jsx(SharedButton, { appearance: {
            variant: appearance.variant || 'contact',
            className: appearance.className || 'w-full',
            size: appearance.size
        }, behavior: {
            onClick,
            disabled
        }, children: text }));
};
export default ResourceButton;
