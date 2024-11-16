"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className="nes-container is-rounded"
      style={{ backgroundColor: "#fff", marginBottom: "20px" }}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/placeholder.svg?height=40&width=40"
            alt="NPC.ai Logo"
            width={40}
            height={40}
            className="nes-avatar is-rounded"
          />
          <span className="nes-text is-primary ml-2 text-xl">NPC.ai</span>
        </div>
        <div className="hidden sm:flex items-center space-x-4">
          <Link href="/create" className="nes-btn is-primary">
            Create Agent
          </Link>
          <Link href="/marketplace" className="nes-btn is-success">
            Marketplace
          </Link>
          <Link href="/about" className="nes-btn is-warning">
            About
          </Link>
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="nes-btn sm:hidden"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>
      {isMenuOpen && (
        <div className="mt-4 sm:hidden">
          <Link href="/create" className="nes-btn is-primary block w-full mb-2">
            Create Agent
          </Link>
          <Link
            href="/marketplace"
            className="nes-btn is-success block w-full mb-2"
          >
            Marketplace
          </Link>
          <Link href="/about" className="nes-btn is-warning block w-full">
            About
          </Link>
        </div>
      )}
    </nav>
  );
}
