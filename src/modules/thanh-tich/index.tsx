'use client'

import { Footer } from "@/layout/footer"
import { Header } from "@/layout/header"

export function AchievePage() {
    const reviews = [
        {
            name: "HUỲNH THU HÀ",
            school: "Đại học Kinh tế tài chính",
            review:
                "Sau một khoảng thời gian học ở trường mình cảm thấy tại sao không biết đến Ielts City sớm hơn. Thầy cô và các chị SO ở đây siêu dễ thương, nhiệt tình luôn, lúc nào cũng hỗ trợ học viên hết mình. Đặc biệt nơi đây khiến mình cảm thấy tin tưởng hơn so với những nơi khác là lớp chỉ tối đa 8 người thôi nên lúc học luôn được đi bài kĩ càng và tương tác nhiều hơn.",
            image: "https://ieltscity.vn/wp-content/uploads/2023/01/thay-desmond-2-1289x1536.jpg",
        },
        {
            name: "THANH THY",
            school: "ĐH Tài chính Marketing",
            review:
                "Mình đã học ở đây được 3 khoá và cảm thấy cải thiện rất nhiều, học với cô Mai Phương và các thầy cô lớp Bổ trợ vô cùng hiệu quả. Từ lúc học đến nay mình đã nói dạn dĩ hơn, Listening cũng cao hơn nhiều. Cảm ơn chị Dung SO đã luôn động viên nhắc nhở em đi học nhaaa.",
            image: "https://ieltscity.vn/wp-content/uploads/2023/01/thay-desmond-2-1289x1536.jpg",
        },
    ];
    const students = [
        {
            name: "Trần Đắc Thiên Vũ",
            score: "8.5 IELTS",
            school: "THPT chuyên Trần Đại Nghĩa",
            image: "https://ieltscity.vn/wp-content/uploads/2023/01/thay-desmond-2-1289x1536.jpg",
        },
        {
            name: "Bùi Nhật Thông",
            score: "8.0 IELTS",
            school: "Trường Quốc tế BIS",
            image: "https://ieltscity.vn/wp-content/uploads/2023/01/thay-desmond-2-1289x1536.jpg",
        },
        {
            name: "Nguyễn Lê Thu Giang",
            score: "8.0 IELTS",
            school: "Định cư Pháp",
            image: "https://ieltscity.vn/wp-content/uploads/2023/01/thay-desmond-2-1289x1536.jpg",
        },
        {
            name: "Lưu Kỳ",
            score: "7.5 IELTS",
            school: "Graphic Designer",
            image: "https://ieltscity.vn/wp-content/uploads/2023/01/thay-desmond-2-1289x1536.jpg",
        },
        {
            name: "Lê Tiến Đạt",
            score: "7.5 IELTS",
            school: "Freelancer",
            image: "https://ieltscity.vn/wp-content/uploads/2023/01/thay-desmond-2-1289x1536.jpg",
        },
        {
            name: "Nguyễn Hoài Anh",
            score: "7.5 IELTS",
            school: "THPT Hùng Đạo",
            image: "https://ieltscity.vn/wp-content/uploads/2023/01/thay-desmond-2-1289x1536.jpg",
        },
        {
            name: "Nguyễn Thái Gia Nhi",
            score: "7.5 IELTS",
            school: "THPT Năng Khiếu",
            image: "https://ieltscity.vn/wp-content/uploads/2023/01/thay-desmond-2-1289x1536.jpg",
        },
        {
            name: "Đoàn Minh Đăng",
            score: "7.5 IELTS",
            school: "THPT Nguyễn Thượng Hiền",
            image: "https://ieltscity.vn/wp-content/uploads/2023/01/thay-desmond-2-1289x1536.jpg",
        },
    ];
    return (
        <div className="w-full min-h-screen flex flex-col justify-start items-center gap-10">
            <Header />
            <div className="w-5/6 md:w-2/3 lg:w-2/3 flex flex-col justify-center items-center">
                <div className="w-full">
                    <div className="">
                        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-800 mb-4">Review & Bảng Vàng</h2>
                                <p className="text-lg text-gray-600 mb-4">
                                    Tại IELTS CITY, chúng tôi tự hào đã tạo ra một môi trường học & luyện thi IELTS bài bản bậc nhất!
                                </p>
                                <p className="text-lg text-gray-600 mb-8">
                                    Bảng vàng này là nơi để IELTS City vinh danh những học viên tiêu biểu đạt thành tích cao trong kì thi IELTS, đồng thời là bảo chứng cho chất lượng giảng dạy & chất lượng dịch vụ của chúng tôi!
                                </p>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="text-center">
                                        <p className="text-3xl font-bold text-blue-600">8.5</p>
                                        <p className="text-lg text-gray-600">Listening</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-3xl font-bold text-blue-600">8.0</p>
                                        <p className="text-lg text-gray-600">Overall</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-3xl font-bold text-blue-600">8.0</p>
                                        <p className="text-lg text-gray-600">Speaking</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-3xl font-bold text-blue-600">7.0</p>
                                        <p className="text-lg text-gray-600">Writing</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-3xl font-bold text-blue-600">8.0</p>
                                        <p className="text-lg text-gray-600">Reading</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img
                                    src="https://ieltscity.vn/wp-content/uploads/2023/12/lop-hoc-ielts-cap-toc-tai-ielts-city-1024x651.jpg"
                                    alt="Student Award"
                                    className="w-full rounded-lg shadow-lg"
                                />
                            </div>
                        </section>
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-8">Bảng Vàng Học Viên IELTS City</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                {students.map((student, index) => (
                                    <div key={index} className="text-center">
                                        {/* Student Image */}
                                        <img
                                            src={student.image}
                                            alt={student.name}
                                            className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
                                        />
                                        {/* Student Info */}
                                        <h3 className="text-xl font-bold text-gray-800">{student.score}</h3>
                                        <p className="text-gray-600">{student.name}</p>
                                        <p className="text-gray-500">{student.school}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
                <div className="w-full my-20">
                    <div className="">
                        <header className="text-center mb-8">
                            <h1 className="text-3xl font-bold text-gray-800 mb-4">Review Của Học Viên</h1>
                        </header>
                        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {reviews.map((review, index) => (
                                <div key={index} className="bg-white text-gray-600 p-6 rounded-lg shadow-lg">
                                    <div className="flex items-center mb-4">
                                        <img
                                            src={review.image}
                                            alt={review.name}
                                            className="w-16 h-16 rounded-full object-cover mr-4"
                                        />
                                        <div>
                                            <h3 className="text-xl font-bold">{review.name}</h3>
                                            <p className="text-gray-300">{review.school}</p>
                                        </div>
                                    </div>
                                    <p className="text-lg">{review.review}</p>
                                </div>
                            ))}
                        </section>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
