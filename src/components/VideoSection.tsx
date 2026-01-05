import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { useState, useRef } from "react";
import promoVideo from "@/assets/promo-video.mp4";

export const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="py-20 bg-foreground text-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-foreground to-foreground" />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-primary/30 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-semibold text-primary-foreground">Notre mission</span>
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-background">
              Protéger sa santé et son budget
            </h2>
            
            <div className="space-y-4 text-background/80">
              <p className="text-lg font-medium">
                Courtier en assurance, nous comparons, optimisons et rééquilibrons vos contrats mutuelles et assurance santé.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span className="font-semibold">Prix maîtrisé</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span className="font-semibold">Garanties utiles</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span className="font-semibold">Partenaire des Hôpitaux de France</span>
                </li>
              </ul>
              
              <p className="text-sm opacity-80 pt-4">
                Notre cabinet soutient financièrement les actions de la Fédération Hospitalière de France et de l'ANFIIDE.
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <video
                ref={videoRef}
                src={promoVideo}
                className="w-full aspect-video object-cover"
                loop
                muted={isMuted}
                playsInline
                poster=""
              />
              
              {/* Video overlay with controls */}
              <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/20 transition-colors flex items-center justify-center">
                <button
                  onClick={togglePlay}
                  className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? (
                    <Pause className="w-8 h-8 text-primary-foreground" />
                  ) : (
                    <Play className="w-8 h-8 text-primary-foreground ml-1" />
                  )}
                </button>
              </div>
              
              {/* Mute button */}
              <button
                onClick={toggleMute}
                className="absolute bottom-4 right-4 w-10 h-10 bg-foreground/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-foreground/70 transition-colors"
                aria-label={isMuted ? "Activer le son" : "Couper le son"}
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5 text-background" />
                ) : (
                  <Volume2 className="w-5 h-5 text-background" />
                )}
              </button>
              
              {/* Progress indicator */}
              {isPlaying && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-background/20">
                  <div className="h-full bg-primary animate-pulse" style={{ width: '100%' }} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
