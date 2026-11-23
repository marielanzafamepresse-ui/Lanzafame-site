// app.jsx — Lanzafame · panneau Tweaks
// Contrôle simple et on-brand : la couleur d'accent (terracotta) qui rythme
// tout le site — liens actifs, eyebrows, hovers, CTA, filets, points du carrousel.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#c4785a"
}/*EDITMODE-END*/;

// Accents chauds, même tempérament que la fondation crème / or.
const ACCENTS = [
  "#c4785a", // terracotta (original)
  "#a8533a", // rouille profonde
  "#b08a3c", // ocre doré
  "#7a6a5d", // taupe
  "#5e6a6e"  // ardoise froide
];

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    document.documentElement.style.setProperty('--terracotta', t.accent);
  }, [t.accent]);

  return (
    <TweaksPanel>
      <TweakSection label="Identité" />
      <TweakColor
        label="Couleur d'accent"
        value={t.accent}
        options={ACCENTS}
        onChange={(v) => setTweak('accent', v)}
      />
    </TweaksPanel>
  );
}

const mount = document.getElementById('tweaks-root');
ReactDOM.createRoot(mount).render(<App />);
