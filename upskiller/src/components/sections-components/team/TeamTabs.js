import { jsx as _jsx } from "react/jsx-runtime";
const TeamTabs = ({ tabs, activeTab, onTabChange }) => (_jsx("div", { className: "team-tabs", children: tabs.map((tab) => (_jsx("button", { onClick: () => onTabChange(tab.id), className: `team-tab ${activeTab === tab.id ? 'team-tab-active' : 'team-tab-inactive'}`, children: tab.label }, tab.id))) }));
export default TeamTabs;
