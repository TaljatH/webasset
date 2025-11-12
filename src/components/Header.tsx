import { Search, ShoppingBag, User, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";

interface HeaderProps {
  cartItemCount: number;
  onNavigate: (page: string) => void;
  onCartClick: () => void;
}

export function Header({
  cartItemCount,
  onNavigate,
  onCartClick,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    //MenuBar
    <header className=" top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <button
            onClick={() => onNavigate("home")}
            className="shrink-0 transition-opacity hover:opacity-70"
          >
            <div className="flex items-center gap-2">
              <span className="text-xl tracking-tight">*Store Name*</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => onNavigate("home")}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => onNavigate("skincare")}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Skincare
            </button>
            <button
              onClick={() => onNavigate("makeup")}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Makeup
            </button>
            <button
              onClick={() => onNavigate("collections")}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Collections
            </button>
          </nav>

          {/* Search and Actions */}
          <div className="flex items-center gap-4">
            {/* Search Bar - Hidden on mobile */}
            <div className="hidden lg:flex items-center relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-10 w-64 border-gray-200 focus:border-pink-300"
              />
            </div>

            {/* User Icon */}
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex text-gray-700"
            >
              <User className="w-5 h-5" />
            </Button>

            {/* Cart Icon */}
            <Button
              variant="ghost"
              size="icon"
              onClick={onCartClick}
              className="relative text-gray-700"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4 flex flex-col gap-3">
            <button
              onClick={() => {
                onNavigate("home");
                setMobileMenuOpen(false);
              }}
              className="text-gray-700 hover:text-gray-900 transition-colors text-left"
            >
              Home
            </button>
            <button
              onClick={() => {
                onNavigate("shop");
                setMobileMenuOpen(false);
              }}
              className="text-gray-700 hover:text-gray-900 transition-colors text-left"
            >
              Shop
            </button>
            <button
              onClick={() => {
                onNavigate("skincare");
                setMobileMenuOpen(false);
              }}
              className="text-gray-700 hover:text-gray-900 transition-colors text-left"
            >
              Skincare
            </button>
            <button
              onClick={() => {
                onNavigate("makeup");
                setMobileMenuOpen(false);
              }}
              className="text-gray-700 hover:text-gray-900 transition-colors text-left"
            >
              Makeup
            </button>
            <button
              onClick={() => {
                onNavigate("collections");
                setMobileMenuOpen(false);
              }}
              className="text-gray-700 hover:text-gray-900 transition-colors text-left"
            >
              Collections
            </button>
            <div className="relative mt-2">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-10 border-gray-200 focus:border-pink-300"
              />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}