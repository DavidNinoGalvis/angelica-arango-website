"use client";

import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Instagram, User } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-50 bg-[#f9f9f9] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-6 flex items-center justify-between relative">
        <NavigationMenu>
          <NavigationMenuList className="space-x-4 text-sm font-medium">
            <NavigationMenuItem>
              <Link href="/" className={navigationMenuTriggerStyle()}>
                Inicio
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#about" className={navigationMenuTriggerStyle()}>
                Acerca
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#schedules" className={navigationMenuTriggerStyle()}>
                Productos
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#webinar" className={navigationMenuTriggerStyle()}>
                Contactanos
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Link href="/" className="block">
            <Image
              src="/logo-main-black.svg"
              alt="Logo Angélica Arango"
              width={360}
              height={120} 
              className="h-[120px] w-auto object-contain" 
              priority
            />
          </Link>
        </div>

        {/* ICONOS DERECHA (opcional) */}
        <div className="flex gap-4 text-gray-600">
          <button className="hover:text-black">
            <Instagram size={20} />
          </button>
          <button className="hover:text-black">
            <User size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
