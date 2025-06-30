import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTranslations } from 'next-intl';

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const t = useTranslations('LoginPage');

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>{t('cardTitle')}</CardTitle>
          <CardDescription>
            {t('cardDescription')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="email" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="email">{t('emailTab')}</TabsTrigger>
              <TabsTrigger value="mobile">{t('mobileTab')}</TabsTrigger>
            </TabsList>
            <TabsContent value="email">
              <form>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="email">{t('emailLabel')}</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full rounded-md">
                    {t('loginButton')}
                  </Button>
                </div>
              </form>
            </TabsContent>
            <TabsContent value="mobile">
              <form>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="mobile">{t('mobileLabel')}</Label>
                    <Input
                      id="mobile"
                      type="tel"
                      placeholder="+1234567890"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full rounded-md">
                    {t('loginButton')}
                  </Button>
                </div>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
