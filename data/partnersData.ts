export interface Partner {
    id: string;
    name: string;
    logoUrl: string;
    description: string;
    website: string;
    category: 'Technologie' | 'Environnement' | 'Education' | 'Institutionnel';
}

export const partnersData: Partner[] = [
    {
        id: 'sayna',
        name: 'Sayna',
        logoUrl: 'https://i.imgur.com/u5aJVbO.png', // Placeholder logo
        description: 'Sayna est une plateforme EdTech qui forme aux métiers du numérique en Afrique via une méthode de formation innovante inspirée des jeux vidéo. Ils sont un partenaire clé pour le développement des compétences technologiques de nos membres.',
        website: 'https://www.sayna.io/',
        category: 'Education'
    },
    {
        id: 'unicef',
        name: 'UNICEF',
        logoUrl: 'https://i.imgur.com/sC5O7P7.png', // Placeholder logo
        description: "L'UNICEF travaille dans certains des endroits les plus difficiles du monde, pour atteindre les enfants les plus défavorisés. Ils collaborent avec FRESHYX sur des projets visant à sensibiliser les jeunes aux questions environnementales.",
        website: 'https://www.unicef.org/',
        category: 'Institutionnel'
    },
    {
        id: 'green-innov',
        name: 'Green Innovations',
        logoUrl: 'https://i.imgur.com/8F8Zz0y.png', // Placeholder logo
        description: 'Une startup dédiée au développement de solutions technologiques durables pour la gestion des déchets et des énergies renouvelables. Ils offrent des opportunités de stage et de projet pour nos membres.',
        website: '#',
        category: 'Technologie'
    },
    {
        id: 'eco-warriors',
        name: 'Eco Warriors Foundation',
        logoUrl: 'https://i.imgur.com/Kz4Y5xP.png', // Placeholder logo
        description: 'Une ONG locale axée sur le reboisement et la conservation de la biodiversité. FRESHYX et Eco Warriors organisent conjointement des campagnes de plantation d\'arbres et des ateliers de sensibilisation.',
        website: '#',
        category: 'Environnement'
    }
];
