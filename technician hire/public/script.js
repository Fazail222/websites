console.log("JS Loaded ✅");
let technicians = [];

function loadFromStorage() {
  technicians = JSON.parse(localStorage.getItem('technicians') || '[]');
}
function saveToStorage() {
  localStorage.setItem('technicians', JSON.stringify(technicians));
}
function deleteTechnician(index) {
  if (confirm("Are you sure you want to delete this technician?")) {
    technicians.splice(index, 1);
    saveToStorage();
    renderList(technicians);
  }
}

function renderList(list) {
  const container = document.getElementById('technicianList');
  container.innerHTML = '';
  if (list.length === 0) {
    container.innerHTML = '<p class="text-center text-3xl text-gray-300">No technicians found.</p>';
    return;
  }

  list.forEach((t, index) => {
    const div = document.createElement('div');
    div.className = 'bg-slate-800 p-5 rounded shadow';
    div.innerHTML = `
      <h3 class="text-lg font-semibold text-slate-400">${t.name}</h3>
      <p class="text-slate-400">${t.category} • ${t.city}</p>
      <p class="text-slate-400">${t.experience} yrs experience</p>
      <p class="text-yellow-400 text-slate-400"><i class="fas fa-star"></i> ${t.rating}</p>
      <button onclick="deleteTechnician(${index})" class="mt-3 bg-slate-600  text-white px-4 py-3 rounded hover:bg-red-600">
        Delete
      </button>
    `;
    container.appendChild(div);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Initialize list
  loadFromStorage();
  renderList(technicians);

  // Add Technician
  const form = document.getElementById('addForm');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const tech = {
      name: form.name.value.trim(),
      category: form.category.value.trim(),
      city: form.city.value.trim(),
      experience: parseFloat(form.experience.value),
      rating: parseFloat(form.rating.value)
    };
    technicians.unshift(tech);
    saveToStorage();
    renderList(technicians);
    form.reset();
  });

  // Search Functionality
  document.getElementById('btnSearch').addEventListener('click', () => {
    const nameQ = document.getElementById('searchName').value.trim().toLowerCase();
    const catQ = document.getElementById('searchCategory').value.trim().toLowerCase();
    const filtered = technicians.filter(t => {
      return (!nameQ || t.name.toLowerCase().includes(nameQ)) &&
             (!catQ || t.category.toLowerCase().includes(catQ));
    });
    renderList(filtered);
  });
});
