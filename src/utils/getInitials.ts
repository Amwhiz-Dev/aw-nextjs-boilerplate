export function getInitials(name: string): string {
  if (!name) return ""; // handle empty or undefined
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}
