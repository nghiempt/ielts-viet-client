import { IMAGES } from "@/utils/image"
import { Facebook, Mail, Youtube, PhoneCall } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const Footer = () => {
    return (
        <div className="w-5/6 md:w-2/3 lg:w-2/3 pb-6">
            <div className="w-full grid grid-row-1 md:grid-cols-6 lg:grid-cols-6 gap-16 md:gap-24 lg:gap-24">
                <div className="md:col-span-2 lg:col-span-2 flex flex-col justify-center items-center md:items-start lg:items-start gap-4">
                    <Image src={IMAGES.LOGO} width={80} height={80} alt="logo" />
                    <div className="text-center md:text-left lg:text-left font-medium">Trung tâm Anh ngữ IELTS VIỆT</div>
                    <div className="flex justify-start items-center gap-4">
                        <div className="bg-gray-100 p-2 rounded-lg">
                            <Facebook />
                        </div>
                        <div className="bg-gray-100 p-2 rounded-lg">
                            <Mail />
                        </div>
                        <div className="bg-gray-100 p-2 rounded-lg">
                            <Youtube />
                        </div>
                        <div className="bg-gray-100 p-2 rounded-lg">
                            <PhoneCall />
                        </div>
                    </div>
                </div>
                <div className="md:col-span-4 lg:col-span-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
                    <div className="flex flex-col justify-center items-center md:items-start lg:items-start gap-4">
                        <div className="text-gray-700 font-semibold">Trang Chủ</div>
                        <div className="flex flex-col justify-center items-center md:items-start lg:items-start text-gray-400 gap-2">
                            <div>Cam kết đầu ra</div>
                            <div>Giáo viên</div>
                            <div>Thành tích</div>
                            <div>Tài liệu học tập</div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center md:items-start lg:items-start gap-4">
                        <div className="text-gray-700 font-semibold">Khoá Học</div>
                        <div className="flex flex-col justify-center items-center md:items-start lg:items-start text-gray-400 gap-2">
                            <div>Cấp tốc</div>
                            <div>1 kèm 1</div>
                            <div>Online</div>
                            <div>Mất gốc</div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center md:items-start lg:items-start gap-4">
                        <div className="text-gray-700 font-semibold">Chúng Tôi</div>
                        <div className="flex flex-col justify-center items-center md:items-start lg:items-start text-gray-400 gap-2">
                            <div>Giới thiệu</div>
                            <div>Cơ sở</div>
                            <div>Liên hệ</div>
                            <div>Không gian</div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center md:items-start lg:items-start gap-4">
                        <div className="text-gray-700 font-semibold">Hỗ Trợ</div>
                        <div className="flex flex-col justify-center items-center md:items-start lg:items-start text-gray-400 gap-2">
                            <div>Tài liệu hướng dẫn</div>
                            <div>Điều khoản</div>
                            <div>Chính sách bảo mật</div>
                            <div>Hỗ trợ</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[1px] bg-gray-300 my-6"></div>
            <div className="w-full flex flex-col md:flex-row lg:flex-row justify-center items-center text-gray-500 gap-2">
                <div className="flex justify-center items-center gap-2 text-sm md:text-[14px] lg:text-[14px]">
                    <div>
                        Copyright © 2024 Ielts Viet
                    </div>
                    <div>|</div>
                    <div>
                        All Rights Reserved
                    </div>
                    <div>|</div>
                </div>
                <div className="flex justify-center items-center gap-2 text-sm md:text-[14px] lg:text-[14px]">
                    <div className="text-gray-500">
                        Powered by <Link href="https://nghiempt.github.io" className="font-bold text-[rgb(var(--primary-rgb))]">Nghiem Thanh Pham</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}