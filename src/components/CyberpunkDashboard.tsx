import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import cyberpunkBackground from "@/assets/cyberpunk-background.jpg";
import { Zap, AlertTriangle, X, CheckCircle, Activity, Cpu } from "lucide-react";

const CyberpunkDashboard = () => {
  const [tpsCount, setTpsCount] = useState(107598);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTpsCount(prev => prev + Math.floor(Math.random() * 50) + 10);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  const handleSendTx = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: `url(${cyberpunkBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-primary/20 text-xs font-mono matrix-rain"
            style={{
              left: `${i * 5}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            01101001<br/>11010110<br/>10011001<br/>01110101
          </div>
        ))}
      </div>

      {/* Glitch Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 pointer-events-none"></div>

      <div className="relative z-10 p-6 grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-screen">
        {/* Left Panel - Legacy Chains */}
        <div className="space-y-6">
          <div className="terminal-window p-6">
            <h2 className="text-2xl font-bold text-muted-foreground mb-6 cyber-text">
              LEGACY CHAINS
            </h2>
            
            {/* Ethereum */}
            <Card className="bg-destructive/10 border-destructive/30 p-4 mb-4 terminal-scan">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-destructive rounded-full animate-pulse"></div>
                  <span className="font-bold text-destructive">ETHEREUM</span>
                  <X className="w-4 h-4 text-destructive" />
                </div>
                <Badge variant="destructive" className="font-mono">CONGESTED</Badge>
              </div>
              <div className="flex items-center gap-2 text-2xl font-mono">
                <span className="text-destructive cyber-text">15 TPS</span>
                <span className="text-2xl">🐢</span>
              </div>
              <div className="text-xs text-muted-foreground mt-2 font-mono">
                &gt; gas: $45.32 | finality: ~13min | status: laggy
              </div>
              <div className="flex gap-1 mt-2">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-destructive/30 rounded animate-pulse" style={{animationDelay: `${i * 0.2}s`}}></div>
                ))}
              </div>
            </Card>

            {/* Solana */}
            <Card className="bg-warning/10 border-warning/30 p-4 terminal-scan">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-warning rounded-full animate-pulse"></div>
                  <span className="font-bold text-warning">SOLANA</span>
                  <AlertTriangle className="w-4 h-4 text-warning" />
                </div>
                <Badge variant="secondary" className="font-mono bg-warning/20 text-warning">UNSTABLE</Badge>
              </div>
              <div className="flex items-center gap-2 text-2xl font-mono">
                <span className="text-warning cyber-text">2,000 TPS</span>
                <span className="text-2xl">⚡</span>
              </div>
              <div className="text-xs text-muted-foreground mt-2 font-mono">
                &gt; downtime: 24h/mo | dropped: 15% | status: unreliable
              </div>
              <div className="flex gap-1 mt-2">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className={`w-2 h-2 rounded ${i % 3 === 0 ? 'bg-destructive' : 'bg-warning/30'} animate-pulse`} style={{animationDelay: `${i * 0.3}s`}}></div>
                ))}
              </div>
            </Card>

            <div className="text-xs text-muted-foreground font-mono mt-4 opacity-50">
              &gt; legacy_performance.exe has stopped working...
            </div>
          </div>
        </div>

        {/* Right Panel - InfiniSVM */}
        <div className="space-y-6">
          <div className="terminal-window p-6">
            <h1 className="text-4xl font-black text-transparent bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text cyber-text mb-2 neon-glow-accent">
              INFINISVM
            </h1>
            <div className="text-sm text-primary font-mono mb-6">HARDWARE ACCELERATED L1</div>
            
            {/* TPS Counter */}
            <div className="mb-8">
              <div className="text-6xl font-black text-transparent bg-gradient-to-r from-success via-primary to-accent bg-clip-text cyber-text tps-counter neon-glow-success">
                {tpsCount.toLocaleString()} TPS
              </div>
              <div className="text-sm text-success-glow font-mono">
                🔥 BLAZING FAST • REAL-TIME UPDATES
              </div>
            </div>

            {/* Status Indicators */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <Badge className="bg-success/20 text-success border-success/50 p-3 neon-glow-success">
                <CheckCircle className="w-4 h-4 mr-2" />
                Finality: Instant ✅
              </Badge>
              <Badge className="bg-primary/20 text-primary border-primary/50 p-3 neon-glow">
                <Activity className="w-4 h-4 mr-2" />
                Uptime: 100% 🚀
              </Badge>
            </div>

            {/* Console Output */}
            <Card className="bg-background/30 border-success/30 p-3 mb-6 font-mono text-xs backdrop-blur-sm">
              <div className="text-success">
                <span className="text-accent">&gt;</span> tx_hash: 0xc4f3...
                <br />
                <span className="text-accent">&gt;</span> <span className="text-success cyber-text">tx confirmed in 0.12s</span> ⚡
                <br />
                <span className="text-accent">&gt;</span> gas_used: 0.0001 SOL
                <br />
                <span className="text-accent">&gt;</span> status: <span className="text-success">SUCCESS</span>
              </div>
            </Card>

            {/* Send TX Button */}
            <Button 
              variant="holographic" 
              size="lg" 
              className={`w-full py-6 text-2xl ${isAnimating ? 'animate-bounce' : ''}`}
              onClick={handleSendTx}
            >
              <Zap className="w-8 h-8 mr-3" />
              SEND TX
              <div className="ml-3 text-lg">🔥💨</div>
            </Button>

            {/* Hardware Engine */}
            <div className="mt-6 flex items-center gap-3 p-3 bg-accent/10 border border-accent/30 rounded-lg neon-glow-accent">
              <Cpu className="w-6 h-6 text-accent animate-spin" />
              <div>
                <div className="text-accent font-bold cyber-text">Hardware Accelerated Engine</div>
                <div className="text-xs text-muted-foreground font-mono">GPU: RTX 4090 | Cores: 16,384 | Memory: 24GB</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Meme Caption */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <Card className="bg-background/80 border-primary/30 p-4 backdrop-blur-sm neon-glow">
          <p className="text-primary font-mono text-center cyber-text">
            "When your transaction finalizes before the spinner even loads..." 😂
          </p>
        </Card>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/50 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CyberpunkDashboard;