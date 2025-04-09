import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import React from "react";

function App() {
  return (
    <SidebarProvider>
      <div className="flex h-full flex-row-reverse">
        <main style={{ flex: 1, padding: "20px" }}>
          <SidebarTrigger />
        </main>

        <AppSidebar />
      </div>
    </SidebarProvider>
  );
}

export default App;
