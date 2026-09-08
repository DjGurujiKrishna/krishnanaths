import {
  FaCode,
  FaLaptopCode,
  FaDatabase,
  FaServer,
  FaInfinity,
  FaLayerGroup,
} from "react-icons/fa";

export const SERVICE_ICONS = {
  FaCode,
  FaLayerGroup,
  FaServer,
  FaLaptopCode,
  FaDatabase,
  FaInfinity,
};

export type ServiceIconName = keyof typeof SERVICE_ICONS;

export function getServiceIcon(name: string) {
  return SERVICE_ICONS[name as ServiceIconName] ?? FaCode;
}
