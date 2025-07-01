import React from 'react';
import { createClient } from '@supabase/supabase-js';
import { getTranslations } from 'next-intl/server';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface Address {
  id: string;
  user_id: string;
  address_line_1: string;
  address_line_2: string | null;
  city: string;
  state: string;
  postal_code: string;
  country: string;
  phone: string | null;
  created_at: string;
  updated_at: string;
}

export default async function AddressBookPage() {
  const t = await getTranslations('AddressBook');
  let addresses: Address[] = [];
  let error: Error | null = null;

  try {
    const { data, error: supabaseError } = await supabase.from('addresses').select('*');
    if (supabaseError) {
      throw supabaseError;
    }
    addresses = data || [];
  } catch (err: any) {
    error = err;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{t('title')}</h1>
      {error && <p className="text-red-500">{t('errorLoading')} {error.message}</p>}
      {
        addresses.length === 0 && !error ? (
          <p>{t('noAddresses')}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {addresses.map((address) => (
              <div key={address.id} className="bg-white p-4 rounded-md shadow-md">
                <p className="font-semibold">{address.address_line_1}</p>
                {address.address_line_2 && <p>{address.address_line_2}</p>}
                <p>{address.city}, {address.state} {address.postal_code}</p>
                <p>{address.country}</p>
                {address.phone && <p>{t('addressDetails.phone')} {address.phone}</p>}
              </div>
            ))}
          </div>
        )
      }
    </div>
  );
}
