// constants/machineCodeItems.ts
export interface MachineCodeItem {
  id: number;
  name: string;
  description?: string;
}

export const machineCodeItems: MachineCodeItem[] = [
  { id: 1, name: "Slider", description: "Interactive range slider" },
  { id: 2, name: "Calendar", description: "Date picker component" },
  {
    id: 3,
    name: "Select from Drawer",
    description: "Drawer with options list",
  },
  { id: 4, name: "Buttons", description: "Various buttons and actions" },
  { id: 5, name: "Other Things", description: "Miscellaneous components" },
];
