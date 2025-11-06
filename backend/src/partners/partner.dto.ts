export class PartnerDto {
  id: string;
  name: string;
  logoUrl: string;
  description: string;
  website: string;
  category: 'Technologie' | 'Environnement' | 'Education' | 'Institutionnel';
}
