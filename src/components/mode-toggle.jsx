import { Moon, Sun } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/components/theme-provider"
import { useState } from "react"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()
  return (
    
   <div>
    {theme === "light" ? <div className="flex items-center gap-4">
        <span className="text-white">Chế độ sáng</span>
        <div onClick={() => setTheme("dark")}> <Switch id="airplane-mode"  /></div>
       </div>   : <div className="flex items-center gap-4">
        <span>Chế độ tối</span>
        <div onClick={() => setTheme("light")}>
        <Switch id="airplane-mode"  /></div></div>}
   </div>
    
  )
}
