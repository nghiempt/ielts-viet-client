'use client'

import { Footer } from "@/layout/footer"
import { Header } from "@/layout/header"
import { ThumbsUp } from "lucide-react"

export function TeacherPage() {

    const teachers = [
        {
            name: "Thầy Desmond",
            title: "EXAMINER",
            score: "8.0 IELTS Overall",
            image: "https://ieltscity.vn/wp-content/uploads/2023/01/thay-desmond-2-1289x1536.jpg",
        },
        {
            name: "Thầy Wesly Edward",
            title: "EXAMINER",
            score: "8.0 IELTS Overall",
            image: "https://ieltscity.vn/wp-content/uploads/2023/01/thay-desmond-2-1289x1536.jpg",
        },
        {
            name: "Thầy Kevin Kelsey",
            title: "EXAMINER",
            score: "8.0 IELTS Overall",
            image: "https://ieltscity.vn/wp-content/uploads/2023/01/thay-desmond-2-1289x1536.jpg",
        },
        {
            name: "Thầy Hoàng Nhân",
            title: "8.0 IELTS Overall",
            score: "",
            image: "https://ieltscity.vn/wp-content/uploads/2023/01/thay-desmond-2-1289x1536.jpg",
        },
        {
            name: "Thầy Tùng Nguyễn",
            title: "8.5 IELTS Overall",
            score: "",
            image: "https://ieltscity.vn/wp-content/uploads/2023/01/thay-desmond-2-1289x1536.jpg",
        },
        {
            name: "Cô Thanh Tuyên",
            title: "8.0 IELTS Overall",
            score: "",
            image: "https://ieltscity.vn/wp-content/uploads/2023/01/thay-desmond-2-1289x1536.jpg",
        },
        {
            name: "Thầy Khải Ngô",
            title: "8.0 IELTS Overall",
            score: "",
            image: "https://ieltscity.vn/wp-content/uploads/2023/01/thay-desmond-2-1289x1536.jpg",
        },
        {
            name: "Cô Minh Châu",
            title: "8.0 IELTS Overall",
            score: "",
            image: "https://ieltscity.vn/wp-content/uploads/2023/01/thay-desmond-2-1289x1536.jpg",
        },
    ];

    return (
        <div className="w-full min-h-screen flex flex-col justify-start items-center gap-10">
            <Header />
            <div className="w-5/6 md:w-2/3 lg:w-2/3 flex flex-col justify-center items-center">
                <div className="w-full">
                    <div className="">
                        <header className="text-center mb-8">
                            <h1 className="text-3xl font-bold text-gray-800 mb-4">Đội Ngũ Giáo Viên Tại IELTS VIỆT</h1>
                            <p className="text-lg text-gray-600 mb-4">
                                IELTS VIỆT tự hào có sự đồng hành của đội ngũ giáo viên hàng đầu. Các thầy cô đều có chuyên môn giỏi, năng lực sư phạm tốt với nhiều năm kinh nghiệm giảng dạy IELTS & tiếng Anh học thuật. Tất cả đều được đào tạo & bồi dưỡng kĩ lưỡng, nhằm mang lại chất lượng dạy & học luôn ở mức độ cao nhất cho quý học viên.
                            </p>
                        </header>
                        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                            <div className="p-6 bg-[rgb(255,252,249)] rounded-lg shadow">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="bg-[rgb(236,141,68)] text-white p-2 rounded-full">
                                        <ThumbsUp size={16} />
                                    </div>
                                    <h3 className="text-[18px] font-bold text-gray-800">Trình Độ Chuyên Môn Xuất Sắc</h3>
                                </div>
                                <p className="text-gray-600">
                                    100% giáo viên sở hữu chứng chỉ IELTS 8.0, 8.5, 9.0 Overall và hiểu sâu sắc về kỹ thi IELTS.
                                </p>
                            </div>
                            <div className="p-6 bg-[rgb(255,252,249)] rounded-lg shadow">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="bg-[rgb(236,141,68)] text-white p-2 rounded-full">
                                        <ThumbsUp size={16} />
                                    </div>
                                    <h3 className="text-[18px] font-bold text-gray-800">Năng Lực Sư Phạm Vượt Trội</h3>
                                </div>
                                <p className="text-gray-600">
                                    100% giáo viên sở hữu chứng chỉ giảng dạy quốc tế uy tín như CELTA, DELTA, Master TESOL.
                                </p>
                            </div>
                            <div className="p-6 bg-[rgb(255,252,249)] rounded-lg shadow">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="bg-[rgb(236,141,68)] text-white p-2 rounded-full">
                                        <ThumbsUp size={16} />
                                    </div>
                                    <h3 className="text-[18px] font-bold text-gray-800">Kinh Nghiệm Dạy Dày Dặn</h3>
                                </div>
                                <p className="text-gray-600">
                                    Nhiều năm kinh nghiệm đào tạo tiếng Anh học thuật nổi chung và luyện thi IELTS nói riêng.
                                </p>
                            </div>
                        </section>
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-8">Profile "Siêu Khủng" Các Thầy Cô Tại IELTS VIỆT</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="p-6 rounded-lg shadow-lg border">
                                    <div className="flex items-center space-x-6">
                                        <img
                                            src="https://ieltscity.vn/wp-content/uploads/2023/01/thay-desmond-2-1289x1536.jpg"
                                            alt="Teacher 1"
                                            className="w-28 h-28 rounded-full object-cover"
                                        />
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-800">Thầy Desmond</h3>
                                            <p className="text-sm text-gray-600">IELTS Examiner</p>
                                        </div>
                                    </div>
                                    <div className="mt-6 space-y-4">
                                        <div className="flex items-center">
                                            <i className="fas fa-certificate text-[rgb(236,141,68)] mr-4"></i>
                                            <p className="text-gray-700">
                                                Chứng chỉ đào tạo IELTS cấp bởi British Council. Chứng chỉ giảng dạy TESOL.
                                            </p>
                                        </div>
                                        <div className="flex items-center">
                                            <i className="fas fa-award text-[rgb(236,141,68)] mr-4"></i>
                                            <p className="text-gray-700">Chứng chỉ giảng dạy TEFL. Chứng chỉ đào tạo ESL cấp bởi Oxford Workshop.</p>
                                        </div>
                                        <div className="flex items-center">
                                            <i className="fas fa-briefcase text-[rgb(236,141,68)] mr-4"></i>
                                            <p className="text-gray-700">Hơn 20 năm kinh nghiệm giảng dạy IELTS và tiếng Anh học thuật.</p>
                                        </div>
                                        <div className="flex items-center">
                                            <i className="fas fa-graduation-cap text-[rgb(236,141,68)] mr-4"></i>
                                            <p className="text-gray-700">
                                                Thạc sĩ Tiếng Anh - Đại học Southern Denmark. Cử nhân Tiếng Anh - Đại học Aarhus (Đan Mạch).
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 rounded-lg shadow-lg border">
                                    <div className="flex items-center space-x-6">
                                        <img
                                            src="https://ieltscity.vn/wp-content/uploads/2023/01/thay-desmond-2-1289x1536.jpg"
                                            alt="Teacher 2"
                                            className="w-28 h-28 rounded-full object-cover"
                                        />
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-800">Thầy Wesly Edward</h3>
                                            <p className="text-sm text-gray-600">IELTS Examiner</p>
                                        </div>
                                    </div>
                                    <div className="mt-6 space-y-4">
                                        <div className="flex items-center">
                                            <i className="fas fa-certificate text-[rgb(236,141,68)] mr-4"></i>
                                            <p className="text-gray-700">
                                                Chứng chỉ đào tạo IELTS cấp bởi British Council. Chứng chỉ giảng dạy TESOL.
                                            </p>
                                        </div>
                                        <div className="flex items-center">
                                            <i className="fas fa-award text-[rgb(236,141,68)] mr-4"></i>
                                            <p className="text-gray-700">Chứng chỉ giảng dạy TEFL. Chứng chỉ đào tạo ESL cấp bởi Oxford Workshop.</p>
                                        </div>
                                        <div className="flex items-center">
                                            <i className="fas fa-briefcase text-[rgb(236,141,68)] mr-4"></i>
                                            <p className="text-gray-700">Hơn 20 năm kinh nghiệm giảng dạy IELTS và tiếng Anh học thuật.</p>
                                        </div>
                                        <div className="flex items-center">
                                            <i className="fas fa-graduation-cap text-[rgb(236,141,68)] mr-4"></i>
                                            <p className="text-gray-700">
                                                Thạc sĩ Tiếng Anh - Đại học Southern Denmark. Cử nhân Tiếng Anh - Đại học Aarhus (Đan Mạch).
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="w-full mt-16">
                        <div className="">
                            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                                {teachers.map((teacher, index) => (
                                    <div key={index} className="text-center bg-blue-50 rounded-lg p-6 shadow-lg">
                                        <img
                                            src={teacher.image}
                                            alt={teacher.name}
                                            className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
                                        />
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">{teacher.name}</h3>
                                        <p className="text-gray-600">{teacher.title}</p>
                                        {teacher.score && <p className="text-[rgb(236,141,68)] font-semibold">{teacher.score}</p>}
                                        <a
                                            href="#"
                                            className="inline-flex items-center text-blue-600 mt-4 font-semibold hover:underline"
                                        >
                                            Xem Profile <i className="fas fa-arrow-right ml-2"></i>
                                        </a>
                                    </div>
                                ))}
                            </section>
                            <div className="text-center">
                                <button className="bg-[rgb(236,141,68)] text-white px-6 py-3 rounded-full hover:bg-yellow-600 font-semibold">
                                    Xem thêm
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full my-20">
                    <div className="">
                        <header className="text-center mb-8">
                            <h1 className="text-3xl font-bold text-gray-800 mb-4">
                                Bằng Cấp & Chứng Chỉ Của Các Thầy Cô
                            </h1>
                        </header>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex flex-col justify-center bg-[rgb(253,248,243)] text-gray-600 p-6 rounded-lg">
                                <h2 className="text-2xl font-bold mb-4">Video Thầy Cô Show Bằng</h2>
                                <p className="text-lg">
                                    Xem video giới thiệu về profile của các thầy cô tại IELTS VIỆT với những thông tin về
                                    chứng chỉ, bằng cấp và kinh nghiệm giảng dạy.
                                </p>
                            </div>
                            <div className="bg-[rgb(236,141,68)] p-6 rounded-lg">
                                <div className="video-responsive">
                                    <iframe
                                        width="576"
                                        height="315"
                                        src="https://www.youtube.com/embed/your-video-id"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="rounded-lg"
                                    ></iframe>
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
