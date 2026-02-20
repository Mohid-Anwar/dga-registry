import * as React from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/registry/dga/ui/tabs"

export default function TabsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center border-2 border-gray-300 rounded-lg p-8 max-w-5xl mx-auto">
      <h1 className="mb-8 text-4xl font-bold">Tabs Demo</h1>
      <Tabs defaultValue="account" className="w-full">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
          <TabsTrigger value="fourth">Fourth</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <div className="p-4">Account tab content goes here.</div>
        </TabsContent>
        <TabsContent value="password">
          <div className="p-4">Password tab content goes here.</div>
        </TabsContent>
        <TabsContent value="settings">
          <div className="p-4">Settings tab content goes here.</div>
        </TabsContent>
        <TabsContent value="fourth">
          <div className="p-4">Fourth tab content goes here.</div>
        </TabsContent>
      </Tabs>
    </main>
  )
}
