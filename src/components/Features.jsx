import React from 'react';

function Features() {
  const badges = [
    'Performant', 'Accessible', 'Secure', 'Interactive', 'Scalable', 'User Friendly',
    'Responsive', 'Maintainable', 'Search Optimized', 'Usable', 'Reliable', 'Modular',
    'Clean', 'Intuitive', 'Robust', 'Efficient', 'Seamless', 'Cross-Platform',
    'Optimized', 'Consistent', 'Fast', 'Customizable', 'Modern', 'Elegant',
    'Future-Proof', 'API-Driven', 'Minimalist'
  ];
  const rainbowColors = [
    'text-red-500', 'text-orange-500', 'text-yellow-400',
    'text-green-500', 'text-blue-500', 'text-indigo-500', 'text-purple-500',
  ];

  return (
    <div className="group overflow-hidden w-full border rounded-lg lg:py-2 lg:mt-20">
      <div className="whitespace-nowrap overflow-hidden">
        <div className="inline-flex animate-[var(--animate-slide-right)] group-hover:animate-none">
          {badges.map((badge, index) => (
            <span key={index} className={`${rainbowColors[index % rainbowColors.length]} text-xl font-medium px-3 py-1 rounded-full mx-1`}>
              {badge}
            </span>
          ))}
          {badges.map((badge, index) => (
            <span key={`dup-${index}`} className={`${rainbowColors[index % rainbowColors.length]} text-xl font-medium px-3 py-1 rounded-full mx-1`}>
              {badge}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
