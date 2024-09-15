'use client'

import { Button } from "@/components/ui/button"
import { Footer } from "@/layout/footer"
import { Header } from "@/layout/header"
import { ArrowRight, GraduationCap } from "lucide-react"

export function CoursePage() {
    return (
        <div className="w-full min-h-screen flex flex-col justify-start items-center gap-10">
            <Header />
            <div className="w-5/6 md:w-2/3 lg:w-2/3 flex justify-center items-center mb-20">
                <div className="w-full">
                    <div className="">
                        <div className="text-sm mb-4">
                            <a href="/" className="text-blue-600 hover:underline">
                                Home
                            </a>{" "}
                            /{" "}
                            <a href="/courses" className="text-blue-600 hover:underline">
                                Các khoá học IELTS
                            </a>{" "}
                            / <span className="text-gray-500">Khoá học IELTS cấp tốc</span>
                        </div>
                        <header className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                            <div className="flex flex-col justify-center">
                                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                                    KHÓA HỌC IELTS CẤP TỐC
                                </h1>
                                <ul className="list-disc ml-6 text-lg text-gray-600 mb-4">
                                    <li>Cấp tốc đạt điểm IELTS mục tiêu</li>
                                    <li>Tăng 1.0 band điểm IELTS sau 60h học</li>
                                    <li>Cam kết IELTS đầu ra 7.0+</li>
                                </ul>
                                <Button className="bg-[rgb(236,141,68)] flex justify-start items-center w-[200px]">
                                    ĐĂNG KÝ NGAY <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                            <div>
                                <img
                                    src="https://ieltscity.vn/wp-content/uploads/2022/10/hinh-khoa-hoc-ielts-cap-toc.jpg"
                                    alt="IELTS Intensive Course"
                                    className="rounded-lg shadow-lg"
                                />
                            </div>
                        </header>
                        <section className="mb-12">
                            <p className="text-lg text-gray-600 mb-4">
                                Khóa học IELTS cấp tốc là khóa học được thiết kế nhằm rút ngắn tối đa thời gian luyện thi IELTS của học viên với lộ trình học tinh gọn và tăng cường độ học nhiều hơn so với các khóa luyện thi IELTS thông thường. Khóa học được cam kết chất lượng đầu ra nhờ đội ngũ giảng viên chuyên môn cao cùng phương pháp giảng dạy chuyên biệt cho đối tượng cần bằng IELTS cấp tốc.
                            </p>
                        </section>
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-800 mb-8">
                                Khóa học IELTS cấp tốc dành cho những ai?
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                <div className="text-center bg-white p-6 rounded-lg shadow-lg border">
                                    <div className="w-full mb-4 flex justify-center items-center">
                                        <GraduationCap size={50} />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                                        Học viên cần chứng chỉ IELTS gấp trong thời gian ngắn
                                    </h3>
                                </div>
                                <div className="text-center bg-white p-6 rounded-lg shadow-lg border">
                                    <div className="w-full mb-4 flex justify-center items-center">
                                        <GraduationCap size={50} />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                                        Học viên đậm chân tại chỗ không nâng được band điểm
                                    </h3>
                                </div>
                                <div className="text-center bg-white p-6 rounded-lg shadow-lg border">
                                    <div className="w-full mb-4 flex justify-center items-center">
                                        <GraduationCap size={50} />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                                        Học viên đã đăng ký thi IELTS nhưng không tự tin vào khả năng của mình
                                    </h3>
                                </div>
                                <div className="text-center bg-white p-6 rounded-lg shadow-lg border">
                                    <div className="w-full mb-4 flex justify-center items-center">
                                        <GraduationCap size={50} />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                                        Học viên muốn nâng band điểm của mình trong thời gian ngắn
                                    </h3>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
