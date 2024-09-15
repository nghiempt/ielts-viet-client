import { HeaderMenu } from "@/components/global/header.menu"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight, Menu } from "lucide-react"
import { IMAGES } from "@/utils/image"
import Link from "next/link"
import { ROUTES } from "@/utils/route"

export const Header = () => {
    return (
        <div className="w-5/6 md:w-2/3 lg:w-2/3 grid grid-cols-2 pt-4 md:pt-8 lg:pt-8">
            <div className="flex justify-start items-center">
                <Link href={ROUTES.HOME}>
                    <Image src={IMAGES.LOGO} width={100} height={100} className="hidden lg:block" alt="logo" />
                </Link>
                <Image src={IMAGES.LOGO} width={70} height={70} className="lg:hidden" alt="logo" />
            </div>
            <div className="lg:hidden flex justify-end items-center">
                <Menu />
            </div>
            <div className="hidden lg:flex justify-end items-center">
                <HeaderMenu />
                <Button variant="secondary" className="ml-4 mr-2 bg-[rgb(var(--secondary-rgb))]">Đăng nhập</Button>
                <Link href={ROUTES.KIEM_TRA}>
                    <Button className="bg-[rgb(var(--primary-rgb))]">
                        Kiểm Tra <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </Link>
            </div>
        </div>
    )
}