import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { AiOutlineClose } from "react-icons/ai";
import StartCAnvas from "../Canvas";
import Image from "next/image";
import { TbWorld } from "react-icons/tb";
import {BsGithub} from 'react-icons/bs'
import Link from "next/link";
import styles from './index.module.css'

export default function AboutUSModal({ show, onClose, data }: any) {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-20 h-screen"
        initialFocus={cancelButtonRef}
        onClose={() => {
          onClose();
        }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen h-[100vh] overflow-y-auto">
          <div className="flex h-full justify-center p-4 text-center items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-y-auto rounded-lg bg-black text-left shadow-xl transition-all sm:my-8 sm:w-[90%] w-[98%] sm:h-[90%] h-[90vh]">
                <StartCAnvas />
                <div className="text-white px-4 sm:p-6 sm:pb-4">
                  <div className="flex items-center justify-center">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full flex flex-col items-center">
                      <div className="sm:px-10 px-4 rounded-lg sm:w-[70%] w-full relative">
                        <div className="pb-5">
                        <div
                          className="rounded-full text-white font-bold text-[20px] cursor-pointer flex justify-end items-center mb-10 mt-5"
                        >
                          <div onClick={() => {
                            onClose();
                          }}>
                          <AiOutlineClose />
                          </div>
                        </div>
                          <div className={`grid ${data.images && data.images.length > 0 ? "md:grid-cols-2" : "grid-col"} gap-2 w-full`}>
                            <div className="h-[200px] w-full bg-gray-100 rounded-xl overflow-hidden relative">
                              <Image
                                src={data.image}
                                fill={true}
                                alt={data?.name}
                                style={{ objectFit: "cover" }}
                                className="cursor-pointer"
                              />
                            </div>
                            <div className={`${data.images && data.images.length <= 1 ? "grid-cols" : "grid-cols-2 gap-2"}  sm:grid hidden`}>
                              {data?.images
                                ?.slice(0, 4)
                                .map((img: string, imgIndex: number) => {
                                  return (
                                    <div
                                      key={imgIndex}
                                      className={`${data.images && data.images.length <= 1 ? "h-[200px]" : "h-[98px]"} bg-gray-100 rounded-xl overflow-hidden relative`}
                                    >
                                      <Image
                                        src={img}
                                        fill={true}
                                        alt={`top - ${data?.name}`}
                                        style={{ objectFit: "cover" }}
                                      />
                                    </div>
                                  );
                                })}
                            </div>
                          </div>
                          <div className="flex flex-col items-center mt-5">
                            <Dialog.Title
                        as="h3"
                        className="text-white font-black xl:text-[60px] md:text-[48px] sm:text-[40px] text-[32px] text-center"
                      >
                        {data.name}
                      </Dialog.Title>
                            <p className="mt-2 text-secondary text-[14px] md:w-[80%] text-center">
                              {data.description}
                            </p>
                            {data?.tags?.length > 0 && (
                              <p className="mt-4 text-secondary text-[24px] md:w-[80%] text-center flex sm:flex-row flex-col items-center justify-center font-bold">
                                Stack:
                                <span>
                                  <div className="flex flex-wrap gap-2 ml-3 whitespace-nowrap justify-center">
                                    {data.tags.map((tag: any) => (
                                      <p
                                        key={`${data.name}-${tag.name}`}
                                        className={`text-[14px] ${tag.color}`}
                                      >
                                        #{tag.name}
                                      </p>
                                    ))}
                                  </div>
                                </span>
                              </p>
                            )}
                            {data?.source_code_link && (
                              <div className="flex items-center justify-center gap-x-3 mt-4">
                                <TbWorld className="text-[20px]" />
                                <Link
                                  href={data?.source_code_link}
                                  className="underline hover:text-[var(--blue)] border-none outline-none"
                                  target="_blank"
                                >
                                  {data?.source_code_link}
                                </Link>
                              </div>
                            )}
                            {data?.github == "" || !data.github ? (
                              ""
                            ):(
                              <div className="flex items-center justify-center gap-x-3 mt-4">
                                <BsGithub className="text-[20px]" />
                                <Link
                                  href={data?.source_code_link}
                                  className="underline hover:text-[var(--blue)]"
                                  target="_blank
                                        "
                                >
                                  {data?.source_code_link}
                                </Link>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
