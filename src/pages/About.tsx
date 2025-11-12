export function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-pink-50 via-rose-50 to-cream-50 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
            About Us
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-3xl p-12 text-center">
            <p className="text-gray-500 text-lg">
              [Add your about us content here]
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
