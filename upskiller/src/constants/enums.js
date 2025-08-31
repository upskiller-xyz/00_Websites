// src/constants/enums.ts
export var EventType;
(function (EventType) {
    EventType["SCROLL"] = "scroll";
    EventType["RESIZE"] = "resize";
    EventType["CLICK"] = "click";
    EventType["MOUSEOVER"] = "mouseover";
    EventType["MOUSEOUT"] = "mouseout";
})(EventType || (EventType = {}));
export var ScrollBehavior;
(function (ScrollBehavior) {
    ScrollBehavior["SMOOTH"] = "smooth";
    ScrollBehavior["AUTO"] = "auto";
    ScrollBehavior["INSTANT"] = "instant";
})(ScrollBehavior || (ScrollBehavior = {}));
export var SectionId;
(function (SectionId) {
    SectionId["HOME"] = "home";
    SectionId["TEAM"] = "team";
    SectionId["PRODUCTS"] = "products";
    SectionId["RESOURCES"] = "resources";
})(SectionId || (SectionId = {}));
export var AnimationTiming;
(function (AnimationTiming) {
    AnimationTiming[AnimationTiming["FAST"] = 200] = "FAST";
    AnimationTiming[AnimationTiming["NORMAL"] = 300] = "NORMAL";
    AnimationTiming[AnimationTiming["SLOW"] = 700] = "SLOW";
})(AnimationTiming || (AnimationTiming = {}));
export var AnimationProgressThreshold;
(function (AnimationProgressThreshold) {
    AnimationProgressThreshold[AnimationProgressThreshold["HEADING"] = 0.15] = "HEADING";
    AnimationProgressThreshold[AnimationProgressThreshold["FIRST_PARAGRAPH"] = 0.35] = "FIRST_PARAGRAPH";
    AnimationProgressThreshold[AnimationProgressThreshold["SECOND_PARAGRAPH"] = 0.55] = "SECOND_PARAGRAPH";
    AnimationProgressThreshold[AnimationProgressThreshold["THIRD_PARAGRAPH"] = 0.75] = "THIRD_PARAGRAPH";
})(AnimationProgressThreshold || (AnimationProgressThreshold = {}));
export var ProductStatus;
(function (ProductStatus) {
    ProductStatus["AVAILABLE"] = "available";
    ProductStatus["UPCOMING"] = "upcoming";
})(ProductStatus || (ProductStatus = {}));
