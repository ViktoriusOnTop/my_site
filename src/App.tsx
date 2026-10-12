import TechText from './component/TechText.jsx'
import MicroSlats from './component/MicroSlats.tsx';
import Lanyard from "./component/Lanyard.tsx";
import ElectricLogo from './component/ElectricLogo';
import './App.css'

function App() {

  return (
    <>
      <a
        href="https://github.com/ViktoriusOnTop/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 9999, cursor: 'pointer' }}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#004b4b' }}>
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      </a>
      <section id="center">
        <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <MicroSlats
                preset="storm"
                color="#A855F7"
                glintColor="#ffffff"
                backgroundColor="#120f17"
                slatWidth={10}
                slatHeight={25}
                gap={3}
                roundness={0.75}
                interactive
                cursorStrength={1}
                cursorSize={40}
                swirl={0}
                trail={1.4}
                lean={0}
                intro
                scale={0.55}
                speed={1.6}
                direction={236}
                chop={1}
                stretch={0.3}
                glint={1.3}
                contrast={1.8}
                perspective={0.8}
                fog={0.35}
                introDuration={1.5}
                paused={false}
            />
          </div>
          <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
            <TechText
                text="Advait Nair"
                fontWeight={600}
                fontSize={150}
                reveal="letter"
                dashLength={4}
                dashGap={2}
                specks={15}
                fontFamily={"Geist Mono, monospace"}
                color="#ffffff"
                accentColor="#ffffff"
                letterSpacing={-0.09}
                reach={200}
                softness={0.7}
                strokeWidth={1.5}
                speed={1}
                lineStyle="dashed"
                selection
                labels
                draggable
                sweep
            />
          </div>
        </div>
      </section>
      <section id="About me">
        <div style={{ width: '100%', height: '600px', position: 'relative', display: 'flex', alignItems: 'center', gap: '80px', padding: '0 60px' }}>
          <div style={{ flex: 1 }}>
            <h1 style={{ margin: 0, textAlign: 'left' }}>About me!!!</h1>
            <p style={{ margin: '24px 0 0 0', textAlign: 'left', fontSize: '18px', lineHeight: '1.6' }}>
              I'm a backend dev (learning react as you can see) who is passionate about AI/ML and Cybersecurity. My programming languages are Rust, Go, Julia, Python, (some typescript and javascript), C++ and unreal engine, WGSL (webgpu shader language), and more. I am a unity certified user. I am making a flight simulator like BeamNJ but for planes (flysoar), and a language to make ai creation really easy (SAiL, Simple Ai Language). I won 3rd place in FBLA nationals for computer science (7th grade).
            </p>
          </div>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <Lanyard frontImage="/card-front.png" backImage="/card-back.png" strapImage="/band.png"
                     imageFit="cover"
                     cardColor="#ffffff"
                     orientation="portrait"
                     finish="glossy"
                     cornerRadius={0.3}
                     size={0.6}
                     anchor="right"
                     strapLength={0.5}
                     strapColor="#111111"
                     strapWidth={0.65}
                     metal="silver"
                     gravity={1}
                     damping={0.5}
                     elasticity={0.5}
                     breeze={0.5}
                     interactive
                     intro
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default App
