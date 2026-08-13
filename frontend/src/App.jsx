import React, { useState, useRef } from 'react';
import {
  ShieldCheck,
  Upload,
  Mic,
  Video,
  Download,
  Loader2,
  CheckCircle2,
  Lock,
  RefreshCw,
  Sparkles,
  AlertCircle,
  Zap,
  ScanFace,
  AudioLines,
  Cpu,
  Shield,
  Activity,
} from 'lucide-react';

export default function App() {
  // =========================
  // STATE PROTEKSI GAMBAR
  // =========================
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [imageProtected, setImageProtected] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);

  // =========================
  // STATE PROTEKSI AUDIO
  // =========================
  const [audioFile, setAudioFile] = useState(null);
  const [audioPreview, setAudioPreview] = useState(null);
  const [audioProtected, setAudioProtected] = useState(null);
  const [audioLoading, setAudioLoading] = useState(false);

  // slider
  const [mode, setMode] = useState("Normal");
  const modes = ['Fast', 'Normal', 'Strong'];


  // =========================
  // UPLOAD IMAGE
  // =========================
  const handleImageChange = (e) => {
    const selected = e.target.files[0];

    if (selected) {
      setImageFile(selected);
      setImagePreview(URL.createObjectURL(selected));
      setImageProtected(null);
    }
  };

  // =========================
  // UPLOAD AUDIO
  // =========================
  const handleAudioChange = (e) => {
    const selected = e.target.files[0];

    if (selected) {
      setAudioFile(selected);
      setAudioPreview(URL.createObjectURL(selected));
      setAudioProtected(null);
    }
  };

  // =========================
  // PROSES GAMBAR
  // =========================
  const processImageProtection = () => {
    if (!imageFile) return;

    setImageLoading(true);

    setTimeout(() => {
      setImageLoading(false);
      setImageProtected(imagePreview);
    }, 2500);
  };

  // =========================
  // PROSES AUDIO
  // =========================
  const processAudioProtection = () => {
    if (!audioFile) return;

    setAudioLoading(true);

    setTimeout(() => {
      setAudioLoading(false);
      setAudioProtected(audioPreview);
    }, 2500);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-100 text-slate-900">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}


<div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">

  {/* BACKGROUND IMAGE */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: "url('/bg3.png')",
    }}
  />

  {/* WHITE GLASS OVERLAY */}
  

  {/* COLOR GRADIENT */}
  <div className="
    absolute inset-0
    bg-gradient-to-br
    from-blue-100/40
    via-white/10
    to-violet-200/40
  " />

  {/* BLUE GLOW */}
  <div className="
    absolute
    -top-40
    -left-40
    w-[500px]
    h-[500px]
    bg-blue-400/30
    rounded-full
    blur-[120px]
    animate-pulse
  " />

  {/* VIOLET GLOW */}
  <div className="
    absolute
    top-1/3
    -right-40
    w-[500px]
    h-[500px]
    bg-violet-400/25
    rounded-full
    blur-[130px]
    animate-pulse
  " />

  {/* CYAN GLOW */}
  <div className="
    absolute
    -bottom-40
    left-1/3
    w-[500px]
    h-[500px]
    bg-cyan-400/25
    rounded-full
    blur-[120px]
  " />

  {/* PINK GLOW */}
  <div className="
    absolute
    top-[15%]
    left-[45%]
    w-[350px]
    h-[350px]
    bg-pink-400/20
    rounded-full
    blur-[120px]
    animate-pulse
  " />

  {/* GRID */}
  <div
    className="absolute inset-0 opacity-[0.08]"
    style={{
      backgroundImage: `
        linear-gradient(rgba(80,100,180,0.25) 1px, transparent 1px),
        linear-gradient(90deg, rgba(80,100,180,0.25) 1px, transparent 1px)
      `,
      backgroundSize: '45px 45px',
    }}
  />

  {/* FLOATING LIGHT 1 */}
  <div className="
    absolute
    top-32
    left-[15%]
    w-2
    h-2
    bg-blue-500
    rounded-full
    blur-[1px]
    animate-ping
  " />

  {/* FLOATING LIGHT 2 */}
  <div className="
    absolute
    top-[55%]
    left-[8%]
    w-1.5
    h-1.5
    bg-cyan-500
    rounded-full
    animate-pulse
  " />

  {/* FLOATING LIGHT 3 */}
  <div className="
    absolute
    top-[25%]
    right-[12%]
    w-2
    h-2
    bg-violet-500
    rounded-full
    blur-[1px]
    animate-ping
  " />

  {/* FLOATING LIGHT 4 */}
  <div className="
    absolute
    bottom-[20%]
    right-[20%]
    w-1.5
    h-1.5
    bg-pink-500
    rounded-full
    animate-pulse
  " />

</div>

      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/60 backdrop-blur-2xl">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">

            <div className="relative">

              <div className="absolute inset-0 bg-indigo-500 blur-xl opacity-40" />

              <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-br from-indigo-500/30 to-violet-500/20 border border-indigo-400/30 flex items-center justify-center shadow-lg shadow-indigo-500/10">

                <img src='logo Smk Pertiwi 2.png'  className="w-6 h-8" />

              </div>

            </div>

            <div>
              <div className="flex items-center gap-2">

                <h1 className="font-bold tracking-wider text-white">
                  YourShield AI
                </h1>

                <span className="text-[9px] px-2 py-0.5 rounded-full bg-indigo-500/15 text-white border border-indigo-400/20">
                  Tools
                </span>

              </div>

              <p className="text-[11px] text-blue-500 hidden sm:block">
                AI Identity Protection System
              </p>

            </div>

          </div>

          {/* Engine Status */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-emerald-500/5 border border-emerald-400/20">

            <div className="relative">

              <div className="absolute inset-0 bg-emerald-400 blur-md opacity-60" />

              <span className="relative block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

            </div>

            <span className="text-[11px] font-medium text-emerald-300">
              Engine Ready
            </span>

          </div>

        </div>

      </header>

      {/* =====================================================
          MAIN
      ====================================================== */}

      <main className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 py-14">

        {/* HERO */}

        <section className="text-center max-w-3xl mx-auto mb-14">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-indigo-300 text-xs mb-6 backdrop-blur-xl">

            <Sparkles className="w-4 h-4" />

            <span>IMMUNIZATION PERTURBATION TECHNOLOGY</span>

          </div>

          {/* Title */}

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">

            Amankan Identitas

            <span className="block mt-2 bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Wajah & Suara Anda
            </span>

            <span className="block text-white">
              Dari Ancaman AI
            </span>

          </h2>

          <p className="mt-6 text-sm sm:text-base text-white leading-relaxed max-w-2xl mx-auto">

            Lindungi media digital Anda menggunakan teknologi
            <span className="text-indigo-300"> adversarial protection </span>
            untuk membantu mencegah penyalahgunaan identitas oleh sistem
            AI generatif dan voice cloning.

          </p>

          {/* Mini Stats */}

          <div className="flex justify-center gap-3 sm:gap-5 mt-8 flex-wrap">

            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-white">

              <Shield className="w-4 h-4 text-blue-400" />

              Identity Protection

            </div>

            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-white">

              <Cpu className="w-4 h-4 text-violet-400" />

              AI Defense

            </div>

            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-white">

              <Activity className="w-4 h-4 text-cyan-400" />

              Real-time Processing

            </div>

          </div>

        </section>

        <div className="w-full mb-5 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-medium text-white/80">
              Protection Level
            </span>

            <span className="text-sm font-semibold text-blue-500 transition-all duration-300">
              {mode}
            </span>
          </div>

          <div className="relative mx-2 h-12">
            {/* Track */}
            <div className="absolute left-0 right-0 top-2 h-1 rounded-full bg-white/15" />

            {/* Progress */}
            <div
              className="absolute left-0 top-2 h-1 rounded-full bg-blue-500 transition-all duration-300 ease-out"
              style={{
                width: `${(modes.indexOf(mode) / 2) * 100}%`,
              }}
            />

            {/* Thumb */}
            <div
              className="absolute top-0 h-5 w-5 -translate-x-1/2 rounded-full bg-blue-500 shadow-lg shadow-white/20 transition-all duration-300 ease-out"
              style={{
                left: `${(modes.indexOf(mode) / 2) * 100}%`,
              }}
            />

            {/* Options */}
            <div className="relative z-10 flex justify-between">
              {modes.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setMode(item)}
                  className={`flex flex-col gap-2 transition-all duration-300 ${
                    item === "Fast"
                      ? "items-start"
                      : item === "Strong"
                      ? "items-end"
                      : "items-center"
                  } ${
                    mode === item
                      ? "scale-[1.02] text-white"
                      : "text-white/50 hover:text-white/80"
                  }`}
                >
                  <span
                    className={`h-3 w-3 rounded-full transition-all duration-300 ${
                      mode === item
                        ? "scale-110 bg-white"
                        : "bg-white/25"
                    }`}
                  />

                  <span className="text-xs font-medium">
                    {item}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================
            CARDS
        ====================================================== */}
        {/* =====================================================
    VIDEO DISPLAY
====================================================== */}

<div className="group relative mb-7 max-w-2xl mx-auto">

  {/* Glow */}
  <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-cyan-500/30 via-blue-500/20 to-indigo-500/30 opacity-0 group-hover:opacity-100 blur-sm transition duration-500" />

  <div className="relative rounded-3xl border border-white/10 bg-white/[0.045] backdrop-blur-2xl p-6 shadow-2xl transition-all duration-500 group-hover:-translate-y-1 group-hover:border-cyan-400/30">

    {/* Header */}
    <div className="flex items-center justify-between mb-6">

    </div>


    {/* VIDEO */}
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black">

      <video
        src="/video.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-auto max-h-[500px] rounded-2xl bg-black"
      />

    </div>


    {/* Status */}
    <div className="flex items-center justify-center mt-4">

      <div className="flex items-center gap-2 text-[10px] text-white bg-cyan-500/20 border border-cyan-400/20 px-3 py-1.5 rounded-full">

        <ShieldCheck className="w-3 h-3 text-cyan-300" />

        Video Protection Preview

      </div>

    </div>

  </div>

</div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          

          {/* =====================================================
              IMAGE CARD
          ====================================================== */}

          <div className="group relative">

            {/* Glow */}
            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-indigo-500/30 via-violet-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 blur-sm transition duration-500" />

            <div className="relative h-full rounded-3xl border border-white/10 bg-white/[0.045] backdrop-blur-2xl p-6 shadow-2xl transition-all duration-500 group-hover:-translate-y-1 group-hover:border-indigo-400/30">

              {/* Card Header */}

              <div className="flex items-center justify-between mb-7">

                <div className="flex items-center gap-3">

                  <div className="relative">

                    <div className="absolute inset-0 bg-indigo-500 blur-xl opacity-30" />

                    <div className="relative w-12 h-12 rounded-2xl bg-blue-500 border border-white flex items-center justify-center">

                      <img src='face-recognition.png'  className="w-6 h-6" />

                    </div>

                  </div>

                  <div>

                    <h3 className="font-semibold text-white">
                      Proteksi Foto Wajah
                    </h3>

                    <p className="text-xs text-blue-500 mt-1">
                      DiffusionGuard Engine
                    </p>

                  </div>

                </div>

                <span className="text-[10px] font-semibold px-2.5 py-1.5 rounded-lg bg-blue-500 text-white border border-white">
                  IMAGE
                </span>

              </div>

              {/* Upload */}

              {!imagePreview ? (

                <label className="relative overflow-hidden border border-dashed border-white/10 hover:border-indigo-400/50 bg-black/20 hover:bg-indigo-500/[0.04] rounded-2xl min-h-[270px] flex flex-col items-center justify-center cursor-pointer transition-all duration-500">

                  {/* Upload Glow */}

                  <div className="absolute w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition" />

                  <div className="relative w-16 h-16 rounded-2xl bg-blue-500 border border-white flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-indigo-400/40 transition-all duration-300">

                    <Upload className="w-7 h-7 text-indigo-300" />

                  </div>

                  <p className="text-sm font-semibold text-white">
                    Pilih atau geser foto
                  </p>

                  <p className="text-xs text-blue-500 mt-2">
                    JPG atau PNG • Maksimal 10MB
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-[10px] text-white bg-blue-500 px-3 py-1.5 rounded-full border border-indigo-400/10">

                    <Lock className="w-3 h-3" />

                    Secure Processing

                  </div>

                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />

                </label>

              ) : (

                <div className="space-y-4">

                  <div className="grid grid-cols-2 gap-3">

                    {/* Original */}

                    <div className="bg-black/30 rounded-2xl p-3 border border-white/10">

                      <div className="flex items-center justify-between mb-2">

                        <span className="text-[10px] uppercase tracking-wider text-slate-500">
                          Original
                        </span>

                        <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />

                      </div>

                      <img
                        src={imagePreview}
                        alt="Original"
                        className="w-full h-40 object-cover rounded-xl"
                      />

                    </div>

                    {/* Protected */}

                    <div className="bg-black/30 rounded-2xl p-3 border border-white/10">

                      <div className="flex items-center justify-between mb-2">

                        <span className="text-[10px] uppercase tracking-wider text-emerald-400">
                          Protected
                        </span>

                        {imageProtected && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        )}

                      </div>

                      {imageProtected ? (

                        <img
                          src={imageProtected}
                          alt="Protected"
                          className="w-full h-40 object-cover rounded-xl border border-emerald-400/30 shadow-lg shadow-emerald-500/10"
                        />

                      ) : (

                        <div className="h-40 rounded-xl bg-white/[0.02] border border-dashed border-white/10 flex items-center justify-center">

                          {imageLoading ? (

                            <div className="text-center">

                              <Loader2 className="w-7 h-7 text-indigo-400 animate-spin mx-auto mb-3" />

                              <p className="text-[10px] text-slate-500">
                                Processing...
                              </p>

                            </div>

                          ) : (

                            <div className="text-center">

                              <Lock className="w-6 h-6 text-slate-600 mx-auto mb-2" />

                              <p className="text-[10px] text-slate-600">
                                Belum diproses
                              </p>

                            </div>

                          )}

                        </div>

                      )}

                    </div>

                  </div>

                </div>

              )}

              {/* Buttons */}

              {imagePreview && (

                <div className="flex gap-3 mt-5">

                  <button
                    onClick={() => {
                      setImageFile(null);
                      setImagePreview(null);
                      setImageProtected(null);
                    }}
                    disabled={imageLoading}
                    className="px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-xs text-slate-400 hover:text-white hover:bg-white/[0.08] transition flex items-center gap-2"
                  >

                    <RefreshCw className="w-3.5 h-3.5" />

                    Reset

                  </button>

                  {!imageProtected ? (

                    <button
                      onClick={processImageProtection}
                      disabled={imageLoading}
                      className="relative overflow-hidden flex-1 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white text-xs font-semibold shadow-lg shadow-indigo-500/20 transition-all hover:shadow-indigo-500/40 hover:-translate-y-0.5 disabled:opacity-50"
                    >

                      <span className="relative flex items-center justify-center gap-2">

                        {imageLoading ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Memproses...
                          </>
                        ) : (
                          <>
                            <Zap className="w-4 h-4" />
                            Jalankan Proteksi
                          </>
                        )}

                      </span>

                    </button>

                  ) : (

                    <a
                      href={imageProtected}
                      download="protected_face.png"
                      className="flex-1 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all hover:-translate-y-0.5"
                    >

                      <Download className="w-4 h-4" />

                      Download PNG

                    </a>

                  )}

                </div>

              )}

            </div>

          </div>

          {/* =====================================================
              AUDIO CARD
          ====================================================== */}

          <div className="group relative">

            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-violet-500/30 via-fuchsia-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 blur-sm transition duration-500" />

            <div className="relative h-full rounded-3xl border border-white/10 bg-white/[0.045] backdrop-blur-2xl p-6 shadow-2xl transition-all duration-500 group-hover:-translate-y-1 group-hover:border-violet-400/30">

              {/* Header */}

              <div className="flex items-center justify-between mb-7">

                <div className="flex items-center gap-3">

                  <div className="relative">

                    <div className="absolute inset-0 bg-violet-500 blur-xl opacity-30" />

                    <div className="relative w-12 h-12 rounded-2xl bg-blue-600 border border-white flex items-center justify-center">

                      <img src='wave-sound.png' className="w-6 h-6 text-violet-300" />

                    </div>

                  </div>

                  <div>

                    <h3 className="font-semibold text-white">
                      Proteksi Sampel Suara
                    </h3>

                    <p className="text-xs text-blue-500 mt-1">
                      AntiFake Acoustic Engine
                    </p>

                  </div>

                </div>

                <span className="text-[10px] font-semibold px-2.5 py-1.5 rounded-lg bg-blue-500 text-white border border-white">
                  AUDIO
                </span>

              </div>

              {/* Upload */}

              {!audioPreview ? (

                <label className="relative overflow-hidden border border-dashed border-white/10 hover:border-violet-400/50 bg-black/20 hover:bg-violet-500/[0.04] rounded-2xl min-h-[270px] flex flex-col items-center justify-center cursor-pointer transition-all duration-500">

                  <div className="absolute w-32 h-32 bg-violet-500/10 rounded-full blur-3xl" />

                  <div className="relative w-16 h-16 rounded-2xl bg-blue-500 border border-white flex items-center justify-center mb-5 group-hover:scale-110 transition">

                    <Mic className="w-7 h-7 text-violet-300" />

                  </div>

                  <p className="text-sm font-semibold text-white">
                    Pilih atau geser file audio
                  </p>

                  <p className="text-xs text-blue-500 mt-2">
                    WAV atau MP3 • Lossless disarankan
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-[10px] text-white bg-blue-500 px-3 py-1.5 rounded-full border border-violet-400/10">

                    <Lock className="w-3 h-3" />

                    Secure Processing

                  </div>

                  <input
                    type="file"
                    accept="audio/*"
                    onChange={handleAudioChange}
                    className="hidden"
                  />

                </label>

              ) : (

                <div className="space-y-4">

                  {/* Original Audio */}

                  <div className="bg-black/30 rounded-2xl p-4 border border-white/10">

                    <div className="flex items-center gap-3 mb-3">

                      <div className="w-9 h-9 rounded-xl bg-violet-500/10 flex items-center justify-center">

                        <Mic className="w-4 h-4 text-violet-300" />

                      </div>

                      <div className="min-w-0">

                        <p className="text-[10px] text-slate-500 uppercase tracking-wider">
                          Original Audio
                        </p>

                        <p className="text-xs text-slate-300 truncate mt-1">
                          {audioFile?.name}
                        </p>

                      </div>

                    </div>

                    <audio
                      controls
                      src={audioPreview}
                      className="w-full h-9 opacity-80"
                    />

                  </div>

                  {/* Loading */}

                  {audioLoading && (

                    <div className="rounded-2xl bg-violet-500/[0.04] border border-violet-400/20 p-6 text-center">

                      <div className="relative inline-flex mb-3">

                        <div className="absolute inset-0 bg-violet-500 blur-xl opacity-40" />

                        <Loader2 className="relative w-7 h-7 text-violet-400 animate-spin" />

                      </div>

                      <p className="text-xs font-medium text-violet-300">
                        Menyuntikkan Anti-Cloning Noise...
                      </p>

                      <p className="text-[10px] text-slate-600 mt-1">
                        AI protection engine sedang bekerja
                      </p>

                    </div>

                  )}

                  {/* Protected */}

                  {audioProtected && (

                    <div className="rounded-2xl bg-emerald-500/[0.04] border border-emerald-400/20 p-4">

                      <div className="flex items-center gap-2 mb-3">

                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />

                        <span className="text-xs font-semibold text-emerald-300">
                          Anti-Cloning Active
                        </span>

                      </div>

                      <audio
                        controls
                        src={audioProtected}
                        className="w-full h-9"
                      />

                    </div>

                  )}

                </div>

              )}

              {/* Buttons */}

              {audioPreview && (

                <div className="flex gap-3 mt-5">

                  <button
                    onClick={() => {
                      setAudioFile(null);
                      setAudioPreview(null);
                      setAudioProtected(null);
                    }}
                    disabled={audioLoading}
                    className="px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-xs text-slate-400 hover:text-white hover:bg-white/[0.08] transition flex items-center gap-2"
                  >

                    <RefreshCw className="w-3.5 h-3.5" />

                    Reset

                  </button>

                  {!audioProtected ? (

                    <button
                      onClick={processAudioProtection}
                      disabled={audioLoading}
                      className="flex-1 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white text-xs font-semibold shadow-lg shadow-violet-500/20 transition-all hover:shadow-violet-500/40 hover:-translate-y-0.5 disabled:opacity-50"
                    >

                      <span className="flex items-center justify-center gap-2">

                        {audioLoading ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Memproses...
                          </>
                        ) : (
                          <>
                            <Zap className="w-4 h-4" />
                            Jalankan Proteksi
                          </>
                        )}

                      </span>

                    </button>

                  ) : (

                    <a
                      href={audioProtected}
                      download="protected_voice.wav"
                      className="flex-1 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all hover:-translate-y-0.5"
                    >

                      <Download className="w-4 h-4" />

                      Download WAV

                    </a>

                  )}

                </div>

              )}

            </div>

          </div>

        </div>

        {/* =====================================================
            TECHNOLOGY NOTICE
        ====================================================== */}

        <div className="relative mt-8 overflow-hidden rounded-2xl border border-indigo-400/10 bg-indigo-500/[0.035] backdrop-blur-xl p-5">

          <div className="absolute top-0 left-0 w-40 h-40 bg-indigo-500/10 blur-3xl rounded-full" />

          <div className="relative flex items-start gap-4">

            <div className="w-10 h-10 rounded-xl bg-blue-500 border border-white flex items-center justify-center shrink-0">

              <AlertCircle className="w-5 h-5 text-indigo-300" />

            </div>

            <div>

              <h4 className="text-xs font-semibold text-indigo-300 mb-1">
                Catatan Teknologi
              </h4>

              <p className="text-xs text-white leading-relaxed">
                File terproteksi menggunakan simulasi mekanisme adversarial
                noise. Pada implementasi nyata, sistem dapat dikembangkan
                dengan model khusus untuk meningkatkan perlindungan terhadap
                penyalahgunaan media oleh sistem AI generatif.
              </p>

            </div>

          </div>

        </div>

      </main>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-xl">

        <div className="max-w-7xl mx-auto px-5 py-7 text-center">

          <div className="flex items-center justify-center gap-2 mb-2">

            <img src='/logo Smk Pertiwi 2.png'  className="w-4 h-5 text-indigo-400" />

            <span className="text-xs font-semibold text-slate-300">
              AI GUARDIAN
            </span>

          </div>

          <p className="text-[10px] text-white">
            © {new Date().getFullYear()} AI Guardian — AI Identity Protection
            Prototype
          </p>

        </div>

      </footer>

    </div>
  );
}