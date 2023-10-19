import { MenuOption } from "../types/MenuOption";

export const menuItems: MenuOption[] = [
    {
        name: "Animation 101",
        icon: "rocket-outline",
        component: "Animation101Screen"
    },
    {
        name: "Animation (Draggable View)",
        icon: "move-outline",
        component: "DraggableBoxScreen"
    },
    {
        name: "Switchs",
        icon: "toggle-outline",
        component: "SwitchScreen"
    },
    {
        name: "Alerts",
        icon: "alert-circle-outline",
        component: "AlertScreen"
    },
    {
        name: "Text Input",
        icon: "create-outline",
        component: "TextInputScreen"
    },
    {
        name: "Forms",
        icon: "cube-outline",
        component: "FormsScreen"
    },
    {
        name: "Pull to refresh",
        icon: "refresh-circle-outline",
        component: "PullToRefreshScreen"
    },
    {
        name: "Section List",
        icon: "list-outline",
        component: "SectionListScreen"
    },
    {
        name: "Modal",
        icon: "square-outline",
        component: "ModalScreen"
    },
    {
        name: "Infinity Scroll",
        icon: "infinite-outline",
        component: "InfinityScrollScreen"
    },
    {
        name: "Slide Presentation",
        icon: "albums-outline",
        component: "SlideScreen"
    }
];