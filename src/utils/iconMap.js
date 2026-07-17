import {
  CircleDot,
  MapPin,
  GraduationCap,
  Languages,
  Heart,
  Code2,
  Smartphone,
  ShieldCheck,
} from "lucide-react";

export const ICON_MAP = {
  CircleDot,
  MapPin,
  GraduationCap,
  Languages,
  Heart,
  Code2,
  Smartphone,
  ShieldCheck,
};

export function getIcon(name) {
  return ICON_MAP[name] ?? null;
}
