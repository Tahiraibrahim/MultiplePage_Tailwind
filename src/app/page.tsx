import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Welcome to Our Website</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card>
          <h2 className="text-xl font-semibold mb-4">Service One</h2>
          <p className="text-gray-600 mb-4">Description of our first service offering.</p>
          <Button>Learn More</Button>
        </Card>
        {/* Similar cards for other services */}
      </div>
    </div>
  )
}