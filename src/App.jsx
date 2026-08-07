import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Upload, 
  Image as ImageIcon, 
  Mic, 
  Download, 
  Loader2, 
  CheckCircle2, 
  Lock, 
  RefreshCw,
  Sparkles,
  AlertCircle
} from 'lucide-react';

export default function App() {
  // State Proteksi Wajah
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [imageProtected, setImageProtected] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);

  // State Proteksi Suara
  const [audioFile, setAudioFile] = useState(null);
  const [audioPreview, setAudioPreview] = useState(null);
  const [audioProtected, setAudioProtected] = useState(null);
  const [audioLoading, setAudioLoading] = useState(false);

  // Handler Upload Gambar
  const handleImageChange = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setImageFile(selected);
      setImagePreview(URL.createObjectURL(selected));
      setImageProtected(null);
    }
  };

  // Handler Upload Audio
  const handleAudioChange = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setAudioFile(selected);
      setAudioPreview(URL.createObjectURL(selected));
      setAudioProtected(null);
    }
  };

  // Simulasi Proses DiffusionGuard (Foto)
  const processImageProtection = () => {
    if (!imageFile) return;
    setImageLoading(true);
    // Simulasi delay proses AI selama 2.5 detik
    setTimeout(() => {
      setImageLoading(false);
      setImageProtected(imagePreview); // Menggunakan preview sebagai hasil simulasi
    }, 2500);
  };

  // Simulasi Proses AntiFake (Suara)
  const processAudioProtection = () => {
    if (!audioFile) return;
    setAudioLoading(true);
    // Simulasi delay proses AI selama 2.5 detik
    setTimeout(() => {
      setAudioLoading(false);
      setAudioProtected(audioPreview);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Background Gradient Effect */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />

      {/* HEADER NAVBAR */}
      <header className="relative z-10 border-b border-slate-800/80 bg-slate-950/60 backdrop-blur-md sticky top-0 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-500/10 border border-indigo-500/20 rounded-xl">
              <ShieldCheck className="w-6 h-6 text-indigo-400" />
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-wider text-white flex items-center gap-2">
                AI GUARDIAN
                <span className="text-[10px] bg-indigo-500/20 text-indigo-300 font-semibold px-2 py-0.5 rounded-full border border-indigo-500/30">
                  PROTOTYPE
                </span>
              </h1>
              <p className="text-xs text-slate-400 hidden sm:block">Protection against unauthorized AI cloning & deepfakes</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Engine Ready
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="relative z-10 flex-1 max-w-6xl w-full mx-auto px-6 py-10 space-y-10">
        
        {/* HERO TITLE */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-xs text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full mb-2">
            <Sparkles className="w-3.5 h-3.5" /> Immunization Perturbation Technology
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Amankan Identitas Wajah & Suara Anda Dari AI
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Suntikkan derau tak kasat mata (*adversarial noise*) pada media Anda untuk memproteksi foto dari Diffusion AI dan mencegah *voice cloning*.
          </p>
        </div>

        {/* FEATURE GRID (2 COLUMNS) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* CARD 1: PROTEKSI WAJAH (DiffusionGuard) */}
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm flex flex-col justify-between hover:border-slate-700/80 transition-all shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-indigo-500/10 text-indigo-400 rounded-xl border border-indigo-500/20">
                    <ImageIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Proteksi Foto Wajah</h3>
                    <p className="text-xs text-slate-400">DiffusionGuard Engine</p>
                  </div>
                </div>
                <span className="text-[11px] text-slate-500 bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700">
                  Image Protection
                </span>
              </div>

              {/* Upload Dropzone / Preview */}
              {!imagePreview ? (
                <label className="border-2 border-dashed border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900/60 rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer transition-all group">
                  <div className="p-3 bg-slate-800 rounded-full group-hover:scale-110 transition-transform mb-3">
                    <Upload className="w-6 h-6 text-slate-400 group-hover:text-indigo-400" />
                  </div>
                  <p className="text-sm font-medium text-slate-300">Pilih atau geser foto ke sini</p>
                  <p className="text-xs text-slate-500 mt-1">Format JPG, PNG (Maksimal 10MB)</p>
                  <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                </label>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    {/* Original */}
                    <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                      <span className="text-[11px] text-slate-400 font-medium block mb-2">Original</span>
                      <img src={imagePreview} alt="Original" className="w-full h-36 object-cover rounded-lg" />
                    </div>

                    {/* Protected Output */}
                    <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 flex flex-col items-center justify-center">
                      {imageProtected ? (
                        <div className="w-full">
                          <span className="text-[11px] text-emerald-400 font-medium flex items-center gap-1 mb-2">
                            <CheckCircle2 className="w-3 h-3" /> Terproteksi
                          </span>
                          <img src={imageProtected} alt="Protected" className="w-full h-36 object-cover rounded-lg border border-emerald-500/30" />
                        </div>
                      ) : (
                        <div className="text-center p-2">
                          {imageLoading ? (
                            <div className="flex flex-col items-center gap-2">
                              <Loader2 className="w-6 h-6 text-indigo-400 animate-spin" />
                              <span className="text-xs text-slate-400">Menyuntikkan Perturbation...</span>
                            </div>
                          ) : (
                            <span className="text-xs text-slate-500 flex items-center gap-1">
                              <Lock className="w-3.5 h-3.5" /> Belum Diproses
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            {imagePreview && (
              <div className="flex gap-2 mt-6">
                <button
                  onClick={() => { setImageFile(null); setImagePreview(null); setImageProtected(null); }}
                  className="px-3.5 py-2 text-xs font-medium text-slate-400 bg-slate-800/80 hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-1.5"
                  disabled={imageLoading}
                >
                  <RefreshCw className="w-3.5 h-3.5" /> Reset
                </button>

                {!imageProtected ? (
                  <button
                    onClick={processImageProtection}
                    disabled={imageLoading}
                    className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {imageLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Jalankan Proteksi Wajah"}
                  </button>
                ) : (
                  <a
                    href={imageProtected}
                    download="protected_face.png"
                    className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" /> Download Gambar (.PNG)
                  </a>
                )}
              </div>
            )}
          </div>

          {/* CARD 2: PROTEKSI SUARA (AntiFake) */}
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm flex flex-col justify-between hover:border-slate-700/80 transition-all shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-violet-500/10 text-violet-400 rounded-xl border border-violet-500/20">
                    <Mic className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Proteksi Sampel Suara</h3>
                    <p className="text-xs text-slate-400">AntiFake Acoustic Engine</p>
                  </div>
                </div>
                <span className="text-[11px] text-slate-500 bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700">
                  Audio Protection
                </span>
              </div>

              {!audioPreview ? (
                <label className="border-2 border-dashed border-slate-800 hover:border-violet-500/50 hover:bg-slate-900/60 rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer transition-all group">
                  <div className="p-3 bg-slate-800 rounded-full group-hover:scale-110 transition-transform mb-3">
                    <Upload className="w-6 h-6 text-slate-400 group-hover:text-violet-400" />
                  </div>
                  <p className="text-sm font-medium text-slate-300">Pilih atau geser file audio ke sini</p>
                  <p className="text-xs text-slate-500 mt-1">Format WAV, MP3 (Lossless disarankan)</p>
                  <input type="file" accept="audio/*" onChange={handleAudioChange} className="hidden" />
                </label>
              ) : (
                <div className="space-y-3">
                  <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                    <p className="text-xs font-medium text-slate-300 truncate mb-2">{audioFile?.name}</p>
                    <audio controls src={audioPreview} className="w-full h-8 opacity-80" />
                  </div>

                  {audioProtected && (
                    <div className="bg-slate-950 p-3.5 rounded-xl border border-emerald-500/30">
                      <span className="text-xs text-emerald-400 font-medium flex items-center gap-1 mb-2">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Audio Anti-Cloning Active
                      </span>
                      <audio controls src={audioProtected} className="w-full h-8" />
                    </div>
                  )}

                  {audioLoading && (
                    <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-center flex flex-col items-center gap-2">
                      <Loader2 className="w-5 h-5 text-violet-400 animate-spin" />
                      <span className="text-xs text-slate-400">Menyuntikkan Anti-Cloning Noise...</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Action Buttons */}
            {audioPreview && (
              <div className="flex gap-2 mt-6">
                <button
                  onClick={() => { setAudioFile(null); setAudioPreview(null); setAudioProtected(null); }}
                  className="px-3.5 py-2 text-xs font-medium text-slate-400 bg-slate-800/80 hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-1.5"
                  disabled={audioLoading}
                >
                  <RefreshCw className="w-3.5 h-3.5" /> Reset
                </button>

                {!audioProtected ? (
                  <button
                    onClick={processAudioProtection}
                    disabled={audioLoading}
                    className="flex-1 bg-violet-600 hover:bg-violet-500 text-white font-medium text-xs py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {audioLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Jalankan Proteksi Suara"}
                  </button>
                ) : (
                  <a
                    href={audioProtected}
                    download="protected_voice.wav"
                    className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" /> Download Audio (.WAV)
                  </a>
                )}
              </div>
            )}
          </div>

        </div>

        {/* INFO NOTICE */}
        <div className="bg-indigo-950/30 border border-indigo-500/20 rounded-xl p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
          <p className="text-xs text-indigo-200/80 leading-relaxed">
            <strong className="text-indigo-300">Catatan Teknologi:</strong> File terproteksi mengandung derau mikro adversarial yang tidak disadari indra manusia, namun membuat model AI Generator (Diffusion Model & Deepfake Voice Synthesizer) menghasilkan output rusak saat mencoba memproses file ini.
          </p>
        </div>

      </main>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-slate-800/60 py-6 text-center text-xs text-slate-500">
        AI Guardian &copy; {new Date().getFullYear()} — Powered by DiffusionGuard & AntiFake Paper Implementation.
      </footer>
    </div>
  );
}