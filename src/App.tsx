import MovieDetails from './views/movies/MovieDetail'
import Login from './views/auth/Login'
import Register from './views/auth/Register'
import Home from './views/landing/Home'
import Screenings from './views/screenings/Screenings'
import Layout from './views/layout/Layout'
import Booking from './views/booking/Booking'
import MyBookings from './views/profile/MyBookings'
import { Toaster } from '@/components/ui/sonner'
import { AddMovieModal } from './views/landing/_components/AddMovieModal'
import { ThemeProvider } from '@/components/ui/theme-provider'

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <Layout>
        <div className="space-y-20">
          <div className="border-b pb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Home Page</h2>
            <Home />
          </div>
          
          <div className="border-b pb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Movie Details Page</h2>
            <MovieDetails />
          </div>
          
          <div className="border-b pb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Screenings Page</h2>
            <Screenings />
          </div>
          
          <div className="border-b pb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Booking Page</h2>
            <Booking />
          </div>
          
          <div className="border-b pb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">My Bookings Page</h2>
            <MyBookings />
          </div>
          
          <div className="border-b pb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Login Page</h2>
            <Login />
          </div>
          
          <div className="border-b pb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Register Page</h2>
            <Register />
          </div>

          <div className="border-b pb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Add Movie Page</h2>
            <AddMovieModal />
          </div>
        </div>
      </Layout>
      <Toaster />
    </ThemeProvider>
  )
}

export default App
