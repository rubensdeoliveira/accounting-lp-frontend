import React from 'react'
import { FiPhone } from 'react-icons/fi'

export function Footer() {
  return (
    <div className="flex flex-col pt-[10rem]">
      <div className="mb-24 flex justify-between">
        <div className="flex w-full max-w-[478px] flex-col gap-10">
          <h1 className="">More Links</h1>
          <p className="">
            Stay connected with us and lets know more about me or my service dan
            social life for you can see how can I work in my social platform.
          </p>
          <div className="flex items-center gap-4">
            <FiPhone size={24} />
            <FiPhone size={24} />
            <FiPhone size={24} />
          </div>
        </div>
        <div className="flex w-full max-w-[293px] flex-col gap-10">
          <h1>Contact Me</h1>
          <div className="flex flex-col gap-6">
            <div className="flex gap-4">
              <FiPhone size={24} />
              <span>james@gmail.com</span>
            </div>
            <div className="flex gap-4">
              <FiPhone size={24} />
              <span>james@gmail.com</span>
            </div>
            <div className="flex gap-4">
              <FiPhone size={24} />
              <span>james@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-[2.5rem] h-[1px] w-full bg-gray-600"></div>
      <p className="text-center">
        JR Contabilidade e sistemsas © Feito com ❤️ por Rubens de Oliveira
      </p>
    </div>
  )
}
