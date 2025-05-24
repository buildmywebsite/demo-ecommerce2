import { Route, Switch } from 'wouter'
import { Toaster } from '@/components/ui/toaster'
import Home from '@/pages/Home'
import ProductsList from '@/pages/ProductsList'
import ProductDetail from '@/pages/ProductDetail'
import Cart from '@/pages/Cart'
import Checkout from '@/pages/Checkout'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import NotFound from '@/pages/not-found'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/layout/CartDrawer'

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/products" component={ProductsList} />
      <Route path="/product/:id" component={ProductDetail} />
      <Route path="/cart" component={Cart} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  )
}

function App() {
  return (
    <>
      <Header />
      <CartDrawer />
      <main className="min-h-[calc(100vh-64px-200px)]">
        <Router />
      </main>
      <Footer />
      <Toaster />
    </>
  )
}

export default App