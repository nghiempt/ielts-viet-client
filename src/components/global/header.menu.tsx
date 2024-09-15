"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ROUTES } from "@/utils/route"

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Khoá Học Ielts Cấp Tốc",
        href: ROUTES.KHOA_HOC,
        description: "Khoá học Ielts cấp tốc giúp bạn nâng cao điểm số Ielts một cách nhanh chóng",
    },
    {
        title: "Khoá Học Ielts 1 Kèm 1",
        href: ROUTES.KHOA_HOC,
        description: "Khoá học Ielts 1 kèm 1 giúp bạn nâng cao điểm số Ielts một cách hiệu quả",
    },
    {
        title: "Khoá Học Ielts Online",
        href: ROUTES.KHOA_HOC,
        description: "Khoá học Ielts online giúp bạn nâng cao điểm số Ielts một cách linh hoạt",
    },
    {
        title: "Khoá Học Ielts Cấp 2-3",
        href: ROUTES.KHOA_HOC,
        description: "Khoá học Ielts cấp 2-3 giúp bạn nâng cao điểm số Ielts một cách hiệu quả",
    },
    {
        title: "Khoá Học Ielts Mất Gốc",
        href: ROUTES.KHOA_HOC,
        description: "Khoá học Ielts mất gốc giúp bạn nâng cao điểm số Ielts một cách hiệu quả",
    },
    {
        title: "Tất Cả Khoá Học",
        href: ROUTES.KHOA_HOC,
        description: "Xem tất cả các khoá học Ielts mà chúng tôi cung cấp",
    },
]

export function HeaderMenu() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href={ROUTES.HOME} legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Trang Chủ
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Khoá Học</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href={ROUTES.CAM_KET_DAU_RA} legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Cam Kết Đầu Ra
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href={ROUTES.GIAO_VIEN} legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Giáo Viên
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href={ROUTES.THANH_TICH} legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Thành Tích
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href={ROUTES.TAI_LIEU_HOC_TAP} legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Tài Liệu Học Tập
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})

ListItem.displayName = "ListItem"
