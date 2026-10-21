import { Activity, ArrowRightLeft, Bot, ChartColumn, ClipboardCheck, Cloud, Compass, Gauge, Globe, Handshake, Headset, Leaf, Server, Shield, Users, Wrench, type LucideProps } from "lucide-react";

const map = { cloud: Cloud, users: Users, server: Server, shield: Shield, wrench: Wrench, bot: Bot, compass: Compass, clipboard: ClipboardCheck, swap: ArrowRightLeft, activity: Activity, handshake: Handshake, globe: Globe, leaf: Leaf, gauge: Gauge, headset: Headset, chart: ChartColumn };

export default function Icon({ name, ...p }: { name: string } & LucideProps) {
  const C = map[name as keyof typeof map] ?? Shield;
  return <C aria-hidden {...p} />;
}
