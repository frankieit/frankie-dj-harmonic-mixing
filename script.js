// Dati estratti dalla tabella (sezione A e B)
const harmonicData = {
  '1A': { perfect: '1A', minus1: '12A', plus1: '2A', energy: '3A', scale: '1B', diagonal: '12B', jaw: '8A', mood: '4B' },
  '2A': { perfect: '2A', minus1: '1A', plus1: '3A', energy: '4A', scale: '2B', diagonal: '1B', jaw: '9A', mood: '5B' },
  '3A': { perfect: '3A', minus1: '2A', plus1: '4A', energy: '5A', scale: '3B', diagonal: '2B', jaw: '10A', mood: '6B' },
  '4A': { perfect: '4A', minus1: '3A', plus1: '5A', energy: '6A', scale: '4B', diagonal: '3B', jaw: '11A', mood: '7B' },
  '5A': { perfect: '5A', minus1: '4A', plus1: '6A', energy: '7A', scale: '5B', diagonal: '4B', jaw: '12A', mood: '8B' },
  '6A': { perfect: '6A', minus1: '5A', plus1: '7A', energy: '8A', scale: '6B', diagonal: '5B', jaw: '1A', mood: '9B' },
  '7A': { perfect: '7A', minus1: '6A', plus1: '8A', energy: '9A', scale: '7B', diagonal: '6B', jaw: '2A', mood: '10B' },
  '8A': { perfect: '8A', minus1: '7A', plus1: '9A', energy: '10A', scale: '8B', diagonal: '7B', jaw: '3A', mood: '11B' },
  '9A': { perfect: '9A', minus1: '8A', plus1: '10A', energy: '11A', scale: '9B', diagonal: '8B', jaw: '4A', mood: '12B' },
  '10A': { perfect: '10A', minus1: '9A', plus1: '11A', energy: '12A', scale: '10B', diagonal: '9B', jaw: '5A', mood: '1B' },
  '11A': { perfect: '11A', minus1: '10A', plus1: '12A', energy: '1A', scale: '11B', diagonal: '10B', jaw: '6A', mood: '2B' },
  '12A': { perfect: '12A', minus1: '11A', plus1: '1A', energy: '2A', scale: '12B', diagonal: '11B', jaw: '7A', mood: '3B' },
  '1B': { perfect: '1B', minus1: '12B', plus1: '2B', energy: '3B', scale: '1A', diagonal: '2A', jaw: '8B', mood: '10A' },
  '2B': { perfect: '2B', minus1: '1B', plus1: '3B', energy: '4B', scale: '2A', diagonal: '3A', jaw: '9B', mood: '11A' },
  '3B': { perfect: '3B', minus1: '2B', plus1: '4B', energy: '5B', scale: '3A', diagonal: '4A', jaw: '10B', mood: '12A' },
  '4B': { perfect: '4B', minus1: '3B', plus1: '5B', energy: '6B', scale: '4A', diagonal: '5A', jaw: '11B', mood: '1A' },
  '5B': { perfect: '5B', minus1: '4B', plus1: '6B', energy: '7B', scale: '5A', diagonal: '6A', jaw: '12B', mood: '2A' },
  '6B': { perfect: '6B', minus1: '5B', plus1: '7B', energy: '8B', scale: '6A', diagonal: '7A', jaw: '1B', mood: '3A' },
  '7B': { perfect: '7B', minus1: '6B', plus1: '8B', energy: '9B', scale: '7A', diagonal: '8A', jaw: '2B', mood: '4A' },
  '8B': { perfect: '8B', minus1: '7B', plus1: '9B', energy: '10B', scale: '8A', diagonal: '9A', jaw: '3B', mood: '5A' },
  '9B': { perfect: '9B', minus1: '8B', plus1: '10B', energy: '11B', scale: '9A', diagonal: '10A', jaw: '4B', mood: '6A' },
  '10B': { perfect: '10B', minus1: '9B', plus1: '11B', energy: '12B', scale: '10A', diagonal: '11A', jaw: '5B', mood: '7A' },
  '11B': { perfect: '11B', minus1: '10B', plus1: '12B', energy: '1B', scale: '11A', diagonal: '12A', jaw: '6B', mood: '8A' },
  '12B': { perfect: '12B', minus1: '11B', plus1: '1B', energy: '2B', scale: '12A', diagonal: '1A', jaw: '7B', mood: '9A' }
};

// Colori delle chiavi (fedeli all'immagine)
const keyColors = {
  '1A': '#FF6B35', '1B': '#FF6B35',
  '2A': '#F7931E', '2B': '#F7931E',
  '3A': '#FFBE0B', '3B': '#FFBE0B',
  '4A': '#FBFC3C', '4B': '#FBFC3C',
  '5A': '#48D93D', '5B': '#48D93D',
  '6A': '#1FDABF', '6B': '#1FDABF',
  '7A': '#2D9CDB', '7B': '#2D9CDB',
  '8A': '#3474D6', '8B': '#3474D6',
  '9A': '#B855D5', '9B': '#B855D5',
  '10A': '#D83A92', '10B': '#D83A92',
  '11A': '#E91E63', '11B': '#E91E63',
  '12A': '#FF2D55', '12B': '#FF2D55'
};

// Tutte le chiavi in ordine
const allKeys = ['1A', '2A', '3A', '4A', '5A', '6A', '7A', '8A', '9A', '10A', '11A', '12A', '1B', '2B', '3B', '4B', '5B', '6B', '7B', '8B', '9B', '10B', '11B', '12B'];

let activeKey = null;

// Funzione per generare pagina principale
function generateMainPage() {
  const grid = document.getElementById('keyGrid');
  grid.innerHTML = '';
  allKeys.forEach(key => {
    const icon = document.createElement('div');
    icon.className = 'key-icon';
    icon.style.backgroundColor = keyColors[key];
    icon.textContent = key;
    icon.title = `Seleziona ${key} come chiave attiva`;
    icon.onclick = () => selectKey(key);
    grid.appendChild(icon);
  });
}

// Funzione per selezionare chiave e passare a pagina secondaria
function selectKey(key) {
  activeKey = key;
  document.getElementById('mainPage').style.display = 'none';
  document.getElementById('mixPage').style.display = 'block';
  document.getElementById('activeKey').textContent = key;
  document.getElementById('resetBtn').style.display = 'inline-block';
  generateMixTable();
}

// Funzione per generare tabella mix
function generateMixTable() {
  const tbody = document.getElementById('mixTable').querySelector('tbody');
  tbody.innerHTML = '';
  const row = document.createElement('tr');
  const fields = ['perfect', 'minus1', 'plus1', 'energy', 'scale', 'diagonal', 'jaw', 'mood'];
  const headers = ['', 'Perfect Mix', '-1 Mix', '+1 Mix', 'Energy Boost', 'Scale Change', 'Diagonal Mix', "Jaw's Mix", 'Mood Shifter'];
  
  // Colonna Starting Key
  const startCell = document.createElement('td');
  const startIcon = document.createElement('div');
  startIcon.className = 'key-icon compat-key';
  startIcon.style.backgroundColor = keyColors[activeKey];
  startIcon.textContent = activeKey;
  startIcon.title = 'Chiave attiva';
  startCell.appendChild(startIcon);
  row.appendChild(startCell);
  
  // Altre colonne
  fields.forEach(field => {
    const cell = document.createElement('td');
    const compatKey = harmonicData[activeKey][field];
    const icon = document.createElement('div');
    icon.className = 'key-icon compat-key';
    icon.style.backgroundColor = keyColors[compatKey];
    icon.textContent = compatKey;
    icon.title = `${headers[fields.indexOf(field) + 1]}: ${compatKey}`;
    icon.onclick = (e) => {
      e.stopPropagation();
      selectKey(compatKey);
    };
    cell.appendChild(icon);
    row.appendChild(cell);
  });
  
  tbody.appendChild(row);
}

// Reset
document.getElementById('resetBtn').onclick = () => {
  activeKey = null;
  document.getElementById('mixPage').style.display = 'none';
  document.getElementById('mainPage').style.display = 'block';
  document.getElementById('resetBtn').style.display = 'none';
  generateMainPage();
};

// Init
generateMainPage();