import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navigation from "./components/Navigation";
import { HeroSection, SupportSection, TeamSection, ProductsSection, ResourcesSection } from "./components/sections";
export default function App() {
    return (_jsxs("div", { className: "min-h-screen", children: [_jsx(Navigation, {}), _jsxs("main", { children: [_jsx(HeroSection, {}), _jsx(SupportSection, {}), _jsx(TeamSection, {}), _jsx(ProductsSection, {}), _jsx(ResourcesSection, {})] })] }));
}
