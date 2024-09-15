'use client'

import { Footer } from "@/layout/footer"
import { Header } from "@/layout/header"
import { House, SendHorizontal } from "lucide-react"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"

export function ReadingPage() {
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
                                <BreadcrumbLink href="/docs/components">Reading</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Part 01</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <section className="">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-lg border">
                            <h2 className="text-xl font-bold text-gray-800 mb-4">READING PASSAGE 1</h2>
                            <p className="text-gray-600 mb-4">You should spend about 20 minutes on Questions 1-13, which are based on Reading Passage 1 below.</p>
                            <h3 className="text-lg font-bold text-gray-800 mb-2">The return of the huarango</h3>
                            <p className="text-gray-700 italic mb-4">The arid valleys of southern Peru are welcoming the return of a native plant</p>
                            <p className="text-gray-700 mb-4">
                                The south coast of Peru is a narrow, 2,000-kilometre-long strip of desert squeezed between the Andes and the Pacific Ocean. It is also one of the most fragile ecosystems on Earth. It hardly ever rains there, and the only year-round source of water is located tens of metres below the surface. This is why the huarango tree is so suited to life there: it has the longest roots of any tree in the world. They stretch down 50-80 metres and, as well as sucking up water for the tree, they bring it into the higher subsoil, creating a water source for other plant life.
                            </p>
                            <p className="text-gray-700 mb-4">
                                Dr David Beresford-Jones, archaeobotanist at Cambridge University, has been studying the role of the huarango tree in landscape change in the Lower Ica Valley in southern Peru. He believes the huarango was key to the ancient people’s diet and, because it could reach deep water sources, it allowed local people to withstand years of drought when their other crops failed. But over the centuries huarango trees were gradually replaced with crops. Cutting down native woodland leads to erosion, as there is nothing to keep the soil in place. So when the huarangos go, the land turns into a desert. Nothing grows at all in the Lower Ica Valley now.
                            </p>
                            <p className="text-gray-700 mb-4">
                                For centuries the huarango tree was vital to the people of the neighbouring Middle Ica Valley too. They grew vegetables under it and ate products made from its seed pods. Its leaves and bark were used for herbal remedies, while its branches were used for charcoal for cooking and heating, and its trunk was used to build houses. But now it is disappearing rapidly. The majority of the huarango forests in the valley have already been cleared for fuel and agriculture - initially, these were smallholdings, but now they’re huge farms producing crops for the international market.
                            </p>
                            <p className="text-gray-700 mb-4">
                                Of the forests that were here 1,000 years ago, 99 per cent have already gone,’ says botanist Oliver Whaley from Kew Gardens in London, who, together with ethnobotanist Dr William Milliken, is running a pioneering project to protect and restore the rapidly disappearing habitat. In order to succeed, Whaley needs to get the local people on board, and that has meant overcoming local prejudices. ‘Increasingly aspirational communities think that if you plant food trees in your home or street, it shows you are poor, and still need to grow your own food,’ he says. In order to stop the Middle Ica Valley going the same way as the Lower Ica Valley, Whaley is encouraging locals to love the huarangos again. ‘It’s a process of cultural resuscitation,’ he says. He has already set up a huarango festival to reinstate a sense of pride in their eco-heritage, and has helped local schoolchildren plant thousands of trees.
                            </p>
                            <p className="text-gray-700 mb-4">
                                In order to get people interested in habitat restoration, you need to plant a tree that is useful to them,’ says Whaley, so he has been working with local families to attempt to create a sustainable income from the huarangos by turning their products into foodstuffs. ‘Boil up the beans and you get this thick brown syrup like molasses. You can also use it in drinks, soups or stews.’ The pods can be ground into flour to make cakes, and the seeds toasted into a sweet, chocolaty coffee. ‘It’s packed full of vitamins and minerals: Whaley says.
                            </p>
                            <p className="text-gray-700 mb-4">
                                And some farmers are already planting huarangos. Alberto Benevides, owner of Ica Valley’s only certified organic farm, which Whaley helped set up, has been planting the tree for 13 years. He produces syrup and flour, and sells these products at an organic farmers’ market in Lima. His farm is relatively small and doesn’t yet provide him with enough to live on, but he hopes this will change. ‘The organic market is growing rapidly in Peru,’ Benevides says, ‘I am investing in
                            </p>
                            <p className="text-gray-700 mb-4">
                                But even if Whaley can convince the local people to fall in love with the huarango again, there is still the threat of the larger farms. Some of these cut across the forests and break up the corridors that allow the essential movement of mammals, birds and pollen up and down the narrow forest strip. In the hope of counteracting this, he’s persuading farmers to let him plant forest corridors on their land. He believes the extra woodland will also benefit the farms by reducing their water usage through a lowering of evaporation and providing a refuge for bio-control insects.
                            </p>
                            <p className="text-gray-700 mb-4">
                                ‘If we can record biodiversity and see how it all works, then we’re in a good position to move on from there. Desert habitats can reduce down to very little,’ Whaley explains. ‘It’s not like a rainforest that needs to have this huge expanse. Life has always been confined to corridors and islands here. If you just have a few trees left, the population can grow up quickly because it’s used to exploiting water when it arrives.’ He sees his project as a model that has the potential to be rolled out across other arid areas around the world. ‘If we can do it here, in the most fragile system on Earth, then that’s a real message of hope for lots of places, including Africa, where there is drought and they just can’t afford to wait for rain.’
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg border">
                            <section className="">
                                <div className="">
                                    <h2 className="text-lg font-bold text-gray-800 mb-4">PART 1 Questions 1-13</h2>
                                    <p className="text-gray-600 mb-2">Complete the notes below.</p>
                                    <p className="text-gray-600 mb-6">Write <strong>ONE WORD ONLY</strong> for each answer.</p>
                                    <div className="bg-white p-4 border border-gray-300 rounded-lg">
                                        <h3 className="text-lg font-bold text-gray-800 mb-4">The importance of the huarango tree</h3>
                                        <ul className="list-none space-y-4">
                                            <li className="flex items-center space-x-4">
                                                <p className="text-gray-700">1. can access</p>
                                                <input
                                                    type="text"
                                                    className="w-20 border border-gray-400 rounded-md px-2"
                                                    placeholder="1"
                                                />
                                                <p className="text-gray-700">deep below the surface</p>
                                            </li>
                                            <li className="flex items-center space-x-4">
                                                <p className="text-gray-700">2. was a crucial part of local</p>
                                                <input
                                                    type="text"
                                                    className="w-20 border border-gray-400 rounded-md px-2"
                                                    placeholder="2"
                                                />
                                                <p className="text-gray-700">a long time ago</p>
                                            </li>
                                            <li className="flex items-center space-x-4">
                                                <p className="text-gray-700">3. helped people to survive periods of</p>
                                                <input
                                                    type="text"
                                                    className="w-20 border border-gray-400 rounded-md px-2"
                                                    placeholder="3"
                                                />
                                            </li>
                                            <li className="flex items-center space-x-4">
                                                <p className="text-gray-700">4. prevents</p>
                                                <input
                                                    type="text"
                                                    className="w-20 border border-gray-400 rounded-md px-2"
                                                    placeholder="4"
                                                />
                                                <p className="text-gray-700">of the soil</p>
                                            </li>
                                            <li className="flex items-center space-x-4">
                                                <p className="text-gray-700">5. prevents of the soil prevents land from becoming a</p>
                                                <input
                                                    type="text"
                                                    className="w-20 border border-gray-400 rounded-md px-2"
                                                    placeholder="5"
                                                />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                            <h3 className="text-lg font-bold text-gray-800 my-4">Questions 6-9</h3>
                            <p className="text-gray-600 mb-4">Complete the table below. Choose <strong>NO MORE THAN TWO WORDS</strong> from the passage for each answer.</p>
                            <table className="table-auto w-full mb-8">
                                <thead>
                                    <tr>
                                        <th className="text-left font-bold text-gray-800">Part of tree</th>
                                        <th className="text-left font-bold text-gray-800">Traditional use</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border px-4 py-2">6</td>
                                        <td className="border px-4 py-2">fuel</td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">7</td>
                                        <td className="border px-4 py-2">medicine</td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">8</td>
                                        <td className="border px-4 py-2">construction</td>
                                    </tr>
                                </tbody>
                            </table>
                            <h3 className="text-lg font-bold text-gray-800 mb-4">Questions 9-13</h3>
                            <p className="text-gray-600 mb-4">Choose <strong>TRUE</strong> if the statement agrees with the information given in the text, choose <strong>FALSE</strong> if the statement contradicts the information, or choose <strong>NOT GIVEN</strong> if there is no information on this.</p>
                            <div className="mb-4">
                                <p className="text-gray-700">9. Local families have told Whaley about some traditional uses of huarango products.</p>
                                <div className="flex items-center space-x-2">
                                    <input type="radio" id="true9" name="q9" value="TRUE" />
                                    <label htmlFor="true9" className="text-gray-700">TRUE</label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <input type="radio" id="false9" name="q9" value="FALSE" />
                                    <label htmlFor="false9" className="text-gray-700">FALSE</label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <input type="radio" id="notgiven9" name="q9" value="NOT GIVEN" />
                                    <label htmlFor="notgiven9" className="text-gray-700">NOT GIVEN</label>
                                </div>
                            </div>
                            <div className="mb-4">
                                <p className="text-gray-700">10. Farmer Alberto Benevides is now making a good profit from growing huarangos.</p>
                                <div className="flex items-center space-x-2">
                                    <input type="radio" id="true10" name="q10" value="TRUE" />
                                    <label htmlFor="true10" className="text-gray-700">TRUE</label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <input type="radio" id="false10" name="q10" value="FALSE" />
                                    <label htmlFor="false10" className="text-gray-700">FALSE</label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <input type="radio" id="notgiven10" name="q10" value="NOT GIVEN" />
                                    <label htmlFor="notgiven10" className="text-gray-700">NOT GIVEN</label>
                                </div>
                            </div>
                            <div className="mb-4">
                                <p className="text-gray-700">11. Whaley needs the co-operation of farmers to help preserve the area’s wildlife.</p>
                                <div className="flex items-center space-x-2">
                                    <input type="radio" id="true10" name="q10" value="TRUE" />
                                    <label htmlFor="true10" className="text-gray-700">TRUE</label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <input type="radio" id="false10" name="q10" value="FALSE" />
                                    <label htmlFor="false10" className="text-gray-700">FALSE</label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <input type="radio" id="notgiven10" name="q10" value="NOT GIVEN" />
                                    <label htmlFor="notgiven10" className="text-gray-700">NOT GIVEN</label>
                                </div>
                            </div>
                            <div className="mb-4">
                                <p className="text-gray-700">12. For Whaley’s project to succeed, it needs to be extended over a very large area.</p>
                                <div className="flex items-center space-x-2">
                                    <input type="radio" id="true10" name="q10" value="TRUE" />
                                    <label htmlFor="true10" className="text-gray-700">TRUE</label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <input type="radio" id="false10" name="q10" value="FALSE" />
                                    <label htmlFor="false10" className="text-gray-700">FALSE</label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <input type="radio" id="notgiven10" name="q10" value="NOT GIVEN" />
                                    <label htmlFor="notgiven10" className="text-gray-700">NOT GIVEN</label>
                                </div>
                            </div>
                            <div className="mb-4">
                                <p className="text-gray-700">13. Whaley has plans to go to Africa to set up a similar project.</p>
                                <div className="flex items-center space-x-2">
                                    <input type="radio" id="true10" name="q10" value="TRUE" />
                                    <label htmlFor="true10" className="text-gray-700">TRUE</label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <input type="radio" id="false10" name="q10" value="FALSE" />
                                    <label htmlFor="false10" className="text-gray-700">FALSE</label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <input type="radio" id="notgiven10" name="q10" value="NOT GIVEN" />
                                    <label htmlFor="notgiven10" className="text-gray-700">NOT GIVEN</label>
                                </div>
                            </div>
                            <div className="w-full flex justify-end items-center">
                                <Button variant="secondary">Submit <SendHorizontal className="ml-2 h-4 w-4" /></Button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}
