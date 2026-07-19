import React, { useCallback, useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import PortfolioPage from "./pages/PortfolioPage";
import { defaultLanguage, supportedLanguages } from "./data/portfolio";
import "./styles.css";

gsap.registerPlugin(useGSAP);

const GAME_SCENE = {
  startX: 16.7,
  minX: 4,
  maxX: 84,
  playerWidth: 7.3,
  baseBottom: 15.8,
  moveSpeed: 14,
  jumpVelocity: 600,
  gravity: 1500,
  boxCenterX: 31.9,
  boxBottomRatio: 0.494,
  boxHeadClearance: 12,
  flagX: 78.8,
};

const DEMO_SCRIPT = {
  boxJumpCenterX: 26.6,
  maxDuration: 14000,
};

const GAME_BGM_SRC = "/assets/audio/music_game.MP3";
const COIN_HIT_SFX_SRC = "/assets/audio/music_hit_coin.MP3";

const INITIAL_PLAYER_STATE = {
  x: GAME_SCENE.startX,
  y: 0,
  vy: 0,
  direction: 1,
  grounded: true,
  hitBox: false,
  won: false,
};

function getFloorHeight(centerX) {
  if (centerX >= 46 && centerX < 50) return 108;
  if (centerX >= 50 && centerX < 54) return 210;
  if (centerX >= 54 && centerX < 58) return 310;
  if (centerX >= 58 && centerX < 62) return 410;
  if (centerX >= 62 && centerX < 68.5) return 510;
  return 0;
}

function getStairFloorHeight(centerX, sceneEl, stairEl) {
  if (!sceneEl || !stairEl) return getFloorHeight(centerX);

  const sceneRect = sceneEl.getBoundingClientRect();
  const stairRect = stairEl.getBoundingClientRect();
  const playerCenterPx = sceneRect.left + sceneRect.width * (centerX / 100);
  const localX = (playerCenterPx - stairRect.left) / stairRect.width;

  if (localX < 0 || localX > 1) return 0;

  const surfaceRatios = [
    { until: 0.17, height: 0.214 },
    { until: 0.36, height: 0.412 },
    { until: 0.56, height: 0.602 },
    { until: 0.75, height: 0.801 },
    { until: 1, height: 1 },
  ];
  const surface = surfaceRatios.find((step) => localX <= step.until) ?? surfaceRatios.at(-1);
  const stairBottomOffset = stairRect.bottom - (sceneRect.bottom - sceneRect.height * (GAME_SCENE.baseBottom / 100));

  return Math.max(0, stairRect.height * surface.height - stairBottomOffset);
}

function normalizeLanguage(language) {
  return supportedLanguages.includes(language) ? language : defaultLanguage;
}

function getInitialLanguage() {
  const savedLanguage = window.localStorage.getItem("portfolio-language");
  return normalizeLanguage(savedLanguage);
}

function HomeHud({ language, onToggleLanguage }) {
  return (
    <header className="home-hud" aria-label="Home status">
      <div className="home-player">
        <img className="home-avatar" src="/assets/characters/avatar.png" alt="" />
        <span className="home-player-name">PLAYER 1</span>
        <span className="home-hearts" aria-label="three hearts">
          <img src="/assets/items/life-heart.png" alt="" />
        </span>
      </div>
      <div className="home-top-actions">
        <button
          type="button"
          className="home-image-button language-button"
          onClick={onToggleLanguage}
          aria-label={language === "en" ? "Switch to Chinese" : "切换为英文"}
        >
          <img src="/assets/ui/button_language.png" alt="EN | 中文" />
        </button>
        <button type="button" className="home-image-button sound-button" aria-label="Sound">
          <img src="/assets/ui/button_sound.png" alt="" />
        </button>
      </div>
    </header>
  );
}

function HomeControls() {
  return (
    <div className="home-controls" aria-label="Game controls">
      <div className="home-control-pair">
        <img src="/assets/ui/button_left.png" alt="Left arrow" />
        <img src="/assets/ui/button_right.png" alt="Right arrow" />
        <span>Move</span>
      </div>
      <span className="home-control-divider" />
      <div className="home-control-pair">
        <img className="home-space-key" src="/assets/ui/button_space.png" alt="Space" />
        <span>Jump</span>
      </div>
    </div>
  );
}

function StartIntroButton() {
  return (
    <img className="start-intro-button-image" src="/assets/ui/button-start-intro.png?v=transparent" alt="Start Intro" />
  );
}

function WatchDemoButton() {
  return (
    <span className="watch-demo-button-frame">
      <img className="watch-demo-button-image" src="/assets/ui/button_watchdemo.png?v=transparent" alt="Watch Demo" />
    </span>
  );
}

function HomeScreen({ language, onToggleLanguage, onStart, onSkip }) {
  const screenRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".home-hotspot", {
        y: 10,
        opacity: 0,
        duration: 0.45,
        ease: "power3.out",
        stagger: 0.08,
      });
    },
    { scope: screenRef }
  );

  return (
    <section className="pixel-screen home-screen" ref={screenRef}>
      <HomeHud language={language} onToggleLanguage={onToggleLanguage} />
      <div className="home-title" aria-label="Welcome Lily's Lab">
        <h1>
          <span className="home-title-welcome">WELCOME</span>
          <span className="home-title-lab">Lily's Lab</span>
        </h1>
      </div>
      <div className="home-actions" aria-label="Home actions">
        <button className="home-hotspot home-start-button" type="button" onClick={onStart} aria-label="Start Intro game">
          <StartIntroButton />
        </button>
        <button className="home-hotspot home-skip-button" type="button" onClick={onSkip} aria-label="Skip Intro and enter portfolio">
          <img src="/assets/ui/button_skip.png" alt="Skip" />
        </button>
      </div>
      <HomeControls />
      <img className="home-lily" src="/assets/characters/laptop.png" alt="Lily holding a laptop" />
    </section>
  );
}

function GameHud({ language, onToggleLanguage, onHome }) {
  return (
    <header className="game-hud" aria-label="Game status">
      <div className="game-player">
        <img className="game-avatar" src="/assets/characters/avatar.png" alt="" />
        <span className="game-player-name">PLAYER 1</span>
        <img className="game-hearts" src="/assets/items/life-heart.png" alt="three hearts" />
      </div>
      <div className="game-top-actions">
        <button type="button" className="game-home-link" onClick={onHome} aria-label="Return to intro page">
          HOME
        </button>
        <button
          type="button"
          className="game-image-button game-language-button"
          onClick={onToggleLanguage}
          aria-label={language === "en" ? "Switch to Chinese" : "切换为英文"}
        >
          <img src="/assets/ui/button_language.png" alt="EN | 中文" />
        </button>
        <button type="button" className="game-image-button game-sound-button" aria-label="Sound">
          <img src="/assets/ui/button_sound.png" alt="" />
        </button>
      </div>
    </header>
  );
}

function GameControls({ onWatchDemo, demoMode }) {
  return (
    <div className="game-bottom-actions">
      <div className="game-controls" aria-label="Game controls">
        <div className="game-control-pair">
          <img src="/assets/ui/button_left.png" alt="Left arrow" />
          <img src="/assets/ui/button_right.png" alt="Right arrow" />
          <span>Move</span>
        </div>
        <span className="game-control-divider" />
        <div className="game-control-pair">
          <img className="game-space-key" src="/assets/ui/button_space.png" alt="Space" />
          <span>Jump</span>
        </div>
      </div>
      <button className="watch-demo-button" type="button" onClick={onWatchDemo} aria-label="Watch Demo" aria-pressed={demoMode}>
        <WatchDemoButton />
      </button>
    </div>
  );
}

function GameIntro({ language, onToggleLanguage, onComplete, onHome }) {
  const sceneRef = useRef(null);
  const playerElRef = useRef(null);
  const stairElRef = useRef(null);
  const coinAudioRef = useRef(null);
  const keysRef = useRef({ left: false, right: false });
  const demoRef = useRef({ active: false, boxJumped: false, startedAt: 0 });
  const coinTimersRef = useRef([]);
  const completionTimerRef = useRef(0);
  const playerRef = useRef({ ...INITIAL_PLAYER_STATE });
  const [player, setPlayer] = useState(playerRef.current);
  const [coinBurst, setCoinBurst] = useState(false);
  const [coinCollected, setCoinCollected] = useState(false);
  const [boxBump, setBoxBump] = useState(false);
  const [won, setWon] = useState(false);
  const [demoMode, setDemoMode] = useState(false);

  const clearScheduledTimers = useCallback(() => {
    coinTimersRef.current.forEach((timerId) => window.clearTimeout(timerId));
    coinTimersRef.current = [];
    window.clearTimeout(completionTimerRef.current);
    completionTimerRef.current = 0;
  }, []);

  const requestJump = useCallback(() => {
    if (!playerRef.current.grounded || playerRef.current.won) return false;

    playerRef.current.vy = GAME_SCENE.jumpVelocity;
    playerRef.current.grounded = false;
    return true;
  }, []);

  const resetGameState = useCallback(() => {
    clearScheduledTimers();
    keysRef.current = { left: false, right: false };
    playerRef.current = { ...INITIAL_PLAYER_STATE };
    setPlayer(playerRef.current);
    setCoinBurst(false);
    setCoinCollected(false);
    setBoxBump(false);
    setWon(false);
  }, [clearScheduledTimers]);

  const startDemo = useCallback(() => {
    resetGameState();
    demoRef.current = {
      active: true,
      boxJumped: false,
      startedAt: performance.now(),
    };
    setDemoMode(true);
  }, [resetGameState]);

  const playCoinHitSound = useCallback(() => {
    if (!coinAudioRef.current) {
      const audio = new Audio(COIN_HIT_SFX_SRC);
      audio.volume = 0.55;
      coinAudioRef.current = audio;
    }

    const audio = coinAudioRef.current;
    audio.currentTime = 0;
    audio.play().catch(() => {
      // This is only a feedback sound, so a blocked play attempt can fail silently.
    });
  }, []);

  const hitQuestionBlock = useCallback(() => {
    if (playerRef.current.hitBox) return;
    playerRef.current.hitBox = true;
    playCoinHitSound();
    setBoxBump(true);
    setCoinBurst(true);
    coinTimersRef.current.push(window.setTimeout(() => setBoxBump(false), 360));
    coinTimersRef.current.push(window.setTimeout(() => {
      setCoinBurst(false);
      setCoinCollected(true);
    }, 760));
  }, [playCoinHitSound]);

  const completeLevel = useCallback(() => {
    if (playerRef.current.won) return;
    playerRef.current.won = true;
    demoRef.current.active = false;
    keysRef.current = { left: false, right: false };
    setDemoMode(false);
    setWon(true);
    completionTimerRef.current = window.setTimeout(onComplete, 1350);
  }, [onComplete]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (demoRef.current.active) {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight" || event.code === "Space") event.preventDefault();
        return;
      }

      if (event.key === "ArrowLeft") {
        keysRef.current.left = true;
        playerRef.current.direction = -1;
      }
      if (event.key === "ArrowRight") {
        keysRef.current.right = true;
        playerRef.current.direction = 1;
      }
      if (event.code === "Space") {
        event.preventDefault();
        requestJump();
      }
    };

    const onKeyUp = (event) => {
      if (demoRef.current.active) {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight" || event.code === "Space") event.preventDefault();
        return;
      }

      if (event.key === "ArrowLeft") keysRef.current.left = false;
      if (event.key === "ArrowRight") keysRef.current.right = false;
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, [requestJump]);

  useEffect(() => {
    let frameId = 0;
    let lastTime = performance.now();

    const tick = (time) => {
      const dt = Math.min((time - lastTime) / 1000, 0.034);
      lastTime = time;
      const current = playerRef.current;

      if (!current.won) {
        if (demoRef.current.active) {
          const demoElapsed = time - demoRef.current.startedAt;
          const playerCenterX = current.x + GAME_SCENE.playerWidth / 2;

          keysRef.current.left = false;
          keysRef.current.right = true;
          current.direction = 1;

          if (!demoRef.current.boxJumped && current.grounded && playerCenterX >= DEMO_SCRIPT.boxJumpCenterX) {
            demoRef.current.boxJumped = requestJump();
          }

          if (demoElapsed > DEMO_SCRIPT.maxDuration) {
            demoRef.current.active = false;
            keysRef.current = { left: false, right: false };
            setDemoMode(false);
          }
        }

        let nextX = current.x;
        if (keysRef.current.left) nextX -= GAME_SCENE.moveSpeed * dt;
        if (keysRef.current.right) nextX += GAME_SCENE.moveSpeed * dt;
        nextX = Math.max(GAME_SCENE.minX, Math.min(GAME_SCENE.maxX, nextX));

        const centerX = nextX + GAME_SCENE.playerWidth / 2;
        const sceneHeight = sceneRef.current?.getBoundingClientRect().height ?? window.innerHeight;
        const playerHeight = playerElRef.current?.getBoundingClientRect().height ?? 260;
        const baseBottomPx = sceneHeight * (GAME_SCENE.baseBottom / 100);
        const blockBottomPx = sceneHeight * GAME_SCENE.boxBottomRatio;
        const floorY = getStairFloorHeight(centerX, sceneRef.current, stairElRef.current);
        let nextY = current.y + current.vy * dt;
        let nextVy = current.vy - GAME_SCENE.gravity * dt;
        const headY = baseBottomPx + nextY + playerHeight;
        const boxClearance = blockBottomPx - headY;

        if (nextY <= floorY) {
          nextY = floorY;
          nextVy = 0;
          current.grounded = true;
        } else {
          current.grounded = false;
        }

        if (Math.abs(centerX - GAME_SCENE.boxCenterX) < 4.2 && current.vy > 0 && boxClearance <= GAME_SCENE.boxHeadClearance) {
          nextY = Math.max(0, blockBottomPx - baseBottomPx - playerHeight - GAME_SCENE.boxHeadClearance);
          nextVy = Math.min(nextVy, -120);
        }

        if (!current.hitBox && Math.abs(centerX - GAME_SCENE.boxCenterX) < 4.2 && current.vy > 0 && boxClearance <= GAME_SCENE.boxHeadClearance + 8) {
          hitQuestionBlock();
        }

        if (centerX >= GAME_SCENE.flagX && current.grounded) {
          completeLevel();
        }

        playerRef.current = {
          ...current,
          x: nextX,
          y: nextY,
          vy: nextVy,
        };
      }

      setPlayer({ ...playerRef.current });
      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frameId);
      clearScheduledTimers();
    };
  }, [clearScheduledTimers, completeLevel, hitQuestionBlock, requestJump]);

  useGSAP(
    () => {
      if (boxBump) {
        gsap.fromTo(".game-question-block", { y: 0 }, { y: -14, duration: 0.12, yoyo: true, repeat: 1, ease: "power2.out" });
      }
    },
    { dependencies: [boxBump], scope: sceneRef }
  );

  const playerStyle = {
    left: `${player.x}%`,
    bottom: `calc(${GAME_SCENE.baseBottom}% + ${player.y}px)`,
    transform: `scaleX(${player.direction})`,
    "--player-direction": player.direction,
  };

  return (
    <section className="pixel-screen game-intro-screen" ref={sceneRef} aria-label="Intro game page">
      <GameHud language={language} onToggleLanguage={onToggleLanguage} onHome={onHome} />

      <img
        className={`game-lily-idle game-layer-character ${won ? "game-lily-victory" : ""}`}
        src={won ? "/assets/characters/victory.png" : "/assets/characters/idle.png"}
        alt="Lily character"
        ref={playerElRef}
        style={playerStyle}
      />
      <img className={`game-question-block game-layer-item ${boxBump ? "is-bumping" : ""}`} src="/assets/items/question-block.png" alt="Question block" />
      <img className={`game-coin-gold game-layer-item ${coinBurst ? "is-bursting" : ""} ${coinCollected ? "is-collected" : ""}`} src="/assets/items/coin-gold.png" alt="Gold coin" />
      <img className="game-stair-platform game-layer-map" src="/assets/tiles/grass-platform.png" alt="" ref={stairElRef} />
      <img className="game-clear-flag game-layer-item" src="/assets/items/flag.png" alt="Clear flag" />

      {won && <img className="game-level-up-banner" src="/assets/items/win_levelup.png" alt="Level up" />}
      <GameControls onWatchDemo={startDemo} demoMode={demoMode} />
    </section>
  );
}

function App() {
  const gameAudioRef = useRef(null);
  const [screen, setScreen] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const requestedScreen = params.get("screen");
    if (requestedScreen === "game" || requestedScreen === "intro") return "game";
    if (requestedScreen === "about") return "about";
    return "home";
  });
  const [language, setLanguage] = useState(getInitialLanguage);

  const toggleLanguage = useCallback(() => {
    setLanguage((currentLanguage) => {
      const nextLanguage = currentLanguage === "en" ? "zh" : "en";
      window.localStorage.setItem("portfolio-language", nextLanguage);
      return nextLanguage;
    });
  }, []);

  const getGameAudio = useCallback(() => {
    if (!gameAudioRef.current) {
      const audio = new Audio(GAME_BGM_SRC);
      audio.loop = true;
      audio.volume = 0.36;
      gameAudioRef.current = audio;
    }

    return gameAudioRef.current;
  }, []);

  const startGameAudio = useCallback(() => {
    const audio = getGameAudio();
    audio.currentTime = 0;
    audio.play().catch(() => {
      // Browsers may block audio if this is not triggered by a direct user action.
    });
  }, [getGameAudio]);

  const stopGameAudio = useCallback(() => {
    const audio = gameAudioRef.current;

    if (!audio) {
      return;
    }

    audio.pause();
    audio.currentTime = 0;
  }, []);

  useEffect(() => {
    return () => {
      stopGameAudio();
    };
  }, [stopGameAudio]);

  const startIntroGame = useCallback(() => {
    startGameAudio();
    setScreen("game");
  }, [startGameAudio]);

  const leaveGameForHome = useCallback(() => {
    stopGameAudio();
    setScreen("home");
  }, [stopGameAudio]);

  const completeGame = useCallback(() => {
    stopGameAudio();
    setScreen("about");
  }, [stopGameAudio]);

  return (
    <main>
      {screen === "home" && (
        <HomeScreen
          language={language}
          onToggleLanguage={toggleLanguage}
          onStart={startIntroGame}
          onSkip={() => setScreen("about")}
        />
      )}
      {screen === "game" && (
        <GameIntro
          language={language}
          onToggleLanguage={toggleLanguage}
          onComplete={completeGame}
          onHome={leaveGameForHome}
        />
      )}
      {screen === "about" && <PortfolioPage language={language} onToggleLanguage={toggleLanguage} />}
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
