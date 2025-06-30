import { LoginForm } from "@/components/login-form"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import LanguageSwitcher from "@/components/LanguageSwitcher"

export default function Page() {
  return (
    <div className="relative flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="absolute right-4 top-4 flex gap-2">
        <ThemeToggle />
        <LanguageSwitcher />
      </div>
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  )
}
