"use client";

import Link from "next/link";

function Logo() {
  return (
    <div className="logo-wrap" aria-label="PQC Vault logo">
      <svg viewBox="0 0 1254 1254" role="img" aria-labelledby="title desc">
        <title id="title">PQC Vault logo</title>
        <desc id="desc">
          A blue to purple geometric monogram with a central keyhole on a dark background.
        </desc>
        <defs>
          <linearGradient id="mainGrad" x1="405" y1="360" x2="860" y2="900" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#6f8cff" />
            <stop offset="48%" stopColor="#8b79ff" />
            <stop offset="100%" stopColor="#b06dff" />
          </linearGradient>
          <linearGradient id="keyGrad" x1="610" y1="560" x2="650" y2="700" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#9d7cff" />
            <stop offset="100%" stopColor="#7f66ea" />
          </linearGradient>
          <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="softGlow" x="-35%" y="-35%" width="170%" height="170%">
            <feGaussianBlur stdDeviation="8" />
          </filter>
        </defs>

        <g opacity="0.18" filter="url(#softGlow)">
          <path d="M 404 507 L 404 758 L 451 785 L 451 724 L 542 670 L 548 662 L 549 569 L 522 554 L 502 567 L 502 647 L 451 677 L 452 534 L 628 428 L 793 526 L 707 578 L 707 698 L 714 778 L 761 806 L 854 751 L 852 697 L 756 753 L 752 695 L 752 600 L 817 561 L 853 561 L 854 507 L 631 373 Z" fill="url(#mainGrad)" />
          <path d="M 488 755 L 488 808 L 628 889 L 712 840 L 793 887 L 837 863 L 712 788 L 628 837 Z" fill="url(#mainGrad)" />
          <path d="M 623 566 L 609 573 L 599 589 L 603 611 L 618 624 L 605 687 L 651 688 L 638 624 L 655 609 L 658 589 L 644 570 Z" fill="url(#keyGrad)" />
        </g>

        <g filter="url(#glow)">
          <path d="M 404 507 L 404 758 L 451 785 L 451 724 L 542 670 L 548 662 L 549 569 L 522 554 L 502 567 L 502 647 L 451 677 L 452 534 L 628 428 L 793 526 L 707 578 L 707 698 L 714 778 L 761 806 L 854 751 L 852 697 L 756 753 L 752 695 L 752 600 L 817 561 L 853 561 L 854 507 L 631 373 Z" fill="url(#mainGrad)" />
          <path d="M 488 755 L 488 808 L 628 889 L 712 840 L 793 887 L 837 863 L 712 788 L 628 837 Z" fill="url(#mainGrad)" />
          <path d="M 623 566 L 609 573 L 599 589 L 603 611 L 618 624 L 605 687 L 651 688 L 638 624 L 655 609 L 658 589 L 644 570 Z" fill="url(#keyGrad)" />
          <circle cx="631" cy="594" r="33" fill="url(#keyGrad)" />
          <path d="M 617 622 L 645 622 L 656 688 L 606 688 Z" fill="url(#keyGrad)" />
        </g>

        <g opacity="0.18">
          <path
            d="M 404 507 L 404 758 L 451 785 L 451 724 L 542 670 L 548 662 L 549 569 L 522 554 L 502 567 L 502 647 L 451 677 L 452 534 L 628 428 L 793 526 L 707 578 L 707 698 L 714 778 L 761 806 L 854 751 L 852 697 L 756 753 L 752 695 L 752 600 L 817 561 L 853 561 L 854 507 L 631 373 Z"
            fill="none"
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

type NavLinkItem = {
  label: string;
  href: string;
};

type NavbarProps = {
  links?: NavLinkItem[];
};

export default function Navbar({
  links = [
    { label: "Docs", href: "/docs" },
    { label: "Download", href: "/download" },
  ],
}: NavbarProps) {
  return (
    <nav className="navbar">
      <div className="logo">
        <Logo />
      </div>

      <div className="nav-links">
        {links.map((link) => (
          <Link key={`${link.label}-${link.href}`} href={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}