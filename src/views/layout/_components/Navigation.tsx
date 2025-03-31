import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import ThemeToggle from './ThemeToggle'
import { Card } from '@/components/ui/card'

export function Navigation() {
  return (
    <nav className="border-b z-50 shadow-lg rounded-full sticky top-5 mx-auto max-w-6xl w-11/12">
      <Card className="lg:p-0 lg:rounded-full rounded-full lg:shadow-lg shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex lg:flex-row flex-col gap-3 justify-between items-center lg:h-16">
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-xl font-bold">
                Cinema
              </Link>
              <Link to="/screenings" className="text-muted-foreground hover:text-foreground transition-colors">
                Screenings
              </Link>
              <Link to="/movies" className="text-muted-foreground hover:text-foreground transition-colors">
                Movies
              </Link>
              <Link to="/bookings" className="text-muted-foreground hover:text-foreground transition-colors">
                My Bookings
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-muted-foreground">Welcome, User</span>
              <Button variant="outline">
                Logout
              </Button>
              <Link to="/login">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link to="/register">
                <Button>Register</Button>
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </Card>
    </nav>
  )
} 