import * as React from "react";
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArtboardIcon,
  LifebuoyIcon,
  Compass01Icon,
  PieChartIcon,
  SentIcon,
} from "@hugeicons/core-free-icons"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarProvider,
} from "@/registry/dga/ui/sidebar";

const projects = [
  {
    name: "Design Engineering",
    url: "#",
    icon: ArtboardIcon,
    badge: "24",
  },
  {
    name: "Sales & Marketing",
    url: "#",
    icon: PieChartIcon,
    badge: "12",
  },
  {
    name: "Travel",
    url: "#",
    icon: Compass01Icon,
    badge: "3",
  },
  {
    name: "Support",
    url: "#",
    icon: LifebuoyIcon,
    badge: "21",
  },
  {
    name: "Feedback",
    url: "#",
    icon: SentIcon,
    badge: "8",
  },
];

// Dummy fetch function
async function fetchProjects() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return projects;
}

export default function AppSidebar() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Projects</SidebarGroupLabel>
            <SidebarGroupContent>
              <React.Suspense fallback={<NavProjectsSkeleton />}>
                <NavProjects />
              </React.Suspense>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
}

function NavProjectsSkeleton() {
  return (
    <SidebarMenu>
      {Array.from({ length: 5 }).map((_, index) => (
        <SidebarMenuItem key={index}>
          <SidebarMenuSkeleton showIcon />
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}

async function NavProjects() {
  const projects = await fetchProjects();

  return (
    <SidebarMenu>
      {projects.map((project) => (
        <SidebarMenuItem key={project.name}>
          <SidebarMenuButton asChild>
            <a href={project.url}>
              <HugeiconsIcon icon={project.icon} />
              <span>{project.name}</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
