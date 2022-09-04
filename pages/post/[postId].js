
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  ArchiveIcon,
  ChevronLeftIcon,
  ClockIcon,
  HomeIcon,
  MenuAlt2Icon,
  UserCircleIcon as UserCircleIconOutline,
  ViewListIcon,
  XIcon,
} from '@heroicons/react/outline'
import {
  BellIcon,
  CalendarIcon,
  ChatAltIcon,
  CheckCircleIcon,
  LockOpenIcon,
  PencilIcon,
  SearchIcon,
  TagIcon,
  UserCircleIcon as UserCircleIconSolid,
} from '@heroicons/react/solid'
import { useRouter } from 'next/router'

const postId = () => {
    const router=useRouter()
    return (
        <main className="flex-1 pt-10">
               <button onClick={()=>{router.back()}} className="fixed cursor-pointer top-0 left-0 z-50   p-2 bg-blue-100 m-2 rounded-tr-[21px] rounded-bl-[21px] rounded-tl-small rounded-br-small drop-shadow-xl">
              <ChevronLeftIcon className="w-8 fill-pri-text-gray"/>
              </button>
        <div className="py-8 xl:py-10">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-5xl xl:grid xl:grid-cols-3">
            <div className="xl:col-span-2 xl:pr-8 xl:border-r xl:border-gray-200">
              <div>
                <div>
                  <div className="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6">
                    <div>
                      <h1 className="text-2xl font-bold text-gray-900">ARIA attribute misspelled</h1>
                      {/* <p className="mt-2 text-sm text-gray-500">
                        #400 opened by{' '}
                        <a href="#" className="font-medium text-gray-900">
                          Hilary Mahy
                        </a>{' '}
                        in{' '}
                        <a href="#" className="font-medium text-gray-900">
                          Customer Portal
                        </a>
                      </p> */}
                    </div>
                    <div className="mt-4 flex space-x-3 md:mt-0">
                 
                      <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                      >
                        <BellIcon className="-ml-1 mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                        <span>Subscribe</span>
                      </button>
                    </div>
                  </div>
                  <aside className="mt-8 xl:hidden">
                    <h2 className="sr-only">Details</h2>
                    <div className="space-y-5">
                    
                      {/* <div className="flex items-center space-x-2">
                        <ChatAltIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        <span className="text-gray-900 text-sm font-medium">4 comments</span>
                      </div> */}
                      <div className="flex items-center space-x-2">
                        <CalendarIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        <span className="text-gray-900 text-sm font-medium">
                          Created on <time dateTime="2020-12-02">Dec 2, 2020</time>
                        </span>
                      </div>
                    </div>
                    <div className="mt-6 border-t border-b border-gray-200 py-6 space-y-8">
                      <div>
                        <h2 className="text-sm font-medium text-gray-500">Assignees</h2>
                        <ul role="list" className="mt-3 space-y-3">
                          <li className="flex justify-start">
                            <a href="#" className="flex items-center space-x-3">
                              <div className="flex-shrink-0">
                                <img
                                  className="h-5 w-5 rounded-full"
                                  src="https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                                  alt=""
                                />
                              </div>
                              <div className="text-sm font-medium text-gray-900">Eduardo Benz</div>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h2 className="text-sm font-medium text-gray-500">Tags</h2>
                        <ul role="list" className="mt-2 leading-8">
                       
                          <li className="inline">
                            <a
                              href="#"
                              className="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5"
                            >
                              <div className="absolute flex-shrink-0 flex items-center justify-center">
                                <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" aria-hidden="true" />
                              </div>
                              <div className="ml-3.5 text-sm font-medium text-gray-900">Accessibility</div>
                            </a>{' '}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </aside>
                  <div className="py-3 xl:pt-6 xl:pb-0">
                    <h2 className="sr-only">Description</h2>
                    <div className="prose max-w-none">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, hic? Commodi cumque
                        similique id tempora molestiae deserunt at suscipit, dolor voluptatem, numquam, harum
                        consequatur laboriosam voluptas tempore aut voluptatum alias?
                      </p>
                      <ul role="list">
                        <li>
                          Tempor ultrices proin nunc fames nunc ut auctor vitae sed. Eget massa parturient vulputate
                          fermentum id facilisis nam pharetra. Aliquet leo tellus.
                        </li>
                        <li>Turpis ac nunc adipiscing adipiscing metus tincidunt senectus tellus.</li>
                        <li>
                          Semper interdum porta sit tincidunt. Dui suspendisse scelerisque amet metus eget sed. Ut
                          tellus in sed dignissim.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
          </div>
            <aside className="hidden xl:block xl:pl-8">
              <h2 className="sr-only">Details</h2>
              <div className="space-y-5">
                <div className="flex items-center space-x-2">
                  <LockOpenIcon className="h-5 w-5 text-green-500" aria-hidden="true" />
                  <span className="text-green-700 text-sm font-medium">Open Issue</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ChatAltIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  <span className="text-gray-900 text-sm font-medium">4 comments</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CalendarIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  <span className="text-gray-900 text-sm font-medium">
                    Created on <time dateTime="2020-12-02">Dec 2, 2020</time>
                  </span>
                </div>
              </div>
              <div className="mt-6 border-t border-gray-200 py-6 space-y-8">
                <div>
                  <h2 className="text-sm font-medium text-gray-500">Assignees</h2>
                  <ul role="list" className="mt-3 space-y-3">
                    <li className="flex justify-start">
                      <a href="#" className="flex items-center space-x-3">
                        <div className="flex-shrink-0">
                          <img
                            className="h-5 w-5 rounded-full"
                            src="https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                            alt=""
                          />
                        </div>
                        <div className="text-sm font-medium text-gray-900">Eduardo Benz</div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-sm font-medium text-gray-500">Tags</h2>
                  <ul role="list" className="mt-2 leading-8">
                    <li className="inline">
                      <a
                        href="#"
                        className="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5"
                      >
                        <div className="absolute flex-shrink-0 flex items-center justify-center">
                          <span className="h-1.5 w-1.5 rounded-full bg-rose-500" aria-hidden="true" />
                        </div>
                        <div className="ml-3.5 text-sm font-medium text-gray-900">Bug</div>
                      </a>{' '}
                    </li>
                    <li className="inline">
                      <a
                        href="#"
                        className="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5"
                      >
                        <div className="absolute flex-shrink-0 flex items-center justify-center">
                          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" aria-hidden="true" />
                        </div>
                        <div className="ml-3.5 text-sm font-medium text-gray-900">Accessibility</div>
                      </a>{' '}
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    )
}

export default postId
