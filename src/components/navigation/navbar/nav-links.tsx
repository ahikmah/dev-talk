"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import ROUTES from "@/constants/routes";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { SheetClose } from "@/components/ui/sheet";

const NavLinks = ({ isMobileNav = false }: { isMobileNav?: boolean }) => {
  const pathname = usePathname();
  const userId = 1;

  return (
    <>
      {sidebarLinks.map((link) => {
        const isActive =
          (pathname.includes(link.route) && link.route.length > 1) ||
          pathname === link.route;

        if (link.route === ROUTES.PROFILE) {
          if (userId) link.route = `${link.route}/${userId}`;
          else return null;
        }

        const LinkComponent = (
          <Link
            key={link.label}
            href={link.route}
            className={cn(
              isActive
                ? "primary-gradient rounded-lg text-light-900"
                : "text-dark300_light900",
              "flex items-center justify-start gap-4 p-4 bg-transparent",
            )}
          >
            <Image
              src={link.imgURL}
              alt={link.label}
              width={20}
              height={20}
              className={cn({ "invert-colors": !isActive })}
            />
            <p
              className={cn(
                isActive ? "base-bold" : "base-medium",
                !isMobileNav && "max-lg:hidden",
              )}
            >
              {link.label}
            </p>
          </Link>
        );

        return isMobileNav ? (
          <SheetClose asChild key={link.route}>
            {LinkComponent}
          </SheetClose>
        ) : (
          <React.Fragment key={link.route}>{LinkComponent}</React.Fragment>
        );
      })}
    </>
  );
};

export default NavLinks;