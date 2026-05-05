const INITIAL_ANGGOTA = [
    { id: 1, nama: "Rosi", jabatan: "Wakil Ketua", kasBulanIni: "Belum", tabungan: 0 },
    { id: 2, nama: "Bahrul", jabatan: "Anggota Biasa", kasBulanIni: "Belum", tabungan: 0 },
    { id: 3, nama: "Dahrul", jabatan: "Humas RT01", kasBulanIni: "Belum", tabungan: 0 },
    { id: 4, nama: "Ihya", jabatan: "Sekertaris", kasBulanIni: "Belum", tabungan: 0 },
    { id: 5, nama: "Rahmat", jabatan: "Anggota Biasa", kasBulanIni: "Belum", tabungan: 0 },
    { id: 6, nama: "Ratna", jabatan: "Anggota Biasa", kasBulanIni: "Belum", tabungan: 0 },
    { id: 7, nama: "Yongki", jabatan: "Humas RT01", kasBulanIni: "Belum", tabungan: 0 },
    { id: 8, nama: "Aji", jabatan: "Anggota Biasa", kasBulanIni: "Belum", tabungan: 0 },
    { id: 9, nama: "Viana", jabatan: "Anggota Biasa", kasBulanIni: "Belum", tabungan: 0 },
    { id: 10, nama: "Irwan", jabatan: "Anggota Biasa", kasBulanIni: "Belum", tabungan: 0 },
    { id: 11, nama: "Gibran", jabatan: "Anggota Biasa", kasBulanIni: "Belum", tabungan: 0 },
    { id: 12, nama: "Ponisih", jabatan: "Anggota Biasa", kasBulanIni: "Belum", tabungan: 0 },
    { id: 13, nama: "Kheisa", jabatan: "Sosial Media", kasBulanIni: "Belum", tabungan: 0 },
    { id: 14, nama: "Reyhan", jabatan: "Anggota Biasa", kasBulanIni: "Belum", tabungan: 0 },
    { id: 15, nama: "Diky", jabatan: "Ketua", kasBulanIni: "Belum", tabungan: 0 },
    { id: 16, nama: "Cinta", jabatan: "Anggota Biasa", kasBulanIni: "Belum", tabungan: 0 },
    { id: 17, nama: "Linda", jabatan: "Sosial Media", kasBulanIni: "Belum", tabungan: 0 },
    { id: 18, nama: "Dewi", jabatan: "Anggota Biasa", kasBulanIni: "Belum", tabungan: 0 },
    { id: 19, nama: "Nesya", jabatan: "Anggota Biasa", kasBulanIni: "Belum", tabungan: 0 },
    { id: 20, nama: "Shinta", jabatan: "Anggota Biasa", kasBulanIni: "Belum", tabungan: 0 },
    { id: 21, nama: "Ahmed", jabatan: "Anggota Biasa", kasBulanIni: "Belum", tabungan: 0 },
    { id: 22, nama: "Pita", jabatan: "Anggota Biasa", kasBulanIni: "Belum", tabungan: 0 },
    { id: 23, nama: "Apri", jabatan: "Anggota Biasa", kasBulanIni: "Belum", tabungan: 0 },
    { id: 24, nama: "Adhin", jabatan: "Anggota Biasa", kasBulanIni: "Belum", tabungan: 0 },
    { id: 25, nama: "Andhika", jabatan: "Anggota Biasa", kasBulanIni: "Belum", tabungan: 0 },
    { id: 26, nama: "Novia", jabatan: "Anggota Biasa", kasBulanIni: "Belum", tabungan: 0 },
    { id: 27, nama: "Akbar", jabatan: "Bendahara", kasBulanIni: "Belum", tabungan: 0 },
    { id: 28, nama: "Bima", jabatan: "Anggota Biasa", kasBulanIni: "Belum", tabungan: 0 },
    { id: 30, nama: "Afifah", jabatan: "Anggota Biasa", kasBulanIni: "Belum", tabungan: 0 },
    { id: 31, nama: "Nabila", jabatan: "Anggota Biasa", kasBulanIni: "Belum", tabungan: 0 },
    { id: 32, nama: "Tyas", jabatan: "Anggota Biasa", kasBulanIni: "Belum", tabungan: 0 },
    { id: 33, nama: "Shintya", jabatan: "Anggota Biasa", kasBulanIni: "Belum", tabungan: 0 },
    { id: 34, nama: "Ferlita", jabatan: "Anggota Biasa", kasBulanIni: "Belum", tabungan: 0 },
    { id: 35, nama: "Hayu", jabatan: "Anggota Biasa", kasBulanIni: "Belum", tabungan: 0 },
    { id: 36, nama: "Apin", jabatan: "Anggota Biasa", kasBulanIni: "Belum", tabungan: 0 },
    { id: 37, nama: "Firman", jabatan: "Anggota Biasa", kasBulanIni: "Belum", tabungan: 0 },
    { id: 38, nama: "Hery", jabatan: "Anggota Biasa", kasBulanIni: "Belum", tabungan: 0 },
    { id: 39, nama: "Ilham", jabatan: "Anggota Biasa", kasBulanIni: "Belum", tabungan: 0 },
    { id: 40, nama: "Syifa", jabatan: "Anggota Biasa", kasBulanIni: "Belum", tabungan: 0 },
    { id: 41, nama: "Miranda", jabatan: "Sekertaris", kasBulanIni: "Belum", tabungan: 0 },
    { id: 42, nama: "Falya", jabatan: "Humas RT02", kasBulanIni: "Belum", tabungan: 0 },
    { id: 43, nama: "Lisa", jabatan: "Anggota Biasa", kasBulanIni: "Belum", tabungan: 0 },
    { id: 44, nama: "Kiki", jabatan: "Anggota Biasa", kasBulanIni: "Belum", tabungan: 0 },
    { id: 45, nama: "Aulia", jabatan: "Bendahara", kasBulanIni: "Belum", tabungan: 0 },
    { id: 46, nama: "Budi", jabatan: "Anggota Biasa", kasBulanIni: "Belum", tabungan: 0 },
    { id: 47, nama: "Sakti", jabatan: "Anggota Biasa", kasBulanIni: "Belum", tabungan: 0 },
    { id: 48, nama: "Angga", jabatan: "Humas RT02", kasBulanIni: "Belum", tabungan: 0 },
    { id: 49, nama: "Yuda", jabatan: "Anggota Biasa", kasBulanIni: "Belum", tabungan: 0 },
    { id: 50, nama: "Nashwa", jabatan: "Anggota Biasa", kasBulanIni: "Belum", tabungan: 0 },
    { id: 51, nama: "Eko", jabatan: "Anggota Biasa", kasBulanIni: "Belum", tabungan: 0 },
    { id: 52, nama: "Andri", jabatan: "Anggota Biasa", kasBulanIni: "Belum", tabungan: 0 },
    { id: 53, nama: "Joko", jabatan: "Anggota Biasa", kasBulanIni: "Belum", tabungan: 0 },
    { id: 54, nama: "Agus Rembo", jabatan: "Anggota Biasa", kasBulanIni: "Belum", tabungan: 0 },
    { id: 56, nama: "Amalia", jabatan: "Anggota Biasa", kasBulanIni: "Belum", tabungan: 0 },
    { id: 57, nama: "Meysa", jabatan: "Anggota Biasa", kasBulanIni: "Belum", tabungan: 0 },
    { id: 58, nama: "Putri", jabatan: "Anggota Biasa", kasBulanIni: "Belum", tabungan: 0 },
    { id: 59, nama: "Nadia", jabatan: "Anggota Biasa", kasBulanIni: "Belum", tabungan: 0 }
];

// App State
let appData = {
    anggota: [],
    transaksi: [], // {id, tanggal, jenis(Pemasukan/Pengeluaran), keterangan, nominal}
    notulensi: [] // {id, tanggal, judul, hasil}
};

let currentUser = {
    role: null, // ketua, wakil, sekertaris, bendahara, humas_rt01, humas_rt02, sosmed, anggota
    name: null,
    jabatan: null
};

const AUTH_KEY = 'karangTarunaAuth_v1';

const saveAuthState = () => {
    localStorage.setItem(AUTH_KEY, JSON.stringify(currentUser));
};

const clearAuthState = () => {
    localStorage.removeItem(AUTH_KEY);
};

const restoreAuthState = () => {
    const saved = localStorage.getItem(AUTH_KEY);
    if (!saved) return;

    try {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.role && parsed.name) {
            currentUser = parsed;
            document.getElementById('login-screen').classList.remove('active');
            document.getElementById('app-screen').classList.add('active');
            document.getElementById('current-user-role').textContent = `${currentUser.name}${currentUser.jabatan ? ` (${currentUser.jabatan})` : ''}`;
            applyRBAC();
            const dashboardLink = document.querySelector('.nav-links a[data-target="dashboard"]');
            if (dashboardLink) dashboardLink.click();
        }
    } catch (error) {
        console.warn('Gagal memulihkan sesi login:', error);
    }
};

// Utilities
const formatRp = (angka) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(angka);
};

const formatDate = (dateStr) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString('id-ID', options);
};

const generateId = () => Math.random().toString(36).substr(2, 9);
const STORAGE_KEY = 'karangTarunaData_v2';

// Firebase Realtime Database configuration (optional)
const firebaseConfig = {
    apiKey: "", // isi dengan API key Firebase Anda
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};

let firebaseApp = null;
let firebaseDatabase = null;
let firebaseRef = null;
let remoteSyncEnabled = false;
let isRemoteWriting = false;

const initFirebaseSync = () => {
    if (!window.firebase || !firebaseConfig.apiKey || !firebaseConfig.databaseURL) {
        console.warn('Firebase tidak dikonfigurasi atau skrip Firebase tidak tersedia. Sinkronisasi remote dinonaktifkan.');
        return;
    }

    try {
        firebaseApp = firebase.initializeApp(firebaseConfig);
        firebaseDatabase = firebase.database(firebaseApp);
        firebaseRef = firebaseDatabase.ref(STORAGE_KEY);
        remoteSyncEnabled = true;
        firebaseRef.on('value', snapshot => {
            if (isRemoteWriting) {
                return;
            }
            const remoteData = snapshot.val();
            if (!remoteData) {
                return;
            }
            const localJson = JSON.stringify(appData);
            const remoteJson = JSON.stringify(remoteData);
            if (remoteJson !== localJson) {
                appData = remoteData;
                saveDataWithoutRemote();
                console.log('Data tersinkronisasi dari Firebase.');
            }
        });
        console.log('Firebase sync diinisialisasi.');
    } catch (error) {
        console.warn('Inisialisasi Firebase gagal:', error);
        remoteSyncEnabled = false;
    }
};

const saveDataToRemote = () => {
    if (!remoteSyncEnabled || !firebaseRef) return;
    try {
        isRemoteWriting = true;
        firebaseRef.set(appData).finally(() => {
            isRemoteWriting = false;
        });
    } catch (error) {
        console.warn('Gagal menyimpan data ke Firebase:', error);
        isRemoteWriting = false;
    }
};

const saveDataWithoutRemote = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
    updateDashboard();
    renderKasTable();
    renderTransaksiTable();
    renderNotulensi();
    updateLaporan();
    if (typeof renderManageAnggota === 'function') renderManageAnggota();
};

// Load Data
const loadData = () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        appData = JSON.parse(saved);
        
        let needSave = false;
        appData.anggota = appData.anggota.map(a => {
            if (!a.username) {
                needSave = true;
                return { ...a, username: a.nama.toLowerCase().replace(/\s+/g, ''), password: '123' };
            }
            return a;
        });
        
        if (needSave) {
            saveData();
        } else {
            updateDashboard();
            renderKasTable();
            renderTransaksiTable();
            renderNotulensi();
            updateLaporan();
            if (typeof renderManageAnggota === 'function') renderManageAnggota();
        }
    } else {
        appData.anggota = INITIAL_ANGGOTA.map(a => ({
            ...a,
            username: a.nama.toLowerCase().replace(/\s+/g, ''),
            password: '123'
        }));
        saveData();
    }
};

const saveData = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
    updateDashboard();
    renderKasTable();
    renderTransaksiTable();
    renderNotulensi();
    updateLaporan();
    if (typeof renderManageAnggota === 'function') renderManageAnggota();
    if (remoteSyncEnabled) {
        saveDataToRemote();
    }
};

const exportAppData = () => {
    const dataStr = JSON.stringify(appData, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `karangtaruna-data-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
};

const importAppData = (jsonString) => {
    try {
        const parsed = JSON.parse(jsonString);
        if (!parsed || typeof parsed !== 'object') throw new Error('Format JSON tidak valid.');
        if (!Array.isArray(parsed.anggota) || !Array.isArray(parsed.transaksi) || !Array.isArray(parsed.notulensi)) {
            throw new Error('Struktur data tidak sesuai.');
        }

        appData = parsed;
        saveData();
        alert('Data berhasil diimpor dan disimpan.');
        document.getElementById('modal-export-import').classList.remove('active');
        return true;
    } catch (error) {
        alert('Gagal mengimpor data: ' + error.message);
        return false;
    }
};

window.addEventListener('storage', (event) => {
    if (event.key !== STORAGE_KEY) return;
    if (!event.newValue) return;

    try {
        appData = JSON.parse(event.newValue);
        updateDashboard();
        renderKasTable();
        renderTransaksiTable();
        renderNotulensi();
        updateLaporan();
        if (typeof renderManageAnggota === 'function') renderManageAnggota();
    } catch (error) {
        console.error('Gagal menyinkronkan data dari storage:', error);
    }
});

// Data Pengurus Inti (Hanya akun ini yang diizinkan masuk)
const ALLOWED_USERS = [
    { username: 'mhmddikyy', password: 'Ketua', nama: 'Diky', role: 'ketua', jabatan: 'Ketua' },
    { username: 'Rosiqin', password: 'WakilKetua', nama: 'Rosi', role: 'wakil', jabatan: 'Wakil Ketua' },
    { username: 'Ihya', password: 'Sekertaris', nama: 'Ihya', role: 'sekertaris', jabatan: 'Sekertaris' },
    { username: 'Miranda', password: 'Sekertaris', nama: 'Miranda', role: 'sekertaris', jabatan: 'Sekertaris' },
    { username: 'Aulia', password: 'Bendahara', nama: 'Aulia', role: 'bendahara', jabatan: 'Bendahara' },
    { username: 'Akbar', password: 'Bendahara', nama: 'Akbar', role: 'bendahara', jabatan: 'Bendahara' }
];

// Authentication
const btnLogin = document.getElementById('btn-login');
const btnLogout = document.getElementById('btn-logout');

btnLogin.addEventListener('click', () => {
    const usernameInput = document.getElementById('username-input').value.trim();
    const passwordInput = document.getElementById('password-input').value;
    
    if (!usernameInput || !passwordInput) {
        alert("Silakan masukkan username dan password!");
        return;
    }

    // Pengecekan spesifik hanya untuk pengurus inti yang terdaftar
    const user = ALLOWED_USERS.find(u => u.username.toLowerCase() === usernameInput.toLowerCase() && u.password === passwordInput);
    
    if (!user) {
        alert("Akses Ditolak! Hanya pengurus muda-mudi yang diizinkan untuk mengakses sistem. Username atau password mungkin salah.");
        return;
    }

    currentUser = { role: user.role, name: user.nama, jabatan: user.jabatan };
    saveAuthState();
    
    // Switch Screen
    document.getElementById('login-screen').classList.remove('active');
    document.getElementById('app-screen').classList.add('active');
    
    // Set UI
    document.getElementById('current-user-role').textContent = `${user.nama} (${user.jabatan})`;
    applyRBAC();
    
    // Load default page
    document.querySelector('.nav-links a[data-target="dashboard"]').click();
});

btnLogout.addEventListener('click', () => {
    currentUser = { role: null, name: null, jabatan: null };
    clearAuthState();
    document.getElementById('app-screen').classList.remove('active');
    document.getElementById('login-screen').classList.add('active');
});

// Role-Based Access Control (RBAC)
const applyRBAC = () => {
    // Nav Links
    document.querySelectorAll('.sidebar .restricted').forEach(el => {
        const allowed = el.getAttribute('data-allowed').split(',');
        if (allowed.includes(currentUser.role)) {
            el.style.display = 'block';
        } else {
            el.style.display = 'none';
        }
    });

    // Action Buttons
    document.querySelectorAll('.action-restricted').forEach(el => {
        const allowed = el.getAttribute('data-allowed').split(',');
        if (allowed.includes(currentUser.role)) {
            el.style.display = 'inline-flex'; // or block based on class, inline-flex for btns
        } else {
            el.style.display = 'none';
        }
    });
};

// Navigation
const navLinks = document.querySelectorAll('.nav-links a');
const pages = document.querySelectorAll('.page');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remove active class from all links and pages
        navLinks.forEach(l => l.classList.remove('active'));
        pages.forEach(p => p.classList.remove('active'));
        
        // Add active class to clicked link and target page
        link.classList.add('active');
        const targetId = link.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');

        // Special render on navigate
        if(targetId === 'laporan') updateLaporan();
    });
});

// Tabs (Keuangan)
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        
        btn.classList.add('active');
        document.getElementById(btn.getAttribute('data-tab')).classList.add('active');
    });
});

// --- Modals Logic ---
const modals = document.querySelectorAll('.modal');
const closeBtns = document.querySelectorAll('.close-modal');

closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        modals.forEach(m => m.classList.remove('active'));
    });
});

// Tutup modal jika klik di luar
window.addEventListener('click', (e) => {
    modals.forEach(m => {
        if (e.target === m) m.classList.remove('active');
    });
});

// --- Keuangan: Kas & Tabungan ---
const renderKasTable = (searchTerm = '') => {
    const tbody = document.getElementById('table-kas-body');
    tbody.innerHTML = '';

    const filtered = appData.anggota.filter(a => a.nama.toLowerCase().includes(searchTerm.toLowerCase()));

    filtered.forEach(a => {
        const statusClass = a.kasBulanIni === 'Lunas' ? 'status-lunas' : 'status-belum';
        const isKeuanganEditor = ['bendahara', 'ketua', 'wakil'].includes(currentUser.role);
        
        const actionBtn = isKeuanganEditor 
            ? `<button class="btn btn-secondary btn-sm" onclick="openKasModal(${a.id})"><i class="fa-solid fa-edit"></i> Update</button>`
            : `-`;

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${a.nama}</td>
            <td><span class="badge badge-dark">${a.jabatan}</span></td>
            <td><span class="status-badge ${statusClass}">${a.kasBulanIni}</span></td>
            <td class="fw-bold">${formatRp(a.tabungan)}</td>
            <td>${actionBtn}</td>
        `;
        tbody.appendChild(tr);
    });
};

document.getElementById('search-anggota').addEventListener('input', (e) => {
    renderKasTable(e.target.value);
});

// Global function to be called from inline onclick
window.openKasModal = (id) => {
    const anggota = appData.anggota.find(a => a.id === id);
    if(!anggota) return;

    document.getElementById('kas-anggota-nama').textContent = anggota.nama;
    document.getElementById('input-kas-id').value = anggota.id;
    document.getElementById('input-kas-status').value = anggota.kasBulanIni;
    document.getElementById('input-kas-tabungan').value = 0; // reset input
    document.getElementById('kas-tabungan-current').textContent = formatRp(anggota.tabungan);

    document.getElementById('modal-kas').classList.add('active');
};

document.getElementById('form-kas').addEventListener('submit', (e) => {
    e.preventDefault();
    const id = parseInt(document.getElementById('input-kas-id').value);
    const status = document.getElementById('input-kas-status').value;
    const nambahTabungan = parseInt(document.getElementById('input-kas-tabungan').value) || 0;

    const anggotaIndex = appData.anggota.findIndex(a => a.id === id);
    if(anggotaIndex > -1) {
        appData.anggota[anggotaIndex].kasBulanIni = status;
        appData.anggota[anggotaIndex].tabungan += nambahTabungan;
        
        // Catat sebagai pemasukan tabungan jika ada
        if (nambahTabungan > 0) {
            appData.transaksi.push({
                id: generateId(),
                tanggal: new Date().toISOString().split('T')[0],
                jenis: 'Pemasukan',
                keterangan: `Tabungan a.n ${appData.anggota[anggotaIndex].nama}`,
                nominal: nambahTabungan
            });
        }

        saveData();
        document.getElementById('modal-kas').classList.remove('active');
    }
});


// --- Keuangan: Transaksi ---
const renderTransaksiTable = () => {
    const tbody = document.getElementById('table-transaksi-body');
    tbody.innerHTML = '';

    // Hitung Pemasukan Kas Otomatis
    const totalKasMasuk = appData.anggota.filter(a => a.kasBulanIni === 'Lunas').length * 5000;
    
    // Render baris otomatis untuk Kas (tidak bisa dihapus)
    if (totalKasMasuk > 0) {
        tbody.innerHTML += `
            <tr style="background: rgba(16, 185, 129, 0.05);">
                <td>Bulan Ini</td>
                <td><strong>Akumulasi Uang Kas Anggota Lunas</strong></td>
                <td><span class="status-badge status-lunas">Pemasukan</span></td>
                <td class="fw-bold text-success">+ ${formatRp(totalKasMasuk)}</td>
                <td><em>Otomatis</em></td>
            </tr>
        `;
    }

    // Render manual transaksi
    let totalPemasukan = totalKasMasuk;
    let totalPengeluaran = 0;

    // Sort by date desc
    const sortedTrans = [...appData.transaksi].sort((a,b) => new Date(b.tanggal) - new Date(a.tanggal));

    sortedTrans.forEach(t => {
        if(t.jenis === 'Pemasukan') totalPemasukan += t.nominal;
        if(t.jenis === 'Pengeluaran') totalPengeluaran += t.nominal;

        const badgeClass = t.jenis === 'Pemasukan' ? 'status-lunas' : 'status-belum';
        const textClass = t.jenis === 'Pemasukan' ? 'text-success' : 'text-danger';
        const sign = t.jenis === 'Pemasukan' ? '+' : '-';
        
        const isKeuanganEditor = ['bendahara', 'ketua', 'wakil'].includes(currentUser.role);
        const actionBtn = isKeuanganEditor 
            ? `<button class="btn btn-danger-outline btn-sm" onclick="deleteTransaksi('${t.id}')"><i class="fa-solid fa-trash"></i></button>`
            : `-`;

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${formatDate(t.tanggal)}</td>
            <td>${t.keterangan}</td>
            <td><span class="status-badge ${badgeClass}">${t.jenis}</span></td>
            <td class="fw-bold ${textClass}">${sign} ${formatRp(t.nominal)}</td>
            <td>${actionBtn}</td>
        `;
        tbody.appendChild(tr);
    });

    // Update Summary Boxes
    const saldoAkhir = totalPemasukan - totalPengeluaran;
    document.getElementById('tot-pemasukan').textContent = formatRp(totalPemasukan);
    document.getElementById('tot-pengeluaran').textContent = formatRp(totalPengeluaran);
    document.getElementById('tot-saldo').textContent = formatRp(saldoAkhir);
};

document.getElementById('btn-tambah-transaksi').addEventListener('click', () => {
    document.getElementById('form-transaksi').reset();
    document.getElementById('modal-transaksi').classList.add('active');
});

document.getElementById('form-transaksi').addEventListener('submit', (e) => {
    e.preventDefault();
    const jenis = document.getElementById('input-trans-jenis').value;
    const keterangan = document.getElementById('input-trans-keterangan').value;
    const nominal = parseInt(document.getElementById('input-trans-nominal').value);

    appData.transaksi.push({
        id: generateId(),
        tanggal: new Date().toISOString().split('T')[0],
        jenis,
        keterangan,
        nominal
    });

    saveData();
    document.getElementById('modal-transaksi').classList.remove('active');
});

window.deleteTransaksi = (id) => {
    if(confirm("Hapus transaksi ini?")) {
        appData.transaksi = appData.transaksi.filter(t => t.id !== id);
        saveData();
    }
};

// --- Notulensi Rapat ---
const renderNotulensi = () => {
    const list = document.getElementById('notulensi-list');
    list.innerHTML = '';

    if(appData.notulensi.length === 0) {
        list.innerHTML = `<p class="empty-state">Belum ada catatan notulensi rapat.</p>`;
        return;
    }

    // Sort by date desc
    const sorted = [...appData.notulensi].sort((a,b) => new Date(b.tanggal) - new Date(a.tanggal));

    sorted.forEach(n => {
        const isSekertaris = ['sekertaris', 'ketua'].includes(currentUser.role);
        const delBtn = isSekertaris ? `<button class="btn btn-danger-outline btn-sm mt-2" onclick="deleteNotulensi('${n.id}')">Hapus</button>` : '';
        
        const div = document.createElement('div');
        div.className = 'timeline-item';
        div.innerHTML = `
            <div class="timeline-date">${formatDate(n.tanggal)}</div>
            <div class="timeline-content">
                <h3>${n.judul}</h3>
                <p>${n.hasil}</p>
                ${delBtn}
            </div>
        `;
        list.appendChild(div);
    });
};

document.getElementById('btn-tambah-notulensi').addEventListener('click', () => {
    document.getElementById('form-notulensi').reset();
    document.getElementById('modal-notulensi').classList.add('active');
});

document.getElementById('form-notulensi').addEventListener('submit', (e) => {
    e.preventDefault();
    const tanggal = document.getElementById('input-notulensi-tanggal').value;
    const judul = document.getElementById('input-notulensi-judul').value;
    const hasil = document.getElementById('input-notulensi-hasil').value;

    appData.notulensi.push({
        id: generateId(),
        tanggal,
        judul,
        hasil
    });

    saveData();
    document.getElementById('modal-notulensi').classList.remove('active');
});

window.deleteNotulensi = (id) => {
    if(confirm("Hapus notulensi ini?")) {
        appData.notulensi = appData.notulensi.filter(n => n.id !== id);
        saveData();
    }
};


// --- Dashboard & Laporan ---
const updateDashboard = () => {
    // Total Kas (Kas Bulan Ini Lunas * 5000)
    const totalKasBulanIni = appData.anggota.filter(a => a.kasBulanIni === 'Lunas').length * 5000;
    
    // Total Tabungan Keseluruhan
    const totalTabungan = appData.anggota.reduce((sum, a) => sum + a.tabungan, 0);

    document.getElementById('dash-total-kas').textContent = formatRp(totalKasBulanIni);
    document.getElementById('dash-total-tabungan').textContent = formatRp(totalTabungan);

    // Pengumuman Terakhir
    const lastNotulensi = [...appData.notulensi].sort((a,b) => new Date(b.tanggal) - new Date(a.tanggal))[0];
    const pengumumanDiv = document.getElementById('dash-pengumuman');
    
    if (lastNotulensi) {
        pengumumanDiv.innerHTML = `
            <strong>${lastNotulensi.judul} (${formatDate(lastNotulensi.tanggal)})</strong>
            <p class="mt-2 text-muted" style="white-space:pre-line; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;">${lastNotulensi.hasil}</p>
        `;
    } else {
        pengumumanDiv.innerHTML = `<p class="empty-state">Belum ada pengumuman.</p>`;
    }
};

const updateLaporan = () => {
    const today = new Date();
    document.getElementById('report-date').textContent = `Periode Cetak: ${today.toLocaleDateString('id-ID', {day: 'numeric', month: 'long', year: 'numeric'})}`;

    // Keuangan Calculate
    const totalKasMasuk = appData.anggota.filter(a => a.kasBulanIni === 'Lunas').length * 5000;
    let totalPemasukan = totalKasMasuk;
    let totalPengeluaran = 0;

    appData.transaksi.forEach(t => {
        if(t.jenis === 'Pemasukan') totalPemasukan += t.nominal;
        if(t.jenis === 'Pengeluaran') totalPengeluaran += t.nominal;
    });

    const totalTabungan = appData.anggota.reduce((sum, a) => sum + a.tabungan, 0);
    const saldoAkhir = totalPemasukan - totalPengeluaran;

    document.getElementById('rep-pemasukan').textContent = `+ ${formatRp(totalPemasukan)}`;
    document.getElementById('rep-pengeluaran').textContent = `- ${formatRp(totalPengeluaran)}`;
    document.getElementById('rep-saldo-akhir').textContent = formatRp(saldoAkhir);
    document.getElementById('rep-tabungan').textContent = formatRp(totalTabungan);

    // Rapat Terakhir
    const lastNotulensi = [...appData.notulensi].sort((a,b) => new Date(b.tanggal) - new Date(a.tanggal))[0];
    const repNotulensi = document.getElementById('rep-notulensi');
    
    if (lastNotulensi) {
        repNotulensi.innerHTML = `
            <h4>${lastNotulensi.judul} - ${formatDate(lastNotulensi.tanggal)}</h4>
            <p>${lastNotulensi.hasil}</p>
        `;
    } else {
        repNotulensi.innerHTML = `<p class="empty-state">Belum ada data rapat yang dicatat.</p>`;
    }
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    initFirebaseSync();
    loadData();
    restoreAuthState();

    if (remoteSyncEnabled && firebaseRef) {
        firebaseRef.once('value')
            .then(snapshot => {
                if (snapshot.exists()) {
                    const remoteData = snapshot.val();
                    if (JSON.stringify(remoteData) !== JSON.stringify(appData)) {
                        appData = remoteData;
                        saveDataWithoutRemote();
                    }
                } else {
                    saveDataToRemote();
                }
            })
            .catch(error => console.warn('Gagal mengambil data remote:', error));
    }

    const exportOpenBtn = document.getElementById('btn-open-export-import');
    if (exportOpenBtn) {
        exportOpenBtn.addEventListener('click', () => {
            document.getElementById('input-import-json').value = '';
            document.getElementById('modal-export-import').classList.add('active');
        });
    }

    const exportBtn = document.getElementById('btn-export-data');
    if (exportBtn) {
        exportBtn.addEventListener('click', exportAppData);
    }

    const importBtn = document.getElementById('btn-import-data');
    if (importBtn) {
        importBtn.addEventListener('click', () => {
            const jsonString = document.getElementById('input-import-json').value.trim();
            if (!jsonString) {
                alert('Masukkan data JSON yang valid untuk diimpor.');
                return;
            }
            importAppData(jsonString);
        });
    }
});

// --- Manajemen Anggota ---
const renderManageAnggota = (searchTerm = '') => {
    const tbody = document.getElementById('table-manage-anggota-body');
    if (!tbody) return;
    tbody.innerHTML = '';

    const filtered = appData.anggota.filter(a => a.nama.toLowerCase().includes(searchTerm.toLowerCase()));

    filtered.forEach(a => {
        const isSekertarisOrKetua = ['sekertaris', 'ketua'].includes(currentUser.role);
        
        const actionBtn = isSekertarisOrKetua 
            ? `<button class="btn btn-secondary btn-sm" onclick="openEditAnggota(${a.id})"><i class="fa-solid fa-edit"></i> Edit</button>
               <button class="btn btn-danger-outline btn-sm" onclick="deleteAnggota(${a.id})"><i class="fa-solid fa-trash"></i></button>`
            : `-`;

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${a.nama}</td>
            <td><span class="badge badge-dark">${a.jabatan}</span></td>
            <td><div style="display: flex; gap: 8px;">${actionBtn}</div></td>
        `;
        tbody.appendChild(tr);
    });
};

const searchManageInput = document.getElementById('search-manage-anggota');
if (searchManageInput) {
    searchManageInput.addEventListener('input', (e) => {
        renderManageAnggota(e.target.value);
    });
}

const btnTambahAnggota = document.getElementById('btn-tambah-anggota');
if (btnTambahAnggota) {
    btnTambahAnggota.addEventListener('click', () => {
        document.getElementById('form-manage-anggota').reset();
        document.getElementById('input-mng-id').value = '';
        document.getElementById('modal-manage-anggota-title').textContent = 'Tambah Anggota Baru';
        document.getElementById('modal-manage-anggota').classList.add('active');
    });
}

const formManageAnggota = document.getElementById('form-manage-anggota');
if (formManageAnggota) {
    formManageAnggota.addEventListener('submit', (e) => {
        e.preventDefault();
        const idVal = document.getElementById('input-mng-id').value;
        const nama = document.getElementById('input-mng-nama').value;
        const jabatan = document.getElementById('input-mng-jabatan').value;

        if (idVal) {
            // Edit
            const id = parseInt(idVal);
            const idx = appData.anggota.findIndex(a => a.id === id);
            if (idx > -1) {
                appData.anggota[idx].nama = nama;
                appData.anggota[idx].jabatan = jabatan;
            }
        } else {
            // Tambah
            const newId = appData.anggota.length > 0 ? Math.max(...appData.anggota.map(a => a.id)) + 1 : 1;
            appData.anggota.push({
                id: newId,
                nama,
                jabatan,
                kasBulanIni: "Belum",
                tabungan: 0,
                username: nama.toLowerCase().replace(/\s+/g, ''),
                password: '123'
            });
        }

        saveData();
        document.getElementById('modal-manage-anggota').classList.remove('active');
    });
}

window.openEditAnggota = (id) => {
    const anggota = appData.anggota.find(a => a.id === id);
    if (!anggota) return;

    document.getElementById('input-mng-id').value = anggota.id;
    document.getElementById('input-mng-nama').value = anggota.nama;
    document.getElementById('input-mng-jabatan').value = anggota.jabatan;
    
    document.getElementById('modal-manage-anggota-title').textContent = 'Edit Anggota';
    document.getElementById('modal-manage-anggota').classList.add('active');
};

window.deleteAnggota = (id) => {
    if (confirm("Apakah Anda yakin ingin menghapus anggota ini secara permanen?")) {
        appData.anggota = appData.anggota.filter(a => a.id !== id);
        saveData();
    }
};

// --- PWA Install Prompt ---
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    
    // Update UI notify the user they can install the PWA
    const installBtn = document.getElementById('btn-install');
    if (installBtn) {
        installBtn.style.display = 'block';
        installBtn.addEventListener('click', () => {
            // Hide the app provided install promotion
            installBtn.style.display = 'none';
            // Show the install prompt
            deferredPrompt.prompt();
            // Wait for the user to respond to the prompt
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the install prompt');
                } else {
                    console.log('User dismissed the install prompt');
                }
                deferredPrompt = null;
            });
        });
    }
});
