// ── Previously migrated ───────────────────────────────────────────────────────
export { Button, buttonVariants } from './Button';
export type { ButtonProps } from './Button';

export { Badge, badgeVariants } from './Badge';
export type { BadgeProps } from './Badge';

export { Avatar, AvatarImage, AvatarFallback } from './Avatar';

export { Input } from './Input';
export type { InputProps } from './Input';

export { Label } from './Label';

export { Separator } from './Separator';

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from './Card';

// ── Group A — Simple display ──────────────────────────────────────────────────
export { Skeleton } from './Skeleton';

export { Progress } from './Progress';

export { Alert, AlertTitle, AlertDescription } from './Alert';

export { AspectRatio } from './AspectRatio';

export { Collapsible, CollapsibleTrigger, CollapsibleContent } from './Collapsible';

export { ScrollArea, ScrollBar } from './ScrollArea';

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './Accordion';

export { Tabs, TabsList, TabsTrigger, TabsContent } from './Tabs';

// ── Group B — Form controls ───────────────────────────────────────────────────
export { Textarea } from './Textarea';
export type { TextareaProps } from './Textarea';

export { Checkbox } from './Checkbox';

export { RadioGroup, RadioGroupItem } from './RadioGroup';

export { Switch } from './Switch';

export { Slider } from './Slider';

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
} from './Select';

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from './InputOTP';

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
} from './Form';

// ── Group C — Overlays ────────────────────────────────────────────────────────
export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from './Tooltip';

export { Popover, PopoverTrigger, PopoverContent } from './Popover';

export { HoverCard, HoverCardTrigger, HoverCardContent } from './HoverCard';

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from './Dialog';

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from './AlertDialog';

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
} from './Sheet';

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
} from './Drawer';

// ── Group D — Navigation ──────────────────────────────────────────────────────
export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
} from './DropdownMenu';

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
} from './ContextMenu';

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
} from './Menubar';

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
} from './NavigationMenu';

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from './Breadcrumb';

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from './Pagination';

// ── Group E — Toggle ──────────────────────────────────────────────────────────
export { Toggle, toggleVariants } from './Toggle';

export { ToggleGroup, ToggleGroupItem } from './ToggleGroup';

// ── Group F — Complex / third-party ──────────────────────────────────────────
export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from './Table';

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from './Carousel';

export { ResizablePanelGroup, ResizablePanel, ResizableHandle } from './Resizable';

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
} from './Command';

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
} from './Toast';

export { Toaster } from './Toaster';

export { SonnerToaster } from './Sonner';

export {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
} from './Chart';
