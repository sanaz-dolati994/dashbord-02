import { useState } from "react";
import React from "react";
import { LucideLayoutDashboard } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
} from "./ui/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { FaUserFriends } from "react-icons/fa";
import { BiSolidWallet } from "react-icons/bi";
import { TbCategory } from "react-icons/tb";

// آیتم‌ها با آیکون
const navItems = [
  {
    title: "مدیریت کاربران",
    icon: <FaUserFriends className="text-lg ml-2" />,
    content: <p>بخش مدیریت کاربران</p>,
  },
  {
    title: "مدیریت مالی",
    icon: <BiSolidWallet className="text-lg ml-2" />,
    content: <p>بخش مدیریت مالی</p>,
  },
  {
    title: "دسته بندی ها",
    icon: <TbCategory className="text-lg ml-2" />,
    content: <p>بخش دسته بندی</p>,
  },
];

export function AppSidebar() {
  const [activeTab, setActiveTab] = useState(navItems[0].title);
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <div className="flex flex-col w-full">
      <Sidebar side="right">
        <SidebarContent>
          <SidebarGroup>
            {/* دکمه داشبورد (خارج از Label گذاشته شده برای جلوگیری از هم‌پوشانی) */}
            <div className="px-4 pt-2">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center gap-2 pl-8 py-2  rounded-md w-full text-right "
              >
                <LucideLayoutDashboard className="" />
                <span>داشبورد</span>
              </button>
            </div>

            <SidebarGroupContent
              className={`transition-all duration-200 ${
                isMenuOpen ? "mt-10" : "hidden"
              }`}
            >
              <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
              >
                <TabsList className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <TabsTrigger
                      key={item.title}
                      value={item.title}
                      className="w-full text-right py-2 px-4 rounded-md data-[state=active]:bg-gray-200 flex items-center justify-end"
                    >
                      <span>{item.title}</span>
                      {item.icon}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      <div className="flex-1 p-4  mr-64">
        <Tabs value={activeTab} className="w-full">
          {navItems.map((item) => (
            <TabsContent key={item.title} value={item.title}>
              {item.content}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
