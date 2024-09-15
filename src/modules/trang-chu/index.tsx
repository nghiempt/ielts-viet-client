'use client'

import { Footer } from "@/layout/footer"
import { Header } from "@/layout/header"
import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"
import { IMAGES } from "@/utils/image"
import { ROUTES } from "@/utils/route"

export function HomePage() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center">
      <Header />
      <div className="w-5/6 md:w-2/3 lg:w-2/3 flex flex-col justify-center items-center">
        <section className="w-full py-10">
          <div className="w-full flex flex-col lg:flex-row items-center justify-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-[rgb(var(--primary-rgb))] leading-tight">
                Trải Nghiệm Học IELTS Chuẩn Quốc Tế
              </h2>
              <p className="mt-4 text-lg text-gray-700">
                Cam kết đầu ra IELTS 7.0+ với đội ngũ chuyên gia IELTS hàng đầu.
              </p>
              <Link
                href={ROUTES.KHOA_HOC}
                className="mt-6 inline-block bg-[rgb(250,238,229)] text-[rgb(var(--primary-rgb))] font-bold px-8 py-4 rounded-full"
              >
                Các Khóa Học Tại IELTS VIỆT
              </Link>
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-end items-center">
              <Image
                src={IMAGES.BANNER}
                alt="img"
                width={500}
                height={300}
                className="rounded-lg shadow-md border"
              />
            </div>
          </div>
        </section>
        {/* ===================== */}
        <section className="py-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-700">Học IELTS Cam Kết Đầu Ra</h2>
            <p className="mt-4 text-gray-700">
              Trải nghiệm chương trình luyện thi IELTS hoàn toàn mới tại IELTS VIỆT.
            </p>
            <div className="mt-8 flex justify-center">
              <Link href={ROUTES.KHOA_HOC} className="bg-[rgb(var(--primary-rgb))] text-white px-6 py-3 rounded-full">
                Xem Các Khóa Học
              </Link>
            </div>
          </div>
        </section>
        {/* ===================== */}
        <section className="w-full p-10 bg-[rgb(var(--quaternary-rgb))] rounded-lg my-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-700 mb-8">Khóa Học Phù Hợp Với Các Mục Đích</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              <div className="bg-white rounded-lg shadow-lg flex flex-col justify-center items-center py-10 gap-4">
                <Image src={IMAGES.STUDY} alt="img" width={50} height={50} />
                <h3 className="text-lg font-bold text-gray-700">Du Học</h3>
              </div>
              <div className="bg-white rounded-lg shadow-lg flex flex-col justify-center items-center py-10 gap-4">
                <Image src={IMAGES.HOME} alt="img" width={50} height={50} />
                <h3 className="text-lg font-bold text-gray-700">Định Cư</h3>
              </div>
              <div className="bg-white rounded-lg shadow-lg flex flex-col justify-center items-center py-10 gap-4">
                <Image src={IMAGES.DOC} alt="img" width={50} height={50} />
                <h3 className="text-lg font-bold text-gray-700">Tốt Nghiệp</h3>
              </div>
              <div className="bg-white rounded-lg shadow-lg flex flex-col justify-center items-center py-10 gap-4">
                <Image src={IMAGES.OFFICE} alt="img" width={50} height={50} />
                <h3 className="text-lg font-bold text-gray-700">Cơ Hội Việc Làm</h3>
              </div>
            </div>
          </div>
        </section>
        {/* ===================== */}
        <section className="py-10">
          <div className="">
            <h2 className="text-3xl font-bold text-gray-700 text-center mb-8">Các Khóa Học Tại Ielts Việt</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href={ROUTES.KHOA_HOC} className="bg-[rgb(var(--quaternary-rgb))] text-gray-700 px-6 py-3 rounded-full">
                Khóa học IELTS Cấp tốc
              </Link>
              <Link href={ROUTES.KHOA_HOC} className="bg-[rgb(var(--secondary-rgb))] text-gray-700 px-6 py-3 rounded-full">
                Khóa học IELTS General
              </Link>
              <Link href={ROUTES.KHOA_HOC} className="bg-[rgb(var(--quaternary-rgb))] text-gray-700 px-6 py-3 rounded-full">
                Khóa học IELTS Online
              </Link>
              <Link href={ROUTES.KHOA_HOC} className="bg-[rgb(var(--secondary-rgb))] text-gray-700 px-6 py-3 rounded-full">
                Khóa học IELTS học sinh cấp 2-3
              </Link>
              <Link href={ROUTES.KHOA_HOC} className="bg-[rgb(var(--quaternary-rgb))] text-gray-700 px-6 py-3 rounded-full">
                Khóa học IELTS 1 kèm 1
              </Link>
              <Link href={ROUTES.KHOA_HOC} className="bg-[rgb(var(--secondary-rgb))] text-gray-700 px-6 py-3 rounded-full">
                Khóa học IELTS cho người mất gốc
              </Link>
            </div>
          </div>
        </section>
        {/* ===================== */}
        <section className="w-full bg-[rgb(var(--tertiary-rgb))] py-16 rounded-lg my-10">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2">
              <Image
                src={IMAGES.BUILDING}
                alt="img"
                width={400}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2 text-white mt-8 lg:mt-0">
              <h3 className="text-3xl font-bold text-white">Vì Sao Nên Chọn IELTS VIỆT?</h3>
              <ul className="mt-10 space-y-4">
                <li className="flex items-center space-x-4">
                  <span className="bg-[rgb(var(--quaternary-rgb))] p-1 rounded-full"><Check className="text-[rgb(var(--primary-rgb))]" /></span>
                  <span>Không Gian Học IELTS Sáng Tạo Bậc Nhất</span>
                </li>
                <li className="flex items-center space-x-4">
                  <span className="bg-[rgb(var(--quaternary-rgb))] p-1 rounded-full"><Check className="text-[rgb(var(--primary-rgb))]" /></span>
                  <span>Cam Kết Đạt IELTS 7.0+ Vượt Tiến Độ</span>
                </li>
                <li className="flex items-center space-x-4">
                  <span className="bg-[rgb(var(--quaternary-rgb))] p-1 rounded-full"><Check className="text-[rgb(var(--primary-rgb))]" /></span>
                  <span>Sĩ Số Lớp Siêu Ít Chỉ 4-8 Học Viên</span>
                </li>
                <li className="flex items-center space-x-4">
                  <span className="bg-[rgb(var(--quaternary-rgb))] p-1 rounded-full"><Check className="text-[rgb(var(--primary-rgb))]" /></span>
                  <span>Lịch Học IELTS Linh Hoạt</span>
                </li>
                <li className="flex items-center space-x-4">
                  <span className="bg-[rgb(var(--quaternary-rgb))] p-1 rounded-full"><Check className="text-[rgb(var(--primary-rgb))]" /></span>
                  <span>Thẩm Định Cuối Khóa Cùng Examiner Bản Ngữ</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* ===================== */}
        <section className="w-full py-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-700 mb-16">Học Viên Tiêu Biểu</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center">
                <div className="w-40 h-40 rounded-full overflow-hidden">
                  <Image
                    src={IMAGES.AVATAR}
                    alt="img"
                    width={200}
                    height={200}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-8=700 mt-8">7.0 IELTS</h3>
                <p className="text-gray-500">Full Name</p>
                <p className="text-sm text-gray-400">Position</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-40 h-40 rounded-full overflow-hidden">
                  <Image
                    src={IMAGES.AVATAR}
                    alt="img"
                    width={200}
                    height={200}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-8=700 mt-8">7.0 IELTS</h3>
                <p className="text-gray-500">Full Name</p>
                <p className="text-sm text-gray-400">Position</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-40 h-40 rounded-full overflow-hidden">
                  <Image
                    src={IMAGES.AVATAR}
                    alt="img"
                    width={200}
                    height={200}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-8=700 mt-8">7.0 IELTS</h3>
                <p className="text-gray-500">Full Name</p>
                <p className="text-sm text-gray-400">Position</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-40 h-40 rounded-full overflow-hidden">
                  <Image
                    src={IMAGES.AVATAR}
                    alt="img"
                    width={200}
                    height={200}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-8=700 mt-8">7.0 IELTS</h3>
                <p className="text-gray-500">Full Name</p>
                <p className="text-sm text-gray-400">Position</p>
              </div>
            </div>
          </div>
        </section>
        {/* ===================== */}
        <section className="w-full py-16 my-10 bg-[rgb(var(--tertiary-rgb))] text-white rounded-lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Đội Ngũ Giáo Viên</h2>
            <p className="mb-12">
              Đội ngũ các chuyên gia học thuật & giảng viên IELTS Academic, General, UKVI dày dặn kinh nghiệm và sở hữu chứng chỉ IELTS từ 8.0, 8.5 đến 9.0...
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center">
                <Image
                  src={IMAGES.AVATAR}
                  alt="img"
                  width={160}
                  height={220}
                  className="object-cover rounded-l-[24px] rounded-b-[24px]"
                />
                <h3 className="mt-4 text-xl font-bold">Thầy Desmond</h3>
                <p className="text-sm">Examiner</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src={IMAGES.AVATAR}
                  alt="img"
                  width={160}
                  height={220}
                  className="object-cover rounded-l-[24px] rounded-b-[24px]"
                />
                <h3 className="mt-4 text-xl font-bold">Thầy Wesley Edward</h3>
                <p className="text-sm">Examiner</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src={IMAGES.AVATAR}
                  alt="img"
                  width={160}
                  height={220}
                  className="object-cover rounded-l-[24px] rounded-b-[24px]"
                />
                <h3 className="mt-4 text-xl font-bold">Thầy Kevin Kelsey</h3>
                <p className="text-sm">Examiner</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src={IMAGES.AVATAR}
                  alt="img"
                  width={160}
                  height={220}
                  className="object-cover rounded-l-[24px] rounded-b-[24px]"
                />
                <h3 className="mt-4 text-xl font-bold">Thầy Hoàng Nhân</h3>
                <p className="text-sm">8.0 IELTS Overall</p>
              </div>
            </div>
          </div>
        </section>
        {/* ===================== */}
        <section className="w-full my-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-700 mb-12">Không Gian Luyện Thi IELTS Sáng Tạo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={IMAGES.SPACE}
                  alt="img"
                  width={400}
                  height={300}
                  className="object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={IMAGES.SPACE}
                  alt="img"
                  width={400}
                  height={300}
                  className="object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={IMAGES.SPACE}
                  alt="img"
                  width={400}
                  height={300}
                  className="object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={IMAGES.SPACE}
                  alt="img"
                  width={400}
                  height={300}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        {/* ===================== */}
        <section className="w-full p-10 bg-[rgb(var(--quaternary-rgb))] mt-10 rounded-lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-10">Review của Học Viên</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={IMAGES.AVATAR}
                      alt="img"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-4 flex flex-col items-start">
                    <h3 className="text-xl font-bold text-gray-700">Thiều Quang Minh</h3>
                    <p className="text-[rgb(var(--primary-rgb))] font-bold">Facebook</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-700 text-left">
                  Mình đã học khóa IELTS Academic Target 7.0+ và mình cảm thấy rất là hài lòng với những kết quả mình đạt được. Cách đây 10 năm mình thi IELTS được 6.0, sau 10 năm vì cần cho đi du học nên mình thi lại. Trước đó mình có tự thi thử trên mạng vì nghĩ chắc là trình độ mình đã khác rồi thì kết quả nhận được chỉ là 6.5 nên mình quyết định tìm trung tâm luyện thi. Sau 2 tuần tham khảo nhiều địa điểm khác nhau thì mình quyết định chọn IELTS CITY vì...
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={IMAGES.AVATAR}
                      alt="img"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-4 flex flex-col items-start">
                    <h3 className="text-xl font-bold text-gray-700">Tu Pham</h3>
                    <p className="text-[rgb(var(--primary-rgb))] font-bold">Facebook</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-700 text-left">
                  Mình đã học ở đây được 3 khóa rồi và vẫn đang tiếp tục học để đạt aim IELTS 7.0. Điều mình tin tưởng ở đây là trường cam kết đầu ra khi đi thi thật ở IDP luôn, thầy cô dạy nhiệt tình đặc biệt là cô Phương (mình may mắn được học 2 khóa cùng cô) và còn được chăm sóc trong quá trình học để bàn thân biết được tiến độ học của mình đang ở đâu nữa. Môi trường hiện đại, đẹp và mới.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* ===================== */}
        <section className="w-full py-20">
          <div className="">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-700">Kiến Thức IELTS</h2>
              <Link href="/" className="bg-[rgb(var(--primary-rgb))] text-white px-6 py-2 rounded-full">
                Xem thêm
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="">
                <Image
                  src={IMAGES.BLOG}
                  alt="img"
                  width={400}
                  height={200}
                  className="object-cover rounded-lg"
                />
                <div className="flex justify-between items-start mt-4 gap-2">
                  <h3 className="text-lg font-medium text-gray-700">Tổng hợp từ vựng IELTS Writing Task 2 thông dụng giúp bạn tăng band dễ dàng</h3>
                  <div className="bg-[rgb(var(--primary-rgb))] text-white text-[12px] text-center rounded-lg px-3 py-1">29 Aug</div>
                </div>
              </div>
              <div className="">
                <Image
                  src={IMAGES.BLOG}
                  alt="img"
                  width={400}
                  height={200}
                  className="object-cover rounded-lg"
                />
                <div className="flex justify-between items-start mt-4 gap-2">
                  <h3 className="text-lg font-medium text-gray-700">Tổng hợp từ vựng IELTS Writing Task 2 thông dụng giúp bạn tăng band dễ dàng</h3>
                  <div className="bg-[rgb(var(--primary-rgb))] text-white text-[12px] text-center rounded-lg px-3 py-1">29 Aug</div>
                </div>
              </div>
              <div className="">
                <Image
                  src={IMAGES.BLOG}
                  alt="img"
                  width={400}
                  height={200}
                  className="object-cover rounded-lg"
                />
                <div className="flex justify-between items-start mt-4 gap-2">
                  <h3 className="text-lg font-medium text-gray-700">Tổng hợp từ vựng IELTS Writing Task 2 thông dụng giúp bạn tăng band dễ dàng</h3>
                  <div className="bg-[rgb(var(--primary-rgb))] text-white text-[12px] text-center rounded-lg px-3 py-1">29 Aug</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ===================== */}
        <section className="w-full mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-700 mb-8">Đối Tác Đồng Hành Cùng IELTS VIỆT</h2>
            <div className="flex justify-center space-x-8">
              <Image
                src={IMAGES.BRAND}
                alt="img"
                width={200}
                height={100}
                className="object-contain"
              />
              <Image
                src={IMAGES.BRAND}
                alt="img"
                width={200}
                height={100}
                className="object-contain"
              />
            </div>
          </div>
        </section>
      </div>
      <div className="w-5/6 md:w-2/3 lg:w-2/3 h-[3px] bg-[rgb(var(--primary-rgb))] mb-12"></div>
      <Footer />
    </div>
  )
}
