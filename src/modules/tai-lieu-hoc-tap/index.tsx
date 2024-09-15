'use client'

import { Footer } from "@/layout/footer"
import { Header } from "@/layout/header"

export function DocumentPage() {
    const documents = [
        {
            title: "Đề thi IELTS Listening 2024 mới nhất từ IDP & BC [Update liên tục]",
            description:
                "Tổng hợp đề thi IELTS Listening 2024 mới nhất được IELTS VIỆT cập nhật liên tục từ IDP và BC. Theo dõi ngay!",
            date: "01.08.2024",
            image: "https://ieltscity.vn/wp-content/uploads/2024/08/cach-viet-ielts-writing-task-2-dang-problem-and-solution-1024x576.jpg",
        },
        {
            title: "Top 7 Website IELTS Listening Test Online miễn phí tốt nhất 2024",
            description:
                "Tham khảo Top 7 Website IELTS Listening Test Online Free tốt nhất được tổng hợp bởi IELTS VIỆT nhé!",
            date: "21.06.2024",
            image: "https://ieltscity.vn/wp-content/uploads/2024/08/cach-viet-ielts-writing-task-2-dang-problem-and-solution-1024x576.jpg",
        },
        {
            title: "Các dạng bài Listening IELTS và cách làm chi tiết cho từng dạng",
            description:
                "Làm quen các dạng bài IELTS Listening thông gặp và một số lưu ý cần nắm để đạt điểm cao trong phần thi IELTS Listening. Tìm hiểu ngay!",
            date: "22.07.2023",
            image: "https://ieltscity.vn/wp-content/uploads/2024/08/cach-viet-ielts-writing-task-2-dang-problem-and-solution-1024x576.jpg",
        },
        {
            title: "Tổng hợp chi tiết đề thi IELTS Listening 2023 chính thức tại BC & IDP",
            description:
                "Cùng tham khảo Đề thi IELTS Listening 2023 mới nhất tại BC & IDP được các bạn học viên tại IELTS VIỆT đi thi về cập.",
            date: "17.07.2023",
            image: "https://ieltscity.vn/wp-content/uploads/2024/08/cach-viet-ielts-writing-task-2-dang-problem-and-solution-1024x576.jpg",
        },
    ];

    const categories = [
        "Tất cả",
        "Về kì thi IELTS",
        "IELTS Listening",
        "IELTS Reading",
        "IELTS Writing",
        "IELTS Speaking",
        "Đề thi IELTS",
        "Kinh nghiệm thi IELTS",
        "Ngữ pháp IELTS",
        "Từ vựng IELTS",
        "Phát Âm",
        "Tài liệu IELTS",
    ];

    return (
        <div className="w-full min-h-screen flex flex-col justify-start items-center gap-10">
            <Header />
            <div className="w-5/6 md:w-2/3 lg:w-2/3 flex flex-col justify-center items-center">
                <div className="w-full">
                    <div className="">
                        <div className="text-sm mb-4">
                            <a href="/" className="text-blue-600 hover:underline">
                                Home
                            </a>{" "}
                            /{" "}
                            <a href="/documents" className="text-blue-600 hover:underline">
                                Tự học IELTS
                            </a>{" "}
                            /{" "}
                            <span className="text-gray-500">IELTS Listening</span>
                        </div>
                        <header className="text-center mb-8">
                            <h1 className="text-3xl font-bold text-gray-800 mb-4">
                                Tự Học IELTS Listening Cùng IELTS VIỆT
                            </h1>
                            <p className="text-lg text-gray-600">
                                Cập nhật liên tục đề thi IELTS Listening, cách tự học, tips làm bài Listening hiệu quả
                            </p>
                        </header>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                                {documents.map((doc, index) => (
                                    <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                                        <img src={doc.image} alt={doc.title} className="w-full h-60 object-cover" />
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-gray-800 mb-2">{doc.title}</h3>
                                            <p className="text-gray-600 mb-4">{doc.description}</p>
                                            <span className="text-sm text-gray-400">{doc.date}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <aside className="bg-[rgb(246,241,237)] p-6 rounded-lg shadow-lg">
                                <h2 className="text-xl font-bold text-gray-800 mb-4">Tự Học IELTS</h2>
                                <ul className="space-y-4">
                                    {categories.map((category, index) => (
                                        <li key={index}>
                                            <a
                                                href="#"
                                                className={`text-lg font-semibold text-gray-800 ${category === "IELTS Listening" ? "text-[rgb(236,141,68)]" : "hover:text-[rgb(236,141,68)]"
                                                    }`}
                                            >
                                                {category}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </aside>
                        </div>
                        <div className="my-20">
                            <div className="bg-white text-gray-600 p-6 rounded-lg shadow-lg border text-center">
                                <h3 className="text-2xl font-bold mb-4">
                                    Học IELTS Cùng Chuyên Gia Học Thuật Hàng Đầu
                                </h3>
                                <p className="text-lg">
                                    Tăng 1 band IELTS sau 60h học với thầy Wesly và thầy Kevin
                                </p>
                                <div className="mt-4">
                                    <a
                                        href="#"
                                        className="bg-white text-[rgb(236,141,68)] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100"
                                    >
                                        Đăng ký ngay
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
