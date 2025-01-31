import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import MenuItem from './MenuItem'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import Link from 'next/link'

// 导出一个名为Header的函数组件
export default function Header() {
  // 返回一个div元素，其中包含两个MenuItem组件
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      <div className="flex gap-4">
        {/* MenuItem组件，title属性为"Home"，address属性为"/"，Icon属性为AiFillHome */}
        <MenuItem title="Home" address="/" Icon={AiFillHome} />
        {/* MenuItem组件，title属性为"About"，address属性为"/about"，Icon属性为AiFillHome */}
        <MenuItem title="About" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <Link href="/" className="flex gap-1 items-center">
        <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">IMDB</span>
        <span className="text-xl hidden sm:inline">Clone</span>
      </Link>
    </div>
  )
}
