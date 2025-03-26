import { ArrowRight, Building2, Package } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export const AuthPage = () => {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => setIsLoading(false), 1500)
  }

  return (
    <div className="flex min-h-screen bg-background">
      {/* Left side - decorative */}
      <div className="hidden w-1/2 bg-gradient-to-br from-primary/90 to-primary/40 lg:block">
        <div className="flex h-full flex-col items-center justify-center px-8">
          <div className="relative">
            <div className="absolute -left-16 -top-16 h-32 w-32 rounded-full bg-primary/20"></div>
            <div className="absolute -right-16 -bottom-16 h-32 w-32 rounded-full bg-primary/20"></div>
            <div className="relative z-10 flex items-center gap-3 rounded-xl bg-white/10 p-4 backdrop-blur-sm">
              <Package className="h-10 w-10 text-white" />
              <Building2 className="h-10 w-10 text-white" />
              <div className="text-2xl font-bold text-white">Stockz</div>
            </div>
          </div>
          <div className="mt-12 max-w-md text-center text-white/90">
            <h2 className="text-2xl font-bold">
              Gerencie seu estoque com facilidade
            </h2>
            <p className="mt-4 text-white/80">
              Otimize suas operações, acompanhe o estoque em tempo real e tome
              decisões baseadas em dados com nossa solução ERP completa.
            </p>
          </div>

          {/* Decorative elements */}
          <div className="mt-12 grid grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="h-16 w-16 rounded-lg bg-white/10 backdrop-blur-sm"
                style={{
                  transform: `rotate(${i * 10}deg)`,
                  opacity: 0.7 - i * 0.1,
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Right side - login form */}
      <div className="flex w-full items-center justify-center p-4 lg:w-1/2">
        <Card className="mx-auto w-full max-w-md border-none bg-background shadow-none">
          <CardHeader className="space-y-2">
            <div className="flex lg:hidden">
              <div className="flex items-center gap-2 rounded-lg bg-primary p-2 text-primary-foreground">
                <Package className="h-5 w-5" />
                <Building2 className="h-5 w-5" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold">
              Bem-vindo de volta
            </CardTitle>
            <CardDescription>
              Digite suas credenciais para acessar seu painel
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  E-mail
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="nome@empresa.com"
                  className="h-11 rounded-md border-muted-foreground/20 transition-all focus:border-primary focus:ring-1 focus:ring-primary"
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-sm font-medium">
                    Senha
                  </Label>
                  <Link
                    to="/forgot-password"
                    className="text-xs text-primary transition-colors hover:text-primary/80"
                  >
                    Esqueceu a senha?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  className="h-11 rounded-md border-muted-foreground/20 transition-all focus:border-primary focus:ring-1 focus:ring-primary"
                  required
                />
              </div>
              <div className="flex items-center space-x-2 pt-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm font-normal">
                  Lembrar por 30 dias
                </Label>
              </div>
              <Button
                type="submit"
                className="mt-2 h-11 w-full gap-2 rounded-md text-base transition-all hover:gap-3"
                disabled={isLoading}
              >
                {isLoading ? 'Entrando...' : 'Entrar'}
                {!isLoading && <ArrowRight className="h-4 w-4" />}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
