import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export const DropdownMenuRoot = DropdownMenu.Root;
export const DropdownMenuTrigger = DropdownMenu.Trigger;
export const DropdownMenuContent = DropdownMenu.Content;
export const DropdownMenuItem = DropdownMenu.Item;

export function DropdownMenuComponent() {
  return (
    <DropdownMenuRoot>
      <DropdownMenuTrigger className="p-2 bg-gray-200 rounded">
        Open Menu
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-2 bg-white shadow-lg rounded">
        <DropdownMenuItem className="p-2 hover:bg-gray-100">
          Item 1
        </DropdownMenuItem>
        <DropdownMenuItem className="p-2 hover:bg-gray-100">
          Item 2
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenuRoot>
  );
}
