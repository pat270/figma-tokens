import { Properties } from "@/constants/Properties";

export function convertToOrderObj(value: Record<string, string>) {
  return Object.keys(Properties).reduce<Record<string, number>>((acc, crr, index) => {
    acc[crr] = index;
    return acc;
  }, {});
}
