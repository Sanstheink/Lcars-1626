// ================= BOOT & REBOOT SYSTEM =================

const bootScreen = document.getElementById('bootScreen');
const bootLog = document.getElementById('bootLog');
const progress = document.getElementById('progress');
const bootStatus = document.getElementById('bootStatus');

// 🔊 เสียง (ใช้ไฟล์หรือ URL ได้)
const bootSound = new Audio('assets/audio/boot.mp3');
const beepSound = new Audio('assets/audio/beep.mp3');

const PRIMARY_SYSTEMS = [
  'Reinitializing command core…',
  'Restarting navigation systems…',
  'Synchronizing warp core…',
  'Bringing weapons online…',
  'Primary systems stable.'
];

const SECONDARY_SYSTEMS = [
  'Restarting life support…',
  'Recalibrating sensors…',
  'Rebooting communication arrays…',
  'Secondary systems online.'
];

function startBoot(sequence) {
  bootLog.innerHTML = '';
  progress.style.width = '0%';
  bootStatus.innerText = 'SYSTEM REBOOT IN PROGRESS…';

  bootScreen.style.display = 'flex';
  bootScreen.classList.remove('boot-exit');

  bootSound.currentTime = 0;
  bootSound.play().catch(() => {});

  let step = 0;

  const interval = setInterval(() => {
    if (step < sequence.length) {
      const line = document.createElement('div');
      line.textContent = `> ${sequence[step]}`;
      bootLog.appendChild(line);

      beepSound.currentTime = 0;
      beepSound.play().catch(() => {});

      progress.style.width =
        ((step + 1) / sequence.length) * 100 + '%';

      step++;
    } else {
      clearInterval(interval);
      bootStatus.innerText = 'ALL SYSTEMS OPERATIONAL';

      setTimeout(() => {
        bootScreen.classList.add('boot-exit');
        setTimeout(() => {
          bootScreen.style.display = 'none';
        }, 1000);
      }, 900);
    }
  }, 700);
}

// ===== INITIAL BOOT =====
window.addEventListener('load', () => {
  startBoot([
    'Powering up USS Azura…',
    'Loading LCARS interface…',
    'Initializing primary systems…',
    'Initializing secondary systems…',
    'Bridge ready.'
  ]);
});

// ===== REBOOT CONTROLS =====
function rebootPrimary() {
  startBoot(PRIMARY_SYSTEMS);
}

function rebootSecondary() {
  startBoot(SECONDARY_SYSTEMS);
            }
