'use client'

import { useState } from 'react';
import { Footer } from "@/layout/footer"
import { Header } from "@/layout/header"
import { Progress } from '@/components/ui/progress';
import { House, SendHorizontal } from "lucide-react"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from '@/components/ui/button';

export function ListeningPage() {

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
                                <BreadcrumbLink href="/docs/components">Listening</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Part 01</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <div className="w-full">
                    <div className="w-full p-6 bg-white rounded-lg shadow-lg border">
                        <header className="mb-8">
                            <h1 className="text-3xl font-bold text-gray-800 mb-4">IELTS Listening Test</h1>
                            <p className="text-lg text-gray-600">You have 30 minutes to complete the test.</p>
                            <p className="text-lg text-gray-600">Listen to the audio and answer the questions. You can only listen to each section once.</p>
                        </header>
                        <div className="w-full flex justify-center items-center gap-4 mb-6">
                            <h2 className="text-xl font-bold text-gray-800">Time:</h2>
                            <Progress value={progress} className="" />
                        </div>
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Section 1</h2>
                            <p className="text-lg text-gray-600 mb-4">Questions 1-5: Fill in the blanks as you listen.</p>
                            <div className="mb-4">
                                <audio controls>
                                    <source src="/audio/section1.mp3" type="audio/mp3" />
                                    Your browser does not support the audio element.
                                </audio>
                            </div>
                            {
                                ['When did the Street Play Scheme first take place?',
                                    'How often is Beechwood Road closed to traffic now?',
                                    'Who is responsible for closing the road?',
                                    'Residents who want to use their cars',
                                    'Alice says that Street Play Schemes are most needed in'
                                ]
                                    .map((question: string, index: any) => (
                                        <div key={index} className="mb-4">
                                            <label className="text-gray-700">Question {index + 1}: {question}</label>
                                            <input
                                                type="text"
                                                className="w-full p-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                                placeholder={`Answer`}
                                            />
                                        </div>
                                    ))}
                        </section>
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Section 2</h2>
                            <p className="text-lg text-gray-600 mb-4">Questions 6-10: Multiple-choice questions.</p>
                            <div className="mb-4">
                                <audio controls>
                                    <source src="/audio/section2.mp3" type="audio/mp3" />
                                    Your browser does not support the audio element.
                                </audio>
                            </div>
                            {
                                ['When did the Street Play Scheme first take place?',
                                    'How often is Beechwood Road closed to traffic now?',
                                    'Who is responsible for closing the road?',
                                    'Residents who want to use their cars',
                                    'Alice says that Street Play Schemes are most needed in'
                                ]
                                    .map((question: string, index: any) => (
                                        <div key={index} className="mb-4">
                                            <label className="text-gray-700">Question {index + 6}: {question}</label>
                                            <div className="flex flex-col mt-2">
                                                <label className="flex items-center">
                                                    <input
                                                        type="radio"
                                                        name={`q${index + 6}`}
                                                        value="Option A"
                                                    />
                                                    <span className="ml-2">Option A</span>
                                                </label>
                                                <label className="flex items-center">
                                                    <input
                                                        type="radio"
                                                        name={`q${index + 6}`}
                                                        value="Option B"
                                                    />
                                                    <span className="ml-2">Option B</span>
                                                </label>
                                                <label className="flex items-center">
                                                    <input
                                                        type="radio"
                                                        name={`q${index + 6}`}
                                                        value="Option C"
                                                    />
                                                    <span className="ml-2">Option C</span>
                                                </label>
                                            </div>
                                        </div>
                                    ))}
                        </section>
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Section 3</h2>
                            <p className="text-lg text-gray-600 mb-4">Questions 11-15: Complete the table below.</p>
                            <div className="mb-4">
                                <audio controls>
                                    <source src="/audio/section3.mp3" type="audio/mp3" />
                                    Your browser does not support the audio element.
                                </audio>
                            </div>
                            <div className="bg-white p-4 border border-gray-300 rounded-lg">
                                <h3 className="text-lg font-bold text-gray-800 mb-4">Employment Agency: Possible Jobs</h3>
                                <h4 className="text-md font-bold text-gray-700 mb-2">First Job</h4>
                                <ul className="list-none space-y-4">
                                    <li className="flex items-center space-x-4">
                                        <p className="text-gray-700">• Administrative assistant in a company that produces</p>
                                        <input
                                            type="text"
                                            className="w-20 border border-gray-400 rounded-md px-2 py-1"
                                            placeholder="11"
                                        />
                                        <p className="text-gray-700">(North London)</p>
                                    </li>
                                    <li className="flex items-center space-x-4">
                                        <p className="text-gray-700">• Go to</p>
                                        <input
                                            type="text"
                                            className="w-20 border border-gray-400 rounded-md px-2 py-1"
                                            placeholder="12"
                                        />
                                        <p className="text-gray-700">and take notes</p>
                                    </li>
                                    <li className="flex items-center space-x-4">
                                        <p className="text-gray-700">• Management of</p>
                                        <input
                                            type="text"
                                            className="w-20 border border-gray-400 rounded-md px-2 py-1"
                                            placeholder="13"
                                        />
                                        <p className="text-gray-700">(Requirements)</p>
                                    </li>
                                    <li className="flex items-center space-x-4">
                                        <p className="text-gray-700">• Attention to</p>
                                        <input
                                            type="text"
                                            className="w-20 border border-gray-400 rounded-md px-2 py-1"
                                            placeholder="14"
                                        />
                                        <p className="text-gray-700">(Experience)</p>
                                    </li>
                                    <li className="flex items-center space-x-4">
                                        <p className="text-gray-700">• Need minimum of</p>
                                        <input
                                            type="text"
                                            className="w-20 border border-gray-400 rounded-md px-2 py-1"
                                            placeholder="15"
                                        />
                                        <p className="text-gray-700">(Experience of Teleconferencing)</p>
                                    </li>
                                </ul>
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
