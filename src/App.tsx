import { Canvas } from './components/Canvas/Canvas';
import { Borders } from './components/Borders/Borders';
import { Noise } from './components/Noise/Noise';
import { Curtain } from './components/Curtain/Curtain';
import { Cursor } from './components/Cursor/Cursor';
import { SocialLinks } from './components/SocialLinks/SocialLinks';
import { ScrollIndicator } from './components/ScrollIndicator/ScrollIndicator';
import './styles/globals.css';

function App() {
  return (
    <>
      <Curtain />
      <Borders />
      <Noise />
      <Canvas />
      <SocialLinks />
      <ScrollIndicator />
      <Cursor />
    </>
  );
}

export default App;
