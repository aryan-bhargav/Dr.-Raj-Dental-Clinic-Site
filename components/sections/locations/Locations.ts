export interface Location {
  name: string;
  slug: string;
  href: string;
}

const rawLocations = [
  "Ajronda Chowk","Ashoka Enclave Part 3","Agwanpur","Anangpur Dairy","Ajit Nagar",
  "Ankhir","Ajronda","Ashoka Enclave","Badkhal Chowk","BPTP Parkland","Basantpur",
  "Charmwood Village","Chawla Colony","Dabuwa Colony","Dayal Bagh","Dabua Colony",
  "Dayal Basti","Dav College","Faridpur","Friends Colony","Gandhi Colony","Ghazipur",
  "Gurukul Basti","Gurukul Road","Greenfield Colony","Gopi Colony","Hardware Colony",
  "Independant Kothi","Indraprastha Colony","Ismailpur Road","Jawahar Colony",
  "Jeevan Nagar","Katan Pahari","Kheri Road","Lakkarpur","Mewala Maharajpur",
  "Mujesar","Mathura Road","Neharpar Faridabad","Parvatiya Colony","Raveev Nagar",
  "Sainik Colony","Sector 12 Faridabad","Sector 15 Faridabad","Sector 17 Faridabad",
  "Sector 20 Faridabad","Sector 21 Faridabad","Sector 23 Faridabad","Sector 27 Faridabad",
  "Sector 30 Faridabad","Sector 35 Faridabad","Sector 4 Faridabad","Sector 46 Faridabad",
  "Sector 55 Faridabad","Sector 6 Faridabad","Sector 7 Faridabad","Sector 54 Faridabad",
  "Sector 75 Faridabad","Sector 78 Faridabad","Sector 84 Faridabad","Sector 88 Faridabad",
  "SGM Nagar Faridabad","Suraj Kund Faridabad","Sector 28 Faridabad","Sector 18 Faridabad",
  "Sector 24 Faridabad","Sector 32 Faridabad","Sector 36 Faridabad","Sector 41 Faridabad",
  "Sector 48 Faridabad","Sector 56 Faridabad","Sector 62 Faridabad","Sector 8 Faridabad",
  "Sector 31 Faridabad","Sector 63 Faridabad","Sector 80 Faridabad","Sector 85 Faridabad",
  "Sector 89 Faridabad","Sector 10 Faridabad","Sector 13 Faridabad","Sector 16 Faridabad",
  "Sector 19 Faridabad","Sector 22 Faridabad","Sector 29 Faridabad","Sector 33 Faridabad",
  "Sector 37 Faridabad","Sector 42 Faridabad","Sector 5 Faridabad","Sector 58 Faridabad",
  "Sector 64 Faridabad","Sector 9 Faridabad","Sector 43 Faridabad","Sector 70 Faridabad",
  "Sector 76 Faridabad","Sector 81 Faridabad","Sector 86 Faridabad","Shastri Colony",
  "Surya Nagar","Sector 11 Faridabad","Sector 14 Faridabad","Sector 2 Faridabad",
  "Sector 25 Faridabad","Sector 3 Faridabad","Sector 34 Faridabad","Sector 39 Faridabad",
  "Sector 45 Faridabad","Sector 52 Faridabad","Sector 59 Faridabad","Sector 65 Faridabad",
  "Sector 91 Faridabad","Sector 49 Faridabad","Sector 72 Faridabad","Sector 77 Faridabad",
  "Sector 82 Faridabad","Sector 87 Faridabad","Sehatpur","Spring Field Colony",
  "Tikawali","Vinay Nagar","Yadav Colony",
];

function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

export const LOCATIONS: Location[] = rawLocations.map((name) => ({
  name,
  slug: toSlug(name),
  href: `/dentist-clinic-in-${toSlug(name)}-near-me`,
}));

/** How many chips to show before "Show More" */
export const INITIAL_COUNT = 10;