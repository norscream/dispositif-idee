
import { Mail } from "lucide-react";

export const ContactInfo = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-8 space-y-2">
      <div className="flex items-center">
        <Mail className="h-6 w-6 text-primary mr-3" />
        <span className="text-gray-600">projet.idee@ac-lille.fr</span>
      </div>
      <div className="flex items-center">
        <Mail className="h-6 w-6 text-primary mr-3" />
        <span className="text-gray-600">projet.idee@ac-amiens.fr</span>
      </div>
    </div>
  );
};
