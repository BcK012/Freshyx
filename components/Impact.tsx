import React from 'react';

const FlagIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#FBBF24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6H8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
  </svg>
);

const ProjectsIcon: React.FC = () => (
    <svg className="h-12 w-12" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Large Gear */}
      <path d="M43.2963 38.0494C43.2963 41.3413 40.6729 43.9647 37.381 43.9647C34.0891 43.9647 31.4658 41.3413 31.4658 38.0494C31.4658 34.7575 34.0891 32.1341 37.381 32.1341C40.6729 32.1341 43.2963 34.7575 43.2963 38.0494Z" stroke="#0891B2" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M37.3811 32.134V29.2941" stroke="#0891B2" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M37.3811 46.8047V43.9648" stroke="#0891B2" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M32.8223 38.0493H30.0166" stroke="#0891B2" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M44.7451 38.0493H41.9395" stroke="#0891B2" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M34.8086 35.1504L32.8564 33.1982" stroke="#0891B2" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M41.9053 42.2471L39.9531 40.2949" stroke="#0891B2" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M34.8086 40.9482L32.8564 42.9004" stroke="#0891B2" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M41.9053 33.8506L39.9531 35.8028" stroke="#0891B2" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Target */}
      <path d="M25.042 16.5921C27.9157 16.5921 30.2254 14.2824 30.2254 11.4087C30.2254 8.53502 27.9157 6.22534 25.042 6.22534C22.1683 6.22534 19.8586 8.53502 19.8586 11.4087C19.8586 14.2824 22.1683 16.5921 25.042 16.5921Z" stroke="#0891B2" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M25.042 16.592V20.1407" stroke="#0891B2" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M25.042 2.67676V6.22544" stroke="#0891B2" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.3096 11.4087H19.8583" stroke="#0891B2" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M30.2256 11.4087H33.7743" stroke="#0891B2" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M32.0918 19.2998L30.2256 16.5921" stroke="#0891B2" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Clipboard */}
      <path d="M28.332 20.1406H15.6667C14.7462 20.1406 14 20.8868 14 21.8073V39.9328C14 40.8533 14.7462 41.5995 15.6667 41.5995H28.332C29.2525 41.5995 29.9987 40.8533 29.9987 39.9328V21.8073C29.9987 20.8868 29.2525 20.1406 28.332 20.1406Z" stroke="#34D399" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M25.498 24.3892H22.665" stroke="#34D399" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.166 28.6377L20.8327 30.3044L24.166 26.9711" stroke="#34D399" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.166 35.1377L20.8327 36.8044L24.166 33.4711" stroke="#34D399" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

const Impact: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-[#002D25]">Notre impact</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center">
            <FlagIcon />
            <p className="text-6xl font-extrabold text-[#002D25] mt-4">7</p>
            <h3 className="text-xl font-bold mt-2">Pays</h3>
            <p className="text-gray-600">d'intervention</p>
          </div>
          <div className="flex flex-col items-center">
            <ProjectsIcon />
            <p className="text-6xl font-extrabold text-[#002D25] mt-4">5</p>
            <h3 className="text-xl font-bold mt-2">Projets en cours</h3>
            <p className="text-gray-600">Initiatives environnementales en activité.</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-6xl font-extrabold text-[#002D25] mt-4">50+</p>
            <h3 className="text-xl font-bold mt-2">Membres actuels</h3>
            <p className="text-gray-600">Engagés dans notre mission durable</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;