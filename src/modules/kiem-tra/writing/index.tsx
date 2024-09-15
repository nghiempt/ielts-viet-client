'use client'

import { useState } from 'react';
import { Footer } from "@/layout/footer"
import { Header } from "@/layout/header"
import { Button } from '@/components/ui/button';
import { House, SendHorizontal } from "lucide-react"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Progress } from '@/components/ui/progress';

export function WritingPage() {

    const [progress, setProgress] = useState(100)

    return (
        <div className="w-full min-h-screen flex flex-col justify-start items-center gap-10">
            <Header />
            <div className="w-5/6 md:w-2/3 lg:w-2/3 flex flex-col justify-center items-start mb-20">
                <div className="flex justify-center items-center mb-4">
                    <House size={16} className="mr-2" />
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">Test</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/docs/components">Writing</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Part 01</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <div className="">
                    <div className="p-6 bg-white rounded-lg shadow-lg border">
                        <header className="mb-8">
                            <h1 className="text-3xl font-bold text-gray-800 mb-4">IELTS Writing Test</h1>
                            <p className="text-lg text-gray-600">You have 60 minutes to complete both tasks. You should spend about 20 minutes on Task 1 and 40 minutes on Task 2.</p>
                            <p className="text-lg text-gray-600">The tasks are as follows:</p>
                        </header>
                        <div className="w-full flex justify-center items-center gap-4 mb-6">
                            <h2 className="text-xl font-bold text-gray-800">Time:</h2>
                            <Progress value={progress} className="" />
                        </div>
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Task 1</h2>
                            <p className="text-lg text-gray-600 mb-4">You should spend about 20 minutes on this task.</p>
                            <p className="text-lg text-gray-600 mb-4">Write a report of at least 150 words in response to the following graph, chart, or diagram. Describe the main trends or features and make comparisons where relevant.</p>
                            <textarea
                                className="w-full h-40 p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 mb-2"
                                placeholder="Type your answer here..."
                            />
                            <div className="flex justify-between items-center">
                                <p className="text-gray-600">Minimum words: 150</p>
                                <p className="text-gray-800">Word count: {0}</p>
                            </div>
                        </section>
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Task 2</h2>
                            <p className="text-lg text-gray-600 mb-4">You should spend about 40 minutes on this task.</p>
                            <p className="text-lg text-gray-600 mb-4">Write an essay of at least 250 words on the following topic. Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>
                            <textarea
                                className="w-full h-60 p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 mb-2"
                                placeholder="Type your essay here..."
                            />
                            <div className="flex justify-between items-center">
                                <p className="text-gray-600">Minimum words: 250</p>
                                <p className="text-gray-800">Word count: {0}</p>
                            </div>
                        </section>
                        <div className="flex justify-end">
                            <Button variant="secondary">Submit <SendHorizontal className="ml-2 h-4 w-4" /></Button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
