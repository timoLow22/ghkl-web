type ClassValue = string | false | null | undefined;

/**
 * Merges multiple class name inputs into a single space-separated string.
 *
 * Falsy values (`false`, `null`, `undefined`, `""`) are omitted so conditional
 * classes can be passed without leaving stray tokens in the DOM.
 *
 * @example
 * // Base styles + optional override prop
 * mergeClassNames("px-4 py-2", className);
 *
 * @example
 * // Conditional variant
 * mergeClassNames(
 *   "rounded-md text-sm",
 *   isActive && "bg-primary text-on-primary",
 * );
 *
 * @param classes - Class strings or conditional values to merge
 * @returns A single trimmed class string
 *
 * @remarks
 * This is a lightweight combiner. If component overrides start conflicting with
 * default Tailwind utilities (e.g. `px-4` vs `px-6`), consider adding
 * `clsx` + `tailwind-merge` and delegating to them here.
 */
export function mergeClassNames(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
