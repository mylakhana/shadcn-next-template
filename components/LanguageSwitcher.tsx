"use client";

import { useRouter } from 'next/navigation';
import { ChangeEvent } from 'react';

export default function LanguageSwitcher() {
  const router = useRouter();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = event.target.value;
    // Set a cookie or use local storage to store the selected locale
    // For simplicity, we'll use a simple cookie setting here.
    // In a real application, you might use a library like 'js-cookie' or a more robust solution.
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`; // 1 year expiry
    router.refresh(); // Reload the page to apply the new locale
  };

  // You might want to read the current locale from the cookie to set the default value
  // For now, we'll just default to 'en' or read it from the URL if available.
  const currentLocale = document.cookie.split('; ').find(row => row.startsWith('NEXT_LOCALE='))?.split('=')[1] || 'en';

  return (
    <select onChange={handleChange} value={currentLocale}>
      <option value="en">English</option>
      <option value="ar">العربية</option>
    </select>
  );
}
