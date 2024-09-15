'use client'

import { Footer } from "@/layout/footer"
import { Header } from "@/layout/header"
import { NotebookPen, AudioLines, MicVocal, PencilLine } from "lucide-react"
import {
    CardContent,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Test {
    title: string;
    duration: string;
    questions: number;
}

const readings: Test[] = [
    {
        title: "Ielts Reading Part 01 - Mini Test 01",
        duration: "10 phút",
        questions: 10
    },
    {
        title: "Ielts Reading Part 02 - Mini Test 02",
        duration: "15 phút",
        questions: 15
    },
    {
        title: "Ielts Reading Part 03 - Mini Test 03",
        duration: "20 phút",
        questions: 20
    }
]

const listenings: Test[] = [
    {
        title: "Ielts Listening Part 01 - Mini Test 01",
        duration: "10 phút",
        questions: 10
    },
    {
        title: "Ielts Listening Part 02 - Mini Test 02",
        duration: "15 phút",
        questions: 15
    },
    {
        title: "Ielts Listening Part 03 - Mini Test 03",
        duration: "20 phút",
        questions: 20
    }
]

const speakings: Test[] = [
    {
        title: "Ielts Speaking Part 01 - Mini Test 01",
        duration: "10 phút",
        questions: 10
    },
    {
        title: "Ielts Speaking Part 02 - Mini Test 02",
        duration: "15 phút",
        questions: 15
    },
    {
        title: "Ielts Speaking Part 03 - Mini Test 03",
        duration: "20 phút",
        questions: 20
    }
]

const writings: Test[] = [
    {
        title: "Ielts Writing Part 01 - Mini Test 01",
        duration: "10 phút",
        questions: 10
    },
    {
        title: "Ielts Writing Part 02 - Mini Test 02",
        duration: "15 phút",
        questions: 15
    },
    {
        title: "Ielts Writing Part 03 - Mini Test 03",
        duration: "20 phút",
        questions: 20
    }
]

export function TestPage() {
    return (
        <div className="w-full min-h-screen flex flex-col justify-start items-center gap-10">
            <Header />
            <div className="w-5/6 h-[2px] md:w-2/3 lg:w-2/3 bg-[rgb(var(--primary-rgb))]"></div>
            <div className="w-5/6 md:w-2/3 lg:w-2/3 rounded-lg flex flex-col gap-16 justify-center items-center">
                {/* Reading */}
                <div className="w-full flex flex-col justify-center items-start gap-4">
                    <h1 className="text-2xl font-bold text-center">Reading</h1>
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {
                            readings.map((reading, index) => {
                                return (
                                    <Link
                                        key={index}
                                        href={`/test/reading/${index}`}
                                    >
                                        <CardContent className="grid gap-4 !m-0 !p-0 relative">
                                            <div className="flex items-start space-x-4 rounded-md border p-6">
                                                <NotebookPen />
                                                <div className="flex flex-col justify-center items-start">
                                                    <p className="text-sm font-medium leading-none mb-2">
                                                        {reading.title}
                                                    </p>
                                                    <p className="text-sm text-muted-foreground">
                                                        Thời lượng: {reading.duration}
                                                    </p>
                                                    <p className="text-sm text-muted-foreground">
                                                        Số lượng: {reading.questions} câu hỏi
                                                    </p>
                                                </div>
                                                <Button className="bg-[rgb(var(--primary-rgb))] absolute bottom-3 right-3 rounded-full !m-0 !p-0 !px-10">Bắt đầu</Button>
                                            </div>
                                        </CardContent>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
                {/* Listening */}
                <div className="w-full flex flex-col justify-center items-start gap-4">
                    <h1 className="text-2xl font-bold text-center">Listening</h1>
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {
                            listenings.map((listening, index) => {
                                return (
                                    <Link
                                        key={index}
                                        href={`/test/listening/${index}`}
                                    >
                                        <CardContent key={index} className="grid gap-4 !m-0 !p-0 relative">
                                            <div className="flex items-start space-x-4 rounded-md border p-6">
                                                <AudioLines />
                                                <div className="flex flex-col justify-center items-start">
                                                    <p className="text-sm font-medium leading-none mb-2">
                                                        {listening.title}
                                                    </p>
                                                    <p className="text-sm text-muted-foreground">
                                                        Thời lượng: {listening.duration}
                                                    </p>
                                                    <p className="text-sm text-muted-foreground">
                                                        Số lượng: {listening.questions} câu hỏi
                                                    </p>
                                                </div>
                                                <Button className="bg-[rgb(var(--primary-rgb))] absolute bottom-3 right-3 rounded-full !m-0 !p-0 !px-10">Bắt đầu</Button>
                                            </div>
                                        </CardContent>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
                {/* Writing */}
                <div className="w-full flex flex-col justify-center items-start gap-4">
                    <h1 className="text-2xl font-bold text-center">Writing</h1>
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {
                            writings.map((writing, index) => {
                                return (
                                    <Link
                                        key={index}
                                        href={`/test/writing/${index}`}
                                    >
                                        <CardContent key={index} className="grid gap-4 !m-0 !p-0 relative">
                                            <div className="flex items-start space-x-4 rounded-md border p-6">
                                                <PencilLine />
                                                <div className="flex flex-col justify-center items-start">
                                                    <p className="text-sm font-medium leading-none mb-2">
                                                        {writing.title}
                                                    </p>
                                                    <p className="text-sm text-muted-foreground">
                                                        Thời lượng: {writing.duration}
                                                    </p>
                                                    <p className="text-sm text-muted-foreground">
                                                        Số lượng: {writing.questions} câu hỏi
                                                    </p>
                                                </div>
                                                <Button className="bg-[rgb(var(--primary-rgb))] absolute bottom-3 right-3 rounded-full !m-0 !p-0 !px-10">Bắt đầu</Button>
                                            </div>
                                        </CardContent>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
                {/* Speaking */}
                <div className="w-full flex flex-col justify-center items-start gap-4">
                    <h1 className="text-2xl font-bold text-center">Speaking</h1>
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {
                            speakings.map((speaking, index) => {
                                return (
                                    <Link
                                        key={index}
                                        href={`/test/speaking/${index}`}
                                    >
                                        <CardContent key={index} className="grid gap-4 !m-0 !p-0 relative">
                                            <div className="flex items-start space-x-4 rounded-md border p-6">
                                                <MicVocal />
                                                <div className="flex flex-col justify-center items-start">
                                                    <p className="text-sm font-medium leading-none mb-2">
                                                        {speaking.title}
                                                    </p>
                                                    <p className="text-sm text-muted-foreground">
                                                        Thời lượng: {speaking.duration}
                                                    </p>
                                                    <p className="text-sm text-muted-foreground">
                                                        Số lượng: {speaking.questions} câu hỏi
                                                    </p>
                                                </div>
                                                <Button className="bg-[rgb(var(--primary-rgb))] absolute bottom-3 right-3 rounded-full !m-0 !p-0 !px-10">Bắt đầu</Button>
                                            </div>
                                        </CardContent>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="w-5/6 h-[2px] md:w-2/3 lg:w-2/3 bg-[rgb(var(--primary-rgb))] mt-10"></div>
            <Footer />
        </div>
    )
}
