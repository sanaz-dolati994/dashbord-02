// AppSidebar Component
import { useState } from "react";
import React from "react";
import { LucideLayoutDashboard } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "./ui/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const navItems = [
  { title: "مدیریت کاربران", content: <p>بخش مدیریت کاربران</p> },
  { title: "مدیریت مالی", content: <p>بخش مدیریت مالی</p> }, // اصلاح typo: contet به content
  { title: "دسته بندی ها", content: <p>بخش دسته بندی</p> }, // اصلاح typo: بحش به بخش
];

export function AppSidebar() {
  const [activeTab, setActiveTab] = useState(navItems[0].title);

  return (
    <div className="flex flex-col w-full ">
      <Sidebar side="right">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>
              <p>داشبورد</p>

              <LucideLayoutDashboard />
            </SidebarGroupLabel>
            <SidebarGroupContent>
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
                      className="w-full text-right py-2 px-4 rounded-md data-[state=active]:bg-gray-200"
                    >
                      {item.title}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      <div className="flex-1 p-4">
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
