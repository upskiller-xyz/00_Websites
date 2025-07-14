import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navigation from "./components/Navigation";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ServicesSection from "./components/sections/ServicesSection";
import ContactSection from "./components/sections/ContactSection";
export default function App() {
    return (_jsxs("div", { className: "min-h-screen", children: [_jsx(Navigation, {}), _jsxs("main", { children: [_jsx(HeroSection, {}), _jsx(AboutSection, {}), _jsx(ServicesSection, {}), _jsx(ContactSection, {})] })] }));
}
