const siteNameInput = document.getElementById('siteName');
const heroTitleInput = document.getElementById('heroTitle');
const heroTextInput = document.getElementById('heroText');
const ctaTextInput = document.getElementById('ctaText');
const accentColorInput = document.getElementById('accentColor');

const browserTitle = document.getElementById('browserTitle');
const previewTitle = document.getElementById('previewTitle');
const previewText = document.getElementById('previewText');
const previewButton = document.getElementById('previewButton');
const root = document.documentElement;

const updatePreview = () => {
  const siteName = siteNameInput.value.trim() || 'Northstar Studio';
  const title = heroTitleInput.value.trim() || 'Build bold ideas into beautiful pages';
  const text = heroTextInput.value.trim() || 'Design launch-ready websites with a faster, clearer workflow.';
  const cta = ctaTextInput.value.trim() || 'Start your project';
  const accent = accentColorInput.value || '#7c3aed';

  browserTitle.textContent = siteName;
  previewTitle.textContent = title;
  previewText.textContent = text;
  previewButton.textContent = cta;
  root.style.setProperty('--accent', accent);
};

[siteNameInput, heroTitleInput, heroTextInput, ctaTextInput, accentColorInput].forEach((input) => {
  input.addEventListener('input', updatePreview);
  input.addEventListener('change', updatePreview);
});

updatePreview();
