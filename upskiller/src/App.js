import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navigation from "./components/Navigation";
import HeroSection from "./components/sections/HeroSection";
import SupportSection from "./components/sections/SupportSection";
import TeamSection from "./components/sections/TeamSection";
import ProductsSection from "./components/sections/ProductsSection";
import ResourcesSection from "./components/sections/ResourcesSection";
export default function App() {
    return (_jsxs("div", { className: "min-h-screen", children: [_jsx(Navigation, {}), _jsxs("main", { children: [_jsx(HeroSection, {}), _jsx(SupportSection, {}), _jsx(TeamSection, {}), _jsx(ProductsSection, {}), _jsx(ResourcesSection, {})] })] }));
}
