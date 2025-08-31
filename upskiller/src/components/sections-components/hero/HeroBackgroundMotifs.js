import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useImperativeHandle, forwardRef } from 'react';
import BackgroundMotif from './BackgroundMotif';
const HeroBackgroundMotifs = forwardRef((props, ref) => {
    const staticMotifRef = useRef(null);
    const movingMotifRef = useRef(null);
    useImperativeHandle(ref, () => ({
        staticMotifRef,
        movingMotifRef
    }));
    return (_jsxs("div", { className: "absolute inset-0 pointer-events-none", children: [_jsx(BackgroundMotif, { motifRef: staticMotifRef }), _jsx(BackgroundMotif, { motifRef: movingMotifRef })] }));
});
HeroBackgroundMotifs.displayName = 'HeroBackgroundMotifs';
export default HeroBackgroundMotifs;
