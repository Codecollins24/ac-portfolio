import {
  CircleDot,
  MapPin,
  GraduationCap,
  Languages,
  Heart,
  Code2,
  Smartphone,
  ShieldCheck,
  ExternalLink,
  Mail,
  Phone,
  MessageCircle,
  Link as LinkIcon,
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
  ExternalLink,
  Mail,
  Phone,
  MessageCircle,
  LinkIcon,
};

export function getIcon(name) {
  return ICON_MAP[name] ?? null;
}
