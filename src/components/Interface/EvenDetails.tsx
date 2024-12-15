import { Calendar, Clock, MapPin, Palette } from "lucide-react";
import { birthdayConfig } from "../../config/birthday";

export function EventDetails() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md rounded-lg p-6 pointer-events-auto">
      <div className="grid grid-cols-2 gap-6 text-white">
        <div className="flex items-center gap-3">
          <Calendar className="text-gold" />
          <div>
            <p className="text-sm opacity-70">Date</p>
            <p className="font-medium">{birthdayConfig.event.date}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Clock className="text-gold" />
          <div>
            <p className="text-sm opacity-70">Time</p>
            <p className="font-medium">{birthdayConfig.event.time}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <MapPin className="text-gold" />
          <div>
            <p className="text-sm opacity-70">Venue</p>
            <p className="font-medium">{birthdayConfig.event.venue}</p>
            <p className="text-sm opacity-70">{birthdayConfig.event.address}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Palette className="text-gold" />
          <div>
            <p className="text-sm opacity-70">Theme & Dress Code</p>
            <p className="font-medium">{birthdayConfig.event.theme}</p>
            <p className="text-sm opacity-70">
              {birthdayConfig.event.dresscode}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
