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
    }
];