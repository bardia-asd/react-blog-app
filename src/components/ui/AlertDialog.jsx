import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

// Root
function AlertDialog(props) {
    return <AlertDialogPrimitive.Root {...props} />;
}

// Trigger
function AlertDialogTrigger(props) {
    return <AlertDialogPrimitive.Trigger {...props} />;
}

// Portal
function AlertDialogPortal(props) {
    return <AlertDialogPrimitive.Portal {...props} />;
}

// Overlay
function AlertDialogOverlay({ className = "", ...props }) {
    return (
        <AlertDialogPrimitive.Overlay
            className={
                "fixed inset-0 bg-gray-950/30 z-40 data-[state=open]:animate-overlayShow " +
                className
            }
            {...props}
        />
    );
}

// Content
function AlertDialogContent({ className = "", ...props }) {
    return (
        <AlertDialogPrimitive.Content
            className={
                "fixed left-1/2 top-1/2 z-50 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-6 shadow-lg focus:outline-none data-[state=open]:animate-contentShow " +
                className
            }
            {...props}
        />
    );
}

// Title
function AlertDialogTitle({ className = "", ...props }) {
    return (
        <AlertDialogPrimitive.Title
            className={"text-lg font-medium " + className}
            {...props}
        />
    );
}

// Description
function AlertDialogDescription({ className = "", ...props }) {
    return (
        <AlertDialogPrimitive.Description
            className={"mt-3 mb-5 text-gray-500 leading-normal " + className}
            {...props}
        />
    );
}

// Cancel
function AlertDialogCancel({ className = "", ...props }) {
    return (
        <AlertDialogPrimitive.Cancel
            className={
                "inline-flex h-9 items-center justify-center rounded-md border border-slate-200 bg-white px-4 font-medium hover:bg-gray-100 transition-colors duration-150 cursor-pointer " +
                className
            }
            {...props}
        />
    );
}

// Action
function AlertDialogAction({ className = "", ...props }) {
    return (
        <AlertDialogPrimitive.Action
            className={
                "inline-flex h-9 items-center justify-center rounded-md bg-red-600 px-4 font-medium text-white hover:bg-red-700 transition-colors duration-150 cursor-pointer " +
                className
            }
            {...props}
        />
    );
}

// Export all components
export {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogPortal,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogCancel,
    AlertDialogAction,
};
