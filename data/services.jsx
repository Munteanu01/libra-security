import { Shield, ShieldCheck, KeyRound, Network, Settings, ShieldAlert } from "lucide-react"

export const services = [
  {
    id: "fire",
    title: "Sisteme de Detecție Incendiu",
    icon: <Shield className="h-6 w-6" />,
    category: "protectie",
    features: [
      "Detectoare de fum și căldură",
      "Centrale de detecție incendiu",
      "Butoane de alarmă",
      "Sirene de avertizare",
      "Sisteme de stingere automată",
    ],
  },
  {
    id: "cctv",
    title: "Sisteme de Supraveghere Video",
    icon: <ShieldCheck className="h-6 w-6" />,
    category: "supraveghere",
    features: [
      "Camere de supraveghere HD/4K",
      "Sisteme de înregistrare NVR/DVR",
      "Camere cu vedere nocturnă",
      "Monitorizare de la distanță",
      "Analiza video inteligentă",
    ],
  },
  {
    id: "access",
    title: "Sisteme Control Acces",
    icon: <KeyRound className="h-6 w-6" />,
    category: "control",
    features: [
      "Cititoare de proximitate",
      "Sisteme biometrice",
      "Interfoane și videointerfoane",
      "Yală și încuietori electronice",
      "Integrare cu alte sisteme",
    ],
  },
  {
    id: "alarm",
    title: "Sisteme de Alarmă",
    icon: <ShieldAlert className="h-6 w-6" />,
    category: "protectie",
    features: [
      "Centrale de alarmă",
      "Detectoare de mișcare",
      "Contacte magnetice",
      "Sirene interioare și exterioare",
      "Monitorizare 24/7",
    ],
  },
  {
    id: "network",
    title: "Infrastructură Rețea",
    icon: <Network className="h-6 w-6" />,
    category: "infrastructura",
    features: [
      "Cablare structurată",
      "Rețele LAN/WAN",
      "Echipamente active de rețea",
      "Configurare și securizare",
      "Mentenanță și suport",
    ],
  },
  {
    id: "maintenance",
    title: "Mentenanță și Suport",
    icon: <Settings className="h-6 w-6" />,
    category: "suport",
    features: [
      "Verificări periodice",
      "Intervenții rapide",
      "Contracte de mentenanță",
      "Suport tehnic 24/7",
      "Extindere și upgrade sisteme",
    ],
  },
]

export const serviceCategories = [
  { id: "all", name: "Toate Serviciile" },
  { id: "protectie", name: "Protecție" },
  { id: "supraveghere", name: "Supraveghere" },
  { id: "control", name: "Control Acces" },
  { id: "infrastructura", name: "Infrastructură" },
  { id: "suport", name: "Suport" },
]
