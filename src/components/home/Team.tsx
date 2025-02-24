import { Users, Mail } from "lucide-react";

const teamMembers = [
  {
    image: "/lovable-uploads/fe9fd95f-f1bb-4ae4-9398-89a620fb046e.png",
    name: "Margot Veiler",
    role: "Chargée de projet Oise",
    email: "margot.veiler@idee.fr",
    position: { top: "70%", left: "30%" }
  },
  {
    image: "/lovable-uploads/001aacb9-ceb3-42e5-9060-efcd1d2ce801.png",
    name: "Anna Guillouard",
    role: "Chargée de projet Amiens",
    email: "anna.guillouard@idee.fr",
    position: { top: "55%", left: "50%" }
  },
  {
    image: "/lovable-uploads/68ecf923-3ab3-47f4-9090-9a9a83d1f3c0.png",
    name: "Pascal Lefevre",
    role: "Chargé de mission Aisne",
    email: "pascal.lefevre@idee.fr",
    position: { top: "70%", left: "75%" }
  },
  {
    image: "/lovable-uploads/d30e3c4d-b90b-4cb3-a2eb-ebbb32b01edd.png",
    name: "Sylvie Zuliani",
    role: "Chargée de mission Valenciennois",
    email: "sylvie.zuliani@idee.fr",
    position: { top: "35%", left: "65%" }
  },
  {
    image: "/lovable-uploads/bb242a05-95e3-4d12-8dfe-564390ea4bd5.png",
    name: "Chloé Clerbout",
    role: "Chargée de mission MEL",
    email: "chloe.clerbout@idee.fr",
    position: { top: "25%", left: "55%" }
  },
  {
    image: "/lovable-uploads/f1165429-3de0-4ed3-b276-91b014ca1e80.png",
    name: "Norman Madani",
    role: "Chargé de mission côte d'opale",
    email: "norman.madani@idee.fr",
    position: { top: "25%", left: "20%" }
  }
];

const newTeamMembers = [
  {
    image: "/lovable-uploads/53127e3b-f7d1-41e0-aa50-b879e49850b7.png",
    name: "Vincent Pouliquen",
    role: "Chef de projet IDEE",
    email: "vincent.pouliquen@idee.fr"
  },
  {
    image: "/lovable-uploads/dc34d90b-85d5-46dd-b9a4-fa1bd0f64f34.png",
    name: "Massine DJOUBI",
    role: "Chargé de projet Mecalive",
    email: "massine.djoubi@idee.fr"
  },
  {
    image: "/lovable-uploads/dc34d90b-85d5-46dd-b9a4-fa1bd0f64f34.png",
    name: "Coline LEROY",
    role: "Chargée de suivi de projet IDEE",
    email: "coline.leroy@idee.fr"
  },
  {
    image: "/lovable-uploads/dc34d90b-85d5-46dd-b9a4-fa1bd0f64f34.png",
    name: "Manon MARTINEZ",
    role: "Chargée de suivi de projet IDEE",
    email: "manon.martinez@idee.fr"
  }
];

const Team = () => {
  return (
    <section id="equipe" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Notre équipe</h2>
        <div className="flex items-center mb-12">
          <Users className="h-6 w-6 text-primary mr-3" />
        </div>

        {/* Section carte et logo */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-16">
          {/* Carte avec les membres sur la gauche */}
          <div className="w-full md:w-2/3">
            <div className="relative">
              <img 
                src="/lovable-uploads/26f2746a-4702-43bc-9634-c9b3340c20ef.png" 
                alt="Carte de la région" 
                className="w-full"
              />
              
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                  style={{ 
                    top: member.position.top,
                    left: member.position.left
                  }}
                >
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg bg-white">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white rounded-lg shadow-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <h3 className="font-semibold text-sm text-center">{member.name}</h3>
                      <p className="text-gray-600 text-xs text-center mb-2">{member.role}</p>
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center justify-center text-xs text-primary hover:text-primary-dark transition-colors"
                      >
                        <Mail className="h-3 w-3 mr-1" />
                        Contact
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Logo et nouveaux membres à droite */}
          <div className="w-full md:w-1/3 md:-mt-12">
            <img 
              src="/lovable-uploads/34d9cf68-0334-436b-8ace-aca6e8e890f1.png"
              alt="Logo IDEE"
              className="w-full max-w-[280px] mx-auto mb-8"
            />

            {/* Nouveaux membres d'équipe en colonne */}
            <div className="space-y-4">
              {newTeamMembers.map((member, index) => (
                <div key={index} className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200 shadow-sm">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover bg-gray-100"
                      />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <p className="text-gray-600 text-sm">{member.role}</p>
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center text-primary hover:text-primary-dark transition-colors mt-2 text-sm"
                    >
                      <Mail className="h-4 w-4 mr-1" />
                      Contact
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
